import { getClient } from '@/server/backendApiClient'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const client = await getClient({ req })

  try {
    const response = await client.get(`reports/latest/pptx`, {
      responseType: 'buffer',
    })

    const actualContentType = response.headers['content-disposition']

    return new NextResponse(response.body, {
      headers: {
        'content-disposition': `${actualContentType}`,
      },
    })
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        { error: 'Failed to download report', details: error.message },
        { status: 500 }
      )
    }
    {
      return NextResponse.json(
        { error: 'Failed to download report', details: 'Unknown error' },
        { status: 500 }
      )
    }
  }
}
