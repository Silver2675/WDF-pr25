import {
  apiScope,
  clientId,
  clientSecret,
  tenantId,
} from '@/server/AdConfiguration'
// import { ensureFreshAccessToken } from '@/server/AdUtils'
import type { NextAuthOptions } from 'next-auth'
import AzureADProvider from 'next-auth/providers/azure-ad'
import { ensureFreshAccessToken } from './ADUtils'

const azureADProviderConfig = AzureADProvider({
  clientId,
  clientSecret,
  tenantId,
  authorization: {
    params: {
      scope: `openid profile email ${process.env.AZURE_APP_SCOPE} offline_access`,
    },
  },
})

// Append the API scope and "offline_access" scope values to the auth provider requested scope
// This is required to properly authenticate with the backend API, and to receive the "refresh_token"
if (
  typeof azureADProviderConfig.authorization === 'object' &&
  typeof azureADProviderConfig.authorization.params?.scope === 'string'
) {
  azureADProviderConfig.authorization.params.scope += ` offline_access ${apiScope}`
} else {
  throw new Error(
    'The base Azure AD Provider configuration is missing the authorization scope parameter'
  )
}

export const authOptions: NextAuthOptions = {
  providers: [azureADProviderConfig],
  theme: {
    colorScheme: 'light',
  },
  callbacks: {
    async jwt({ token, account }) {
      if (
        account &&
        account.access_token &&
        account.refresh_token &&
        account.expires_at
      ) {
        token.access_token = account.access_token
        token.refresh_token = account.refresh_token
        token.expires_at = account.expires_at
      }
      return ensureFreshAccessToken(token)
    },
    async session({ token, session }) {
      if (token) {
        session.accessToken = token.accessToken
      }
      return session
    },
    async redirect({ baseUrl }) {
      return `${baseUrl}/`
    },
  },
}
