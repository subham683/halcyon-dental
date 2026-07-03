import { NextRequest, NextResponse } from "next/server";
import { AppointmentPayload, ApiResponse } from "@/types";

export async function POST(req: NextRequest) {
  try {
    const body: AppointmentPayload = await req.json();
    const { fullName, email, phone, service, preferredDate, preferredTime } = body;

    if (!fullName || !email || !phone || !service || !preferredDate || !preferredTime) {
      return NextResponse.json<ApiResponse>(
        { success: false, message: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    // Placeholder: in production, persist this to a database, send a
    // confirmation email, and/or push it into a scheduling system such as
    // Calendly, Cal.com, or a practice-management API.
    // eslint-disable-next-line no-console
    console.log("New appointment request:", body);

    return NextResponse.json<ApiResponse>({
      success: true,
      message: `Thanks, ${fullName.split(" ")[0]}. Your request for ${service} on ${preferredDate} at ${preferredTime} has been received — we'll confirm by email shortly.`,
    });
  } catch (error) {
    return NextResponse.json<ApiResponse>(
      { success: false, message: "We couldn't submit your request. Please try again." },
      { status: 500 }
    );
  }
}
