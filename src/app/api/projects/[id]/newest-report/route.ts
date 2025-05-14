import { NewestReport } from '@/server/backend/types/newestReport'
import { getClient } from '@/server/backendApiClient'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const client = await getClient({ req })
  const request = client.get(`projects/${params.id}/newest-report`)
  const parsedData = await NewestReport.parseAsync(await request.json())
  return NextResponse.json(parsedData)
}
