# Windows Local Build Verification

This note documents how to manually verify the Windows-specific local build fix for the `.next\trace` `EPERM` failure.

## Goal

Confirm that:

1. The old configuration can reproduce the Windows build failure.
2. The current configuration prevents that failure.
3. A later failure caused by GitHub API rate limits is **not** treated as a regression in this fix.

## Relevant file

- `next.config.js`

Current expected setting:

```js
cpus: process.platform === 'win32' ? 1 : 4,
```

## Important note

Use:

```powershell
npx next build --no-lint
```

Do **not** use `yarn build` for this check unless you intentionally want the full repo build path, because `yarn build` also triggers `prebuild` via `getPEM.sh`.

## 1. Start clean

From the repo root, remove the existing Next build output:

```powershell
Remove-Item -Recurse -Force .next -ErrorAction SilentlyContinue
```

## 2. Reproduce the old Windows bug

Temporarily edit `next.config.js` and replace:

```js
cpus: process.platform === 'win32' ? 1 : 4,
```

with:

```js
cpus: 4,
```

Then run:

```powershell
npx next build --no-lint
```

### Expected broken result

The build should fail early and show an error similar to:

```text
EPERM: operation not permitted, open 'C:\\...\\devportal\\.next\\trace'
```

This confirms the original Windows-specific problem is reproducible.

## 3. Restore the fix

Change `next.config.js` back to:

```js
cpus: process.platform === 'win32' ? 1 : 4,
```

Clean the build output again:

```powershell
Remove-Item -Recurse -Force .next -ErrorAction SilentlyContinue
```

## 4. Verify the fix

Run the same build again:

```powershell
npx next build --no-lint
```

### Expected fixed result

The build should get past the previous `.next\trace` failure and continue into later build stages, with output like:

```text
info  - Collecting page data...
info  - Generating static pages (0/1212)
```

## 5. How to judge the result

For this specific fix, success means:

- there is **no** `.next\trace` `EPERM` error
- the build progresses beyond the old failure point

It is still acceptable if the build later fails for an unrelated reason, such as:

- GitHub API rate limiting during guide generation

That later failure is separate from the Windows trace-file issue.

## 6. Optional sanity check

To confirm the code changes still typecheck:

```powershell
npx tsc --noEmit --pretty false
```

## 7. After testing

If you temporarily changed `next.config.js` to reproduce the old bug, make sure it ends in the fixed state:

```js
cpus: process.platform === 'win32' ? 1 : 4,
```
