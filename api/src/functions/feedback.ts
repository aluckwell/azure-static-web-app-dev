import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";

export async function feedback(
  request: HttpRequest,
  context: InvocationContext
): Promise<HttpResponseInit> {

  try {
    const body = await request.json()

    const { name, feedback } = body as {
      name?: string
      feedback?: string
    }

    if (!feedback) {
      return {
        status: 400,
        jsonBody: {
          success: false,
          error: "Feedback is required"
        }
      }
    }

    context.log("Feedback received", {
      name,
      feedback
    })

    return {
      status: 200,
      jsonBody: {
        success: true
      }
    }

  } catch {
    return {
      status: 500,
      jsonBody: {
        success: false,
        error: "Invalid request"
      }
    }
  }
}

app.http('feedback', {
  methods: ['POST'],
  authLevel: 'anonymous',
  handler: feedback
})