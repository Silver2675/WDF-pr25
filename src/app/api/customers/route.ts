import { Customers } from '@/server/backend/types/customers'
import { getClient } from '@/server/backendApiClient'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const client = await getClient({ req })
  const request = client.get('customers')
  const parsedData = await Customers.parseAsync(await request.json())
  return NextResponse.json(parsedData)
}
