import { Subordinates } from '@/server/backend/types/subordinate'
import { getClient } from '@/server/backendApiClient'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const client = await getClient({ req })
  const request = client.get('employees/subordinates')
  const parsedData = await Subordinates.parseAsync(await request.json())
  return NextResponse.json(parsedData)
}
