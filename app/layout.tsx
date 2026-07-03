import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Halcyon Dental Studio — Calm, Modern Dentistry",
  description:
    "Book appointments, get instant answers from Hal our AI assistant, and experience dentistry designed around calm. Serving patients with premium, judgment-free care.",
  keywords: [
    "dental clinic",
    "dentist",
    "dental appointment booking",
    "AI dental assistant",
    "cosmetic dentistry",
  ],
  openGraph: {
    title: "Halcyon Dental Studio",
    description: "Calm, modern dentistry — with an AI assistant to help you book and ask questions anytime.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${jakarta.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
