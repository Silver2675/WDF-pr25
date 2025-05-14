import { EmployeeProfile } from '@/server/backend/types/employeeProfile'
import { getClient } from '@/server/backendApiClient'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const employeeEmail = searchParams.get('employeeEmail')

  const client = await getClient({ req })
  const request = client.get(`employees/profile?employeeEmail=${employeeEmail}`)
  const parsedData = await EmployeeProfile.parseAsync(await request.json())
  return NextResponse.json(parsedData)
}
