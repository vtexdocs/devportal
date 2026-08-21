export function filterSidebarItems(index, sidebarElement) {
  return (
    sidebarElement.childNodes.length > 0 &&
    sidebarElement.firstChild.tagName != 'HR'
  )
}

export function writeLog({
  spec,
  title,
  attempt = 0,
  type = 'dom',
  message = '',
} = {}) {
  const record = JSON.stringify({ spec, title, attempt, type, message })
  cy.writeFile('cypress-failures.jsonl', record + '\n', { flag: 'a+' })
}
