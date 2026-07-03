export type ChatRole = "user" | "assistant";

export interface ChatMessage {
  id: string;
  role: ChatRole;
  content: string;
  createdAt: number;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: "general" | "billing" | "appointments" | "emergency";
}

export interface AppointmentPayload {
  fullName: string;
  email: string;
  phone: string;
  service: string;
  preferredDate: string;
  preferredTime: string;
  notes?: string;
  isNewPatient: boolean;
}

export interface ContactPayload {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
}
