import { Employees } from '@/server/backend/types/employees'
import { getClient } from '@/server/backendApiClient'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const client = await getClient({ req })
  const request = client.post('employees/feedbacks/latest/overview', {
    json: await req.json(),
  })
  const parsedData = await Employees.parseAsync(await request.json())
  return NextResponse.json(parsedData)
}
