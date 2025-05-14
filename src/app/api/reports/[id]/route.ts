import { NewReport } from '@/server/backend/types/newReports'
import { getClient } from '@/server/backendApiClient'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const client = await getClient({ req })
  const request = client.get(`reports/${params.id}`)
  const parsedData = await NewReport.parseAsync(await request.json())
  return NextResponse.json(parsedData)
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const client = await getClient({ req })
  const request = client.put(`reports/${params.id}`, {
    json: await req.json(),
  })
  const statusCode = (await request).statusCode
  if (statusCode === 204) {
    return NextResponse.json({ status: statusCode })
  }
  return new Response(null, { status: statusCode })
}
