import { NextRequest, NextResponse } from "next/server";

//req is short for request
export async function GET(req) {
  const searchParams = req.nextUrl.searchParams
  const query = searchParams.get('id')
  return NextResponse.json(
    { message: `this is a get request with id ${query}` },
    { status: 200 }
  );
}

