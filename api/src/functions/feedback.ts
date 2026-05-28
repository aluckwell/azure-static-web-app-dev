import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";

export async function feedback(
  request: HttpRequest,
  context: InvocationContext
): Promise<HttpResponseInit> {

  if (request.method !== "POST") {
    return {
      status: 405,
      jsonBody: { error: "Method not allowed" }
    }
  }

  const body = await request.json()

  return {
    status: 200,
    jsonBody: {
      success: true,
      received: body
    }
  }
}

app.http("feedback", {
  methods: ["POST"],
  authLevel: "anonymous",
  handler: feedback
})