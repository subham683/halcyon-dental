import { NextRequest, NextResponse } from "next/server";
import { ContactPayload, ApiResponse } from "@/types";

export async function POST(req: NextRequest) {
  try {
    const body: ContactPayload = await req.json();
    const { fullName, email, subject, message } = body;

    if (!fullName || !email || !subject || !message) {
      return NextResponse.json<ApiResponse>(
        { success: false, message: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    // Placeholder: wire this up to an email provider (Resend, SendGrid,
    // Postmark) or a CRM webhook in production.
    // eslint-disable-next-line no-console
    console.log("New contact message:", body);

    return NextResponse.json<ApiResponse>({
      success: true,
      message: "Thanks for reaching out — our team will get back to you within one business day.",
    });
  } catch (error) {
    return NextResponse.json<ApiResponse>(
      { success: false, message: "We couldn't send your message. Please try again." },
      { status: 500 }
    );
  }
}
