# PR-1226 CI follow-up â€” Phase 1: restore signal in PR feedback

This plan covers the first three CI follow-ups from the PR-1226 investigation. The goal of Phase 1 is to make the `tests-summary` PR comment trustworthy: the same input must produce the same sampled pages, the headline number must reflect distinct failing tests, and reviewers must be able to tell infrastructure noise from real content regressions.

## Scope

| # | GitHub | Jira | Title | Status | PR | Owner |
|---|---|---|---|---|---|---|
| 1 | [#1240](https://github.com/vtexdocs/devportal/issues/1240) | [EDU-18161](https://vtex-dev.atlassian.net/browse/EDU-18161) | Make `documentation-pages-status.cy.js` deterministic and unify navigation source | In progress | â€” | Codex |
| 2 | [#1234](https://github.com/vtexdocs/devportal/issues/1234) | [EDU-18154](https://vtex-dev.atlassian.net/browse/EDU-18154) | Fix `tests-summary` PR comment to count distinct failing tests | Not started | â€” | â€” |
| 3 | [#1241](https://github.com/vtexdocs/devportal/issues/1241) | [EDU-18162](https://vtex-dev.atlassian.net/browse/EDU-18162) | Reduce preview-infrastructure noise in `documentation-pages-status.cy.js` | Not started | â€” | â€” |

Parent epic: [EDU-1539 â€” Platforms & Tooling](https://vtex-dev.atlassian.net/browse/EDU-1539).

### Status legend

- **Not started** â€” no branch, no Jira movement.
- **In progress** â€” branch open, code being written. Jira: `In Progress`.
- **In review** â€” PR open and awaiting review. Jira: `In Review`.
- **Blocked** â€” waiting on a decision, dependency, or external review. Add a note in the Update log explaining why.
- **Done** â€” PR merged, Jira `Done`, PM verification passed.

When updating a task's status, update **both** the row in this table and the **Status** line inside that task's section, then append an entry to the [Update log](#update-log) at the bottom.

## Sequencing rationale

1. **Determinism first ([EDU-18161](https://vtex-dev.atlassian.net/browse/EDU-18161))** â€” without a reproducible page set, no later summary fix can be verified run-over-run.
2. **Counts second ([EDU-18154](https://vtex-dev.atlassian.net/browse/EDU-18154))** â€” the headline number is the most visible defect. Doing this before classification lets us introduce a single structured failure record that the next task can extend.
3. **Classification third ([EDU-18162](https://vtex-dev.atlassian.net/browse/EDU-18162))** â€” depends on the structured failure records introduced by step 2.

## Files in scope

- `src/tests/utils/select-pages.js`
- `src/tests/utils/summary-report.js`
- `src/tests/cypress/support/functions.js`
- `src/tests/cypress/integration/documentation-pages-status.cy.js`
- `.github/workflows/cypress.yml`
- `.github/workflows/cypress-extensive.yml`

---

## Task 1 â€” Determinism + single navigation source ([EDU-18161](https://vtex-dev.atlassian.net/browse/EDU-18161))

**Status:** In progress Â· **PR:** â€” Â· **Owner:** Codex

### Problem (recap)

`select-pages.js` uses `Math.random()` and imports `public/navigation.json` directly. Both workflows separately download `developers.vtex.com/navigation.json` into a fixture that nothing reads. Two failure modes follow: the page set drifts every run, and the workflow wires together two competing sources of navigation data.

### Approach

1. **Seeded PRNG in `select-pages.js`**
   - Replace `Math.random()` calls with a seeded PRNG (mulberry32 over a 32-bit hash of a seed string).
   - Read seed from `process.env.SAMPLE_SEED`; fall back to a time-based seed for local development.
   - Apply the same PRNG to both the page sample loop and the inner OpenAPI endpoint walk so the entire selection is reproducible.

2. **Single navigation source**
   - Decide between two sources and keep one:
     - **Option A (recommended):** keep `public/navigation.json` (the file built into the PR's preview). Pro: tests the navigation that ships with the PR. Action: delete the `Fetch navigation.json` step from both workflows.
     - **Option B:** switch the sampler to `src/tests/cypress/fixtures/navigation.json` (downloaded at runtime). Pro: tests against current production navigation. Action: update `select-pages.js` to import the fixture and keep the curl step.
   - Document the choice in the workflow file (comment) and in the summary header.

3. **Surface the sampled list**
   - Pass the seed and the resolved sampled-page list to `summary-report.js`. Print a "Sampled pages (seed `<sha7>`)" section at the top of the comment so reviewers can reproduce locally with the same seed.

4. **Workflow wiring**
   - In `.github/workflows/cypress.yml`, set `env: SAMPLE_SEED: ${{ github.event.pull_request.head.sha || github.sha }}` on the `Cypress integration tests` step.
   - In `.github/workflows/cypress-extensive.yml`, set `SAMPLE_SEED: ${{ github.run_id }}` (extensive runs are manual, no PR SHA to pin to).

### Acceptance

- Re-running the workflow for the same commit (no code change) yields the same sampled page list.
- The summary comment lists which pages were tested.
- Only one navigation source remains wired in both workflows.

### Verification (engineering)

- Run `node -e "process.env.SAMPLE_SEED='abc'; const {selectRandomPages} = require('./src/tests/utils/select-pages.js'); console.log(selectRandomPages({prob:0.1}))"` twice and diff outputs.
- Re-run the PR workflow on the same SHA via "Re-run jobs" and diff the new comment against the previous one.

### PM review guide

You don't need to read code to verify this fix. Open the PR that implements Task 1 and:

1. **Find the `tests-summary` PR comment.** It's posted automatically by the "Integration and Component tests" workflow.
2. **Look for a new "Sampled pages" section** at the top of the comment. It should:
   - List the actual page paths that were tested (e.g. `docs/guides/brands`, `docs/api-reference/...`).
   - Include a short identifier in the header such as `seed: a1b2c3d` (the first 7 characters of the commit SHA).
3. **Re-run the workflow on the same commit.** On the PR's "Checks" tab, find the cypress run, open it, and click "Re-run jobs". Wait for the new comment.
   - **Pass:** the new "Sampled pages" list is identical to the previous one.
   - **Fail:** the page list differs between runs of the same commit.
4. **Push a tiny change** (e.g. a typo fix in any file) and let the workflow run again.
   - **Pass:** the seed in the comment header changes, and the page list may change.
5. **Sanity-check the workflow file.** Open `.github/workflows/cypress.yml` in the PR diff. There should still be exactly one source of navigation data (either the `Fetch navigation.json` step **or** a comment explaining that `public/navigation.json` is used directly), not both unused.

If steps 2â€“4 hold, this task is verified from a product perspective.

---

## Task 2 â€” Count distinct failing tests ([EDU-18154](https://vtex-dev.atlassian.net/browse/EDU-18154))

**Status:** Not started Â· **PR:** â€” Â· **Owner:** â€”

### Problem (recap)

`summary-report.js` increments a counter for every non-header line in `cypress.log`. With Cypress retrying failed tests up to 3 times and component logs being concatenated, one broken test can contribute up to 4 lines, inflating the headline count.

### Approach

1. **Structured failure records** (`src/tests/cypress/support/functions.js`)
   - Replace `writeLog(title)` with `writeLog({ spec, title, page, attempt, type, message })`.
   - Emit one JSONL record per failure to `cypress-failures.jsonl` (keep `cypress.log` intact temporarily for backward compatibility during rollout, or remove it in the same PR â€” see Risks).

2. **Spec changes** (`src/tests/cypress/integration/documentation-pages-status.cy.js`)
   - Update `afterEach` to compute `attempt = this.currentTest.currentRetry()` (Cypress 12+ exposes this), `spec = Cypress.spec.name`, `page = this.currentTest.title`-derived slug, and pass through to `writeLog`.
   - Apply the same structured `writeLog` in any other spec that currently uses the plain-text variant; audit `src/tests/cypress/integration/` and update.

3. **Summary collapsing** (`src/tests/utils/summary-report.js`)
   - Read `cypress-failures.jsonl`, parse line-by-line, ignore malformed lines (do not crash the comment).
   - Group records by `${spec}::${title}` and count unique tests.
   - Render headline `**N tests failed**` from the unique count.
   - Per spec, render the failing tests with a `(retried Xx)` suffix when `attempt > 0` records exist for that test.
   - Keep the existing markdown layout so the PR comment template doesn't have to change.

4. **Unit test**
   - Add a small Jest (or vanilla Node `assert`) test that feeds a sample JSONL with retries and asserts the collapsed count and per-test attempt aggregation. Place under `src/tests/utils/__tests__/summary-report.test.js`.

5. **Workflow update**
   - In `.github/workflows/cypress.yml`, replace the `cat component-tests.log >> cypress.log` and `node src/tests/utils/summary-report.js > src/tests/summary.md` block with the JSONL equivalent (`cat component-failures.jsonl >> cypress-failures.jsonl`, then run the report).

### Acceptance

- A run with 6 distinct failing tests is reported as "6 tests failed", regardless of retries.
- Duplicate titles do not appear multiple times in the same summary section.
- The unit test passes and is wired into the existing Jest config.

### Verification (engineering)

- Locally, write a `cypress-failures.jsonl` fixture with 3 distinct titles and 4â€“7 attempts; run the report; assert headline reads "3 tests failed".
- Trigger the PR workflow on a branch that intentionally fails one test and confirm the comment reads "1 test failed" even after retries.

### PM review guide

The goal here is "the headline number matches reality". To verify in a PR:

1. **Open the `tests-summary` PR comment** on the Task 2 PR (or any PR with at least one failing test after the change is merged).
2. **Read the headline.** It looks like `**N tests failed**`. Count the bullet points listed under each spec heading below.
   - **Pass:** the headline number equals the number of unique bullet points.
   - **Fail:** the headline is noticeably higher than the bullets (the old behavior â€” typically 2â€“4Ã— off when retries fired).
3. **Look for duplicate test names** in the bullet list within a single spec section.
   - **Pass:** each unique test name appears at most once. If a test was retried, it shows a small annotation like `(retried 2x)` next to it.
   - **Fail:** the same test title appears multiple times as separate bullets.
4. **Optional regression check** â€” ask an engineer to push a branch where exactly one test is forced to fail. Wait for the workflow to finish (it will retry the test up to 3 times).
   - **Pass:** the comment reads "1 test failed".
   - **Fail:** the comment reads "2", "3", or "4 tests failed".
5. **PR description sanity check.** The PR should mention adding a unit test under `src/tests/utils/__tests__/`. Confirm there's a green check from the test runner in the Checks tab.

If steps 2â€“4 hold, this task is verified from a product perspective.

### Risks

- **Backward compatibility:** if any other spec or downstream tooling reads `cypress.log` in plain-text form, deleting it breaks them. Mitigation: search the repo for `cypress.log` references before removal; if any exist, keep a compatibility shim that writes both formats during this task and remove plain text in a follow-up.

---

## Task 3 â€” Classify preview-infra failures separately ([EDU-18162](https://vtex-dev.atlassian.net/browse/EDU-18162))

**Status:** Not started Â· **PR:** â€” Â· **Owner:** â€”

### Problem (recap)

Today every failure in `documentation-pages-status.cy.js` is reported as a content regression, including transient HTTP failures and slow loads. Reviewers cannot tell flaky preview infrastructure from a real broken page.

### Approach

1. **Spec changes** (`src/tests/cypress/integration/documentation-pages-status.cy.js`)
   - Switch `cy.request(...)` to `failOnStatusCode: false`. Branch:
     - non-2xx â†’ record `type: 'http'`, include status code in `message`, do not proceed to `cy.visit`.
     - PDF â†’ success path unchanged.
     - HTML â†’ proceed; wrap `cy.visit(page)` and the sidebar assertion in `.then()` chains so timeouts can be caught and recorded as `type: 'load_timeout'` and `type: 'dom'` respectively.
   - Do not throw inside the catch handlers; emit the structured record and call `this.test.error(new Error(message))` so Cypress still marks the test failed with the right diagnostics.
   - Tune retries: keep retry on `http` and `load_timeout`, do not retry on `dom` (a real content regression is unlikely to fix itself; retrying just amplifies the noise). Implement via `Cypress.on('test:after:run', ...)` or an explicit `if` in the spec â€” pick whichever is simpler given Cypress 12 APIs.

2. **Summary changes** (`src/tests/utils/summary-report.js`)
   - Render three sections:
     - **Content regressions** â€” `type === 'dom'`.
     - **Preview infrastructure** â€” `type === 'http'` or `type === 'load_timeout'`.
     - **Other** â€” anything else (defensive bucket for malformed records).
   - Keep the headline count restricted to **content regressions** (the actionable signal). Show preview-infra counts in their own section header so they're visible but not equated with content failures.

3. **Workflow** (`.github/workflows/cypress.yml`)
   - No structural change beyond what Task 2 already did. Add a one-line note in the comment template explaining the three sections.

### Acceptance

- Preview-only HTTP/timeout failures appear under "Preview infrastructure", not under content regressions.
- The summary clearly separates transport failures from DOM failures.
- Retry behavior no longer multiplies noisy infra failures into the reviewer-facing headline.

### Verification (engineering)

- Inject a forced 502 by sampling a known-bad path; confirm it appears under "Preview infrastructure" with status code in the message.
- Inject a real DOM regression (rename a sidebar `data-cy` in a test branch); confirm it appears under "Content regressions" and the headline counts it.

### PM review guide

The goal is "reviewers can tell flaky preview from real broken pages without asking an engineer". To verify in a PR:

1. **Open the `tests-summary` PR comment** on the Task 3 PR.
2. **Confirm the comment now has three sections** (or at least the section headers exist, even if some are empty for that run):
   - **Content regressions** â€” real broken pages.
   - **Preview infrastructure** â€” preview transport problems (HTTP errors, slow loads).
   - **Other** â€” defensive bucket; usually empty.
3. **Read the headline number.** It should now reflect only the count under "Content regressions".
   - **Pass:** if the headline says "0 tests failed" but there are entries under "Preview infrastructure", the PR's content is fine to merge â€” the failures are environment noise.
   - **Fail:** the headline still includes preview-infra entries, or the three sections are not visually separated.
4. **Look at a "Preview infrastructure" entry** if any exist. Each should show why it was classified as infra (e.g. `HTTP 502` or `load timeout after 10s`), not just a page name.
5. **Optional regression check** â€” ask an engineer to:
   - (a) Force a 5xx for one sampled page â†’ it must show up under **Preview infrastructure**, not Content regressions.
   - (b) Break a real piece of content (e.g. remove the sidebar from a page) â†’ it must show up under **Content regressions** and be counted in the headline.
6. **Decision rule for reviewers** (worth adding to the team's PR review guide):
   - Headline > 0 â†’ block merge until investigated.
   - Headline = 0 with non-empty Preview infrastructure â†’ safe to merge from a content standpoint; ping platform if infra noise persists.

If steps 2â€“4 hold, this task is verified from a product perspective.

---

## Cross-task notes

### Branch / PR strategy

- Open one PR per task in the order above. Each PR should be reviewable in isolation and small enough to land in a single review pass.
- Reference the Jira key in the PR title (e.g. `EDU-18161: ...`) so the Jira-GitHub integration links them automatically.

### Test impact

- All three tasks touch `summary-report.js`. Land them sequentially to keep diffs reviewable. Each PR should bump the unit-test fixture introduced in Task 2.

### Out of scope (for Phase 1)

- Adding SHA / run URL / placeholder semantics to the PR comment ([EDU-18155](https://vtex-dev.atlassian.net/browse/EDU-18155), Phase 2).
- Persisting Lighthouse reports ([EDU-18156](https://vtex-dev.atlassian.net/browse/EDU-18156), Phase 2).
- Anything in `api-guides.cy.js` / `api-reference.cy.js` (Phases 3â€“4).

## Definition of Done for Phase 1

- All three Jira tasks transitioned to Done.
- The PR `tests-summary` comment on a representative PR shows: a sampled-pages section pinned to the head SHA, an accurate distinct-test count, and a separate "Preview infrastructure" section.
- A second run of the same PR (no code change) reproduces the same sampled-pages section.
- Each task has been verified by a PM using the PM review guide above.

## Update log

Append one row per status change. Keep it short â€” link to the PR or commit for detail.

| Date (UTC) | Task | From â†’ To | Note | Author |
|---|---|---|---|---|
| 2026-05-05 | #1 | Not started â†’ In progress | Implemented deterministic sampling, sample metadata, and workflow seed wiring locally | @codex |
| _YYYY-MM-DD_ | _#_ | _Not started â†’ In progress_ | _e.g. branch `edu-18161-deterministic-sampling` opened_ | _@handle_ |



