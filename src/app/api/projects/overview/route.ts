import { NewProjectOverviews } from '@/server/backend/types/newProjectsOverview'
import { getClient } from '@/server/backendApiClient'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const client = await getClient({ req })
  const request = client.post('projects/overview', {
    json: await req.json(),
  })
  const parsedData = await NewProjectOverviews.parseAsync(await request.json())
  return NextResponse.json(parsedData)
}
