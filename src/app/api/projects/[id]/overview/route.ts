import { NewProject } from '@/server/backend/types/newProject'
import { getClient } from '@/server/backendApiClient'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const client = await getClient({ req })
  const request = client.get(`projects/${params.id}/overview`)
  const parsedData = await NewProject.parseAsync(await request.json())
  return NextResponse.json(parsedData)
}
