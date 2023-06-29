import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import getFastStorePaths from 'utils/getFastStorePaths'

interface Props {
  title: string
}

const FastStorePage: NextPage<Props> = ({ title }) => {
  return <div>{title}</div>
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = Object.keys(await getFastStorePaths())
  const paths = slugs.map((slug) => ({
    params: { slug },
  }))
  return {
    paths,
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const title = params?.slug
  return {
    props: {
      title,
    },
  }
}

export default FastStorePage
