import { TeamMembers } from '@/server/backend/types/teamMembers'
import { getClient } from '@/server/backendApiClient'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const projectName = searchParams.get('project')
  const clientName = searchParams.get('client')

  if (!projectName || !clientName) {
    return NextResponse.json(
      { error: 'Missing required query parameters: projectName or clientName' },
      { status: 400 }
    )
  }

  const client = await getClient({ req })
  const request = client.get(
    `we-jit/projects/employees/?client=${clientName}&project=${projectName}`
  )
  const jsonData = await request.json()

  try {
    const parsedData = await TeamMembers.parseAsync(jsonData)
    return NextResponse.json(parsedData)
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        { error: 'Failed to parse teamMembers data', details: error.message },
        { status: 500 }
      )
    }
    {
      return NextResponse.json(
        {
          error: 'Failed to parse teamMembers data',
          details: 'Unknown error',
        },
        { status: 500 }
      )
    }
  }
}
