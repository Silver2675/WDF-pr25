import { NewEmployeesNames } from '@/server/backend/types/newEmployeesNames'
import { getClient } from '@/server/backendApiClient'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const client = await getClient({ req })
  const request = client.post('employees/names/are-subordinates', {
    json: await req.json(),
  })
  const parsedData = await NewEmployeesNames.parseAsync(await request.json())
  return NextResponse.json(parsedData)
}
