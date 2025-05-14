import { AccountOverview } from '@/server/backend/types/accountOverview'
import { getClient } from '@/server/backendApiClient'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const client = await getClient({ req })
  const request = client.get(`accounts/${params.id}/overview`)
  const parsedData = await AccountOverview.parseAsync(await request.json())
  return NextResponse.json(parsedData)
}
