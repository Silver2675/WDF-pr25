import { getClient } from '@/server/backendApiClient'
import { NextRequest, NextResponse } from 'next/server'

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string | number } }
) {
  const client = await getClient({ req })
  const request = client.patch(`projects/${params.id}`, {
    json: await req.json(),
  })
  const statusCode = (await request).statusCode
  if (statusCode === 204) {
    return NextResponse.json({ status: statusCode })
  }
  return new Response(null, { status: statusCode })
}
