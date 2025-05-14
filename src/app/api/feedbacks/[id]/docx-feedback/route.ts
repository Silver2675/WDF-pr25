import { getClient } from '@/server/backendApiClient'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const client = await getClient({ req })

  try {
    const response = await client.get(`feedbacks/${params.id}/docx`, {
      responseType: 'buffer',
    })

    const actualContentType =
      response.headers['content-disposition'] ?? 'defaultName'

    return new NextResponse(response.body, {
      headers: {
        'content-disposition': actualContentType,
      },
    })
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        { error: 'Failed to download report', details: error.message },
        { status: 500 }
      )
    }
  }
}
