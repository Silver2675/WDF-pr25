import { AccountsNames } from "@/server/backend/types/accountsNames";
import { getClient } from "@/server/backendApiClient";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest) {
    const client = await getClient({ req })
    const request = client.get('accounts/names')
    const parsedData = await AccountsNames.parseAsync(await request.json())
    return NextResponse.json(parsedData)
}