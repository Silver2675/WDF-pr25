import { getClient } from '@/server/backendApiClient'
import { NextRequest, NextResponse } from 'next/server'

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string | number } }
) {
  const client = await getClient({ req })
  const request = client.patch(`employees/${params.id}`, {
    json: await req.json(),
  })
  const statusCode = (await request).statusCode
  if (statusCode === 204) {
    return NextResponse.json({ status: statusCode })
  }
  return new Response(null, { status: statusCode })
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string | number } }
) {
  try {
    const client = await getClient({ req })
    const request = await client.delete(`employees/${params.id}`)

    const statusCode = request.statusCode

    if (statusCode === 204) {
      return NextResponse.json({ status: statusCode })
    }

    return new Response(null, { status: statusCode })
  } catch (error) {
    console.error('Error deleting employee:', error)
    return new Response(null, { status: 500 })
  }
}
