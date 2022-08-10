import { Octokit } from 'octokit'

// Create a personal access token at https://github.com/settings/tokens/new?scopes=repo
const octokit = new Octokit({
  auth: `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`,
})

// Compare: https://docs.github.com/en/rest/reference/users#get-the-authenticated-user

export const getFileList: () => { params: { slug: string } }[] = () => {
  // const response = await octokit.rest.repos.getContent({owner: "vtex", repo: "openapi-schemas", path:"VTEX - Logistics API.json", ref:"master"})
  // console.log('Hello, %s', atob(response.data.content))
  return new Array({
    params: {
      slug: 'catalog-overview',
    },
  })
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getFileByPath: any = async (path: string) => {
  const response = await octokit.rest.repos.getContent({
    owner: 'vtexdocs',
    repo: 'dev-portal-content',
    path: path,
    ref: 'first-docs',
  })
  console.log(response)
  return atob(response.data.content)
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getFileSlugDict: any = async () => {
  return {
    'catalog-overview': 'docs/guides/Getting Started/catalog-overview.md',
  }
}
