import NextAuth from 'next-auth'
import GitHubProvider from "next-auth/providers/github";

export default NextAuth({
    // Configure one or more authentication providers
    providers: [
      GitHubProvider({
        clientId: process.env.GITHUB_CLIENT_ID as string,
        clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
        authorization: {
          params: {
            scope: 'read:user',
          },
        },
      }),
    ],
  });