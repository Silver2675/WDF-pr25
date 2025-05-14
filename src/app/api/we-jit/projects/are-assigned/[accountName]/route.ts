import { ProjectsWeJitNames } from "@/server/backend/types/projectsWeJitNames";
import { getClient } from "@/server/backendApiClient";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
    req:NextRequest,
    { params }: { params: {accountName: string}}
) {
    const client = await getClient({ req })
    const request = client.get(`we-jit/projects/are-assigned/${params.accountName}`)
    const parsedData = await ProjectsWeJitNames.parseAsync(await request.json())
    return NextResponse.json(parsedData)
}