import Link from 'next/link'
import { GetStaticProps, NextPage } from 'next'
import getNavigation from 'utils/getNavigation'
import useSWR from 'swr'
import { DocumentationTitle, UpdatesTitle } from 'utils/typings/unionTypes'

interface Props {
  sidebarfallback: any //eslint-disable-line
  sectionSelected?: DocumentationTitle | UpdatesTitle | ''
}

const ApiGuidesPage: NextPage<Props> = () => {
  const fetcher = (url: string) => fetch(url).then((res) => res.json())
  const { data, error } = useSWR('/api/docs', fetcher)
  if (error) return <p>'Error'</p>
  if (!data) return <p>'Loading'</p>
  return (
    <ul>
      {Object.keys(data).map((key) => {
        return (
          <li>
            <Link href={'/docs/api-guides/' + key}>
              <a>{key}</a>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const sidebarfallback = await getNavigation()
  const sectionSelected = 'API Guides'

  return {
    props: {
      sidebarfallback,
      sectionSelected,
    },
  }
}

export default ApiGuidesPage
