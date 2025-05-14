import got from 'got'
import type { GetServerSidePropsContext } from 'next'
// eslint-disable-next-line camelcase
import { getServerSession } from 'next-auth'
import { JWT, getToken } from 'next-auth/jwt'

import { authOptions } from './nextAuthOptions'
import { ensureFreshAccessToken } from './ADUtils'
import { NextRequest } from 'next/server'

export async function buildClient(token: JWT, apiUrl: string) {
  const client = got.extend({
    headers: {
      Authorization: `Bearer ${token.access_token}`,
    },
    prefixUrl: apiUrl,
    throwHttpErrors: false,
  })

  return client
}

export async function getClient(context: {
  req: GetServerSidePropsContext['req'] | NextRequest
}) {
  const { req } = context
  // TODO: reuse the refreshed token from unstable_getServerSession
  // instead of refreshing it the 2nd time
  await getServerSession(authOptions)

  let token = await getToken({ req })

  if (!token || typeof token.access_token !== 'string') {
    throw new Error('Unauthenticated')
  }

  token = await ensureFreshAccessToken(token)

  const baseAPIUrl = process.env.NEXT_PUBLIC_API_URL

  if (baseAPIUrl === undefined) {
    throw new Error('NEXT_PUBLIC_API_URL environment variable is missing')
  }

  const client = await buildClient(token, baseAPIUrl)

  return client
}
