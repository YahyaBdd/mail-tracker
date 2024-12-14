import { NextRequest, NextResponse } from "next/server";

//req is short for request
export async function GET(req) {

  const searchParams = req.nextUrl.searchParams
  const query = searchParams.get('id')

  // calling the webhook
  let logMsg = ''
  try {
    // Prepare the payload
    const payload = { id: query };

    // Send the POST request to the webhook
    const response = await fetch("https://hook.eu2.make.com/ln9d4b2r9r6bcprsyh4ihtz8tm556g2y", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    // Check if the response is ok
    if (!response.ok) {
      logMsg = "Failed to call webhook { status: 500 } "
    }

    logMsg = "Webhook called successfully { status: 200 }"
  } catch (error) {
    // console.error("Error calling webhook:", error);
    logMsg = " Internal server error" + error
  }


  return NextResponse.json(
    { message: `this is a get request with id ${query} and the logs ${logMsg}` },
    { status: 200 }
  );
}

