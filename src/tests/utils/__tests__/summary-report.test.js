/* eslint-disable @typescript-eslint/no-var-requires */
const { test } = require('node:test')
const assert = require('node:assert/strict')
const fs = require('node:fs')
const os = require('node:os')
const path = require('node:path')

const {
  loadFailures,
  collapseFailures,
  countDistinct,
  specDisplayName,
  partitionByType,
} = require('../summary-report.js')

test('collapseFailures keeps highest attempt for the same spec::title', () => {
  const records = [
    {
      spec: 'a.cy.js',
      title: 'test one',
      attempt: 0,
      type: 'dom',
      message: '',
    },
    {
      spec: 'a.cy.js',
      title: 'test one',
      attempt: 1,
      type: 'dom',
      message: '',
    },
    {
      spec: 'a.cy.js',
      title: 'test one',
      attempt: 2,
      type: 'dom',
      message: '',
    },
  ]
  const collapsed = collapseFailures(records)
  assert.equal(countDistinct(collapsed), 1)
  assert.equal(collapsed.get('a.cy.js').get('test one').maxAttempt, 2)
})

test('countDistinct aggregates across specs and collapses retried titles', () => {
  const records = [
    {
      spec: 'spec1.cy.js',
      title: 'alpha',
      attempt: 0,
      type: 'dom',
      message: '',
    },
    {
      spec: 'spec1.cy.js',
      title: 'alpha',
      attempt: 1,
      type: 'dom',
      message: '',
    },
    {
      spec: 'spec1.cy.js',
      title: 'beta',
      attempt: 0,
      type: 'http',
      message: '',
    },
    {
      spec: 'spec2.cy.js',
      title: 'gamma',
      attempt: 0,
      type: 'dom',
      message: '',
    },
  ]
  const collapsed = collapseFailures(records)
  assert.equal(countDistinct(collapsed), 3)
  assert.equal(collapsed.get('spec1.cy.js').size, 2)
  assert.equal(collapsed.get('spec2.cy.js').size, 1)
})

test('partitionByType routes dom/http/load_timeout/unknown to correct buckets', () => {
  const records = [
    {
      spec: 'a.cy.js',
      title: 'dom test',
      attempt: 0,
      type: 'dom',
      message: '',
    },
    {
      spec: 'a.cy.js',
      title: 'http test',
      attempt: 0,
      type: 'http',
      message: '',
    },
    {
      spec: 'a.cy.js',
      title: 'timeout test',
      attempt: 0,
      type: 'load_timeout',
      message: '',
    },
    {
      spec: 'a.cy.js',
      title: 'weird test',
      attempt: 0,
      type: 'unknown_type',
      message: '',
    },
  ]
  const { content, infra, other } = partitionByType(collapseFailures(records))
  assert.equal(countDistinct(content), 1)
  assert.equal(countDistinct(infra), 2)
  assert.equal(countDistinct(other), 1)
})

test('loadFailures skips blank and malformed lines without throwing', () => {
  const tmpPath = path.join(
    os.tmpdir(),
    `summary-report-test-${Date.now()}.jsonl`
  )
  const validRecord = {
    spec: 'x.cy.js',
    title: 'valid',
    attempt: 0,
    type: 'dom',
    message: '',
  }
  fs.writeFileSync(
    tmpPath,
    [JSON.stringify(validRecord), '', 'not-json'].join('\n'),
    'utf8'
  )
  try {
    const records = loadFailures(tmpPath)
    assert.equal(records.length, 1)
    assert.deepEqual(records[0], validRecord)
  } finally {
    fs.unlinkSync(tmpPath)
  }
})

test('specDisplayName strips .cy.js/.cy.ts/.cy.tsx and directory prefix', () => {
  assert.equal(
    specDisplayName('src/tests/cypress/integration/foo.cy.js'),
    'foo'
  )
  assert.equal(specDisplayName('bar.cy.ts'), 'bar')
  assert.equal(specDisplayName('baz.cy.tsx'), 'baz')
  assert.equal(specDisplayName('no-extension'), 'no-extension')
})

test('loadFailures on a non-existent path returns an empty array', () => {
  assert.deepEqual(loadFailures('/does/not/exist.jsonl'), [])
})

test('countDistinct of collapseFailures([]) is zero', () => {
  assert.equal(countDistinct(collapseFailures([])), 0)
})
