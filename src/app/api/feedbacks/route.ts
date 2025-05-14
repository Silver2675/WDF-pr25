import { getClient } from '@/server/backendApiClient'
import { NextRequest, NextResponse } from 'next/server'
import { Feedbacks } from '@/server/backend/types/feedbacks'

export async function POST(req: NextRequest) {
  const client = await getClient({ req })
  const request = client.post('feedbacks/overview', {
    json: await req.json(),
  })
  const parsedData = await Feedbacks.parseAsync(await request.json())
  return NextResponse.json(parsedData)
}
