import { toString } from 'mdast-util-to-string'
import { slugify } from 'utils/string-utils'
import { visit, Node } from 'unist-util-visit'
import type { Item } from 'components/table-of-contents'

interface Heading {
  headingList: Item[]
}
const getHeadings = ({ headingList }: Heading) => {
  return (tree: Node) => {
    visit(tree, 'heading', function (node) {
      if (node['depth'] <= 2) {
        headingList.push({
          title: toString(node),
          slug: slugify(toString(node)),
          children: [],
        })
      } else if (node['depth'] === 3) {
        headingList[headingList.length - 1].children.push({
          title: toString(node),
          slug: slugify(toString(node)),
        })
      }
    })
  }
}

export default getHeadings
