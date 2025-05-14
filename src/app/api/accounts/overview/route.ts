import { Accounts } from "@/server/backend/types/accounts";
import { getClient } from "@/server/backendApiClient";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const client = await getClient({ req });
    const request = client.post('accounts/overview', {
        json: await req.json(),
    });

    const parsedData = await Accounts.parseAsync(await request.json());
    return NextResponse.json(parsedData);
}