import { FeedbackTeamMembers } from '@/server/backend/types/feedbackTeamMembers'
import { NewTeamMembers } from '@/server/backend/types/newFeedbackTeamMembers'
import { getClient } from '@/server/backendApiClient'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(
  req: NextRequest,
  { params }: { params: { id: number } }
) {
  const client = await getClient({ req })
  const request = client.get(`feedbacks/${params.id}/team-members`)
  const response = await request.json()

  try {
    const parsedData = await FeedbackTeamMembers.parseAsync(response)
    return NextResponse.json(parsedData)
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        { error: 'Failed to parse feedback data', details: error.message },
        { status: 500 }
      )
    }
    {
      return NextResponse.json(
        { error: 'Failed to parse feedback data', details: 'Unknown error' },
        { status: 500 }
      )
    }
  }
}

export async function POST(
  req: NextRequest,
  { params }: { params: { id: number } }
) {
  const client = await getClient({ req })
  const request = client.post(`feedbacks/${params.id}/team-members`, {
    json: await req.json(),
  })
  const parsedData = await NewTeamMembers.parseAsync(await request.json())
  return NextResponse.json(parsedData)
}
