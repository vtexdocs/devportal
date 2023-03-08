export function filterSidebarItems(index, sidebarElement) {
  return (
    sidebarElement.childNodes.length > 0 &&
    sidebarElement.firstChild.tagName != 'HR'
  )
}
