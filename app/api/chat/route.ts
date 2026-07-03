import { NextRequest, NextResponse } from "next/server";
import { generateAssistantReply } from "@/lib/chat-responses";
import { ApiResponse } from "@/types";

export const runtime = "edge";

interface ChatRequestBody {
  message: string;
}

export async function POST(req: NextRequest) {
  try {
    const body: ChatRequestBody = await req.json();
    const message = body.message?.trim();

    if (!message) {
      return NextResponse.json<ApiResponse>(
        { success: false, message: "Message is required." },
        { status: 400 }
      );
    }

    // Simulate light network latency so the typing indicator reads naturally.
    // Replace this whole block with a real model call (e.g. Anthropic API)
    // when ready — generateAssistantReply() is the single seam to swap.
    await new Promise((resolve) => setTimeout(resolve, 500));
    const reply = generateAssistantReply(message);

    return NextResponse.json<ApiResponse<{ reply: string }>>({
      success: true,
      message: "OK",
      data: { reply },
    });
  } catch (error) {
    return NextResponse.json<ApiResponse>(
      { success: false, message: "Something went wrong processing your message." },
      { status: 500 }
    );
  }
}
