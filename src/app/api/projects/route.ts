import { getClient } from '@/server/backendApiClient'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const client = await getClient({ req })
  const request = client.post('projects', { json: await req.json() })
  const statusCode = (await request).statusCode
  if (statusCode === 201) {
    return NextResponse.json({ status: statusCode })
  }
  return new Response(null, { status: statusCode })
}
