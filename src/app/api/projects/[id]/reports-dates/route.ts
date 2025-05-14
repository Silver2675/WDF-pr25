import { ReportDates } from '@/server/backend/types/reports-dates'
import { getClient } from '@/server/backendApiClient'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const client = await getClient({ req })
  const request = client.get(`projects/${params.id}/reports-dates`)
  const parsedData = await ReportDates.parseAsync(await request.json())
  return NextResponse.json(parsedData)
}
