import { Team } from '@/server/backend/types/team'
import { getClient } from '@/server/backendApiClient'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const client = await getClient({ req })
  const request = client.get(`projects/${params.id}/team`)
  const parsedData = await Team.parseAsync(await request.json())
  return NextResponse.json(parsedData)
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string | number } }
) {
  const client = await getClient({ req })
  const request = client.patch(`projects/${params.id}/team`, {
    json: await req.json(),
  })
  const statusCode = (await request).statusCode
  if (statusCode === 204) {
    return NextResponse.json({ status: statusCode })
  }
  return new Response(null, { status: statusCode })
}
