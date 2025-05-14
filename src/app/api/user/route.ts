import { User } from '@/server/backend/types/user'
import { getClient } from '@/server/backendApiClient'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const client = await getClient({ req })
  const response = client.get('user')
  const statusCode = (await response).statusCode
  if (statusCode === 200) {
    const parsedData = await User.parseAsync(await response.json())
    return NextResponse.json(parsedData)
  }
  return NextResponse.json({ groups: [] })
}
