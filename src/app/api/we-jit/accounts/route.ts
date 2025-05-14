import { AccountsWeJit } from '@/server/backend/types/accountsWeJit'
import { getClient } from '@/server/backendApiClient'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const employeeEmail = searchParams.get('missing')

  const client = await getClient({ req })
  const request = client.get(`we-jit/accounts?missing=${employeeEmail}`)
  const parsedData = await AccountsWeJit.parseAsync(await request.json())
  return NextResponse.json(parsedData)
}
