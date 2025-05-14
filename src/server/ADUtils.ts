import got from 'got'
import type { JWT } from 'next-auth/jwt'
import { z } from 'zod'
import { tenantId, clientId, clientSecret } from './AdConfiguration'

const refreshTokenResponse = z.object({
  access_token: z.string(),
  expires_in: z.number(),
  refresh_token: z.string(),
})

export async function ensureFreshAccessToken(token: JWT) {
  if (token.expires_at && Date.now() < token.expires_at) {
    return token
  }

  const response = await got
    .post(`https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/token`, {
      form: {
        client_id: clientId,
        client_secret: clientSecret,
        grant_type: 'refresh_token',
        refresh_token: token.refresh_token,
      },
    })
    .json()
  const parsedResponse = refreshTokenResponse.parse(response)

  return {
    ...token,
    access_token: parsedResponse.access_token,
    expires_at: Date.now() + parsedResponse.expires_in * 1000,
    refresh_token: parsedResponse.refresh_token,
  }
}
