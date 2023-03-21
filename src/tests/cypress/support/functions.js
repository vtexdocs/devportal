export function filterSidebarItems(index, sidebarElement) {
  return (
    sidebarElement.childNodes.length > 0 &&
    sidebarElement.firstChild.tagName != 'HR'
  )
}

export function writeLog(title) {
  const errorLog = `${title}\n`
  cy.writeFile('cypress.log', errorLog, { flag: 'a+' })
}
