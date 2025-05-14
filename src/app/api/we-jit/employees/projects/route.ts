import { EmployeeProject } from '@/server/backend/types/employeeProjects'
import { getClient } from '@/server/backendApiClient'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const employeeEmail = searchParams.get('employeeEmail')

  const client = await getClient({ req })

  try {
    const request = client.get(
      `we-jit/employees/projects?employeeEmail=${employeeEmail}`
    )
    const response = await request.json()

    const parsedData = await EmployeeProject.parseAsync(response)
    return NextResponse.json(parsedData)
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error parsing employee project:', error.message)
      return NextResponse.json(
        { error: 'Failed to parse employee project', details: error.message },
        { status: 500 }
      )
    }
    return NextResponse.json(
      {
        error: 'Failed to parse employee project',
        details: 'Unknown error',
      },
      { status: 500 }
    )
  }
}
