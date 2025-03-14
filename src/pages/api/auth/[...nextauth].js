import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import octokit from '../../../utils/octokitConfig'
import { retryWithRateLimit } from '../../../utils/github-utils'

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ profile }) {
      try {
        await retryWithRateLimit(() =>
          octokit.rest.repos.checkCollaborator({
            owner: 'vtexdocs',
            repo: 'dev-portal-content',
            username: profile.login,
          })
        )
        return true
      } catch (err) {
        console.log(err)
        return false
      }
    },
  },
}

export default NextAuth(authOptions)
