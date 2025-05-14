import { AccountPocs } from '@/server/backend/types/accountPoc'
import { getClient } from '@/server/backendApiClient'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(
  req: NextRequest,
  { params }: { params: { id: number } }
) {
  const client = await getClient({ req })
  const request = client.post(`accounts/${params.id}/poc`, {
    json: await req.json(),
  })
  const parsedData = await AccountPocs.parseAsync(await request.json())
  return NextResponse.json(parsedData)
}
