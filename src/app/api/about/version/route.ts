import { AppInformation } from '@/server/backend/types/appInfo'
import { getClient } from '@/server/backendApiClient'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const client = await getClient({ req })
  const request = client.get(`about/version`)
  const parsedData = await AppInformation.parseAsync(await request.json())
  return NextResponse.json(parsedData)
}
