import { EmployeesNames } from '@/server/backend/types/employeesNames'
import { getClient } from '@/server/backendApiClient'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const client = await getClient({ req })
  const queryParams = req.nextUrl.searchParams.toString()
  const request = client.get(`employees/names?${queryParams}`)

  try {
    const jsonData = await request.json()
    const parsedData = await EmployeesNames.parseAsync(jsonData)
    return NextResponse.json(parsedData)
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        { error: 'Failed to parse feedback data', details: error.message },
        { status: 500 }
      )
    } else {
      return NextResponse.json(
        { error: 'Failed to parse feedback data', details: 'Unknown error' },
        { status: 500 }
      )
    }
  }
}
