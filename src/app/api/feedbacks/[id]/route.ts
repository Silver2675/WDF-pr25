import { FeedbackDetail } from '@/server/backend/types/feedbackDetails'
import { getClient } from '@/server/backendApiClient'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const client = await getClient({ req })
  const request = client.get(`feedbacks/${params.id}`)
  const response = await request.json()

  const responseString = JSON.stringify(response)
  if (
    responseString.includes('Access for user ') &&
    responseString.includes(' denied')
  ) {
    return NextResponse.json(
      { error: 'Access denied', response },
      { status: 403 }
    )
  }

  if (responseString.includes('Unable to find EmployeeReview360 with id')) {
    return NextResponse.json(
      { error: 'Review not found', response },
      { status: 404 }
    )
  }

  try {
    const parsedData = await FeedbackDetail.parseAsync(response)
    return NextResponse.json(parsedData)
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        {
          error: 'Failed to parse feedback data',
          details: error.message,
        },
        { status: 500 }
      )
    }
    return NextResponse.json(
      {
        error: 'Failed to parse feedback data',
        details: 'Unknown error',
      },
      { status: 500 }
    )
  }
}
