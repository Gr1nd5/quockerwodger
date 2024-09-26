// app/layout.tsx
"use client";

import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex items-center justify-center min-h-screen`}
        style={{ backgroundColor: "#f4f4f4" }}
      >
        <div className="container max-w-screen-lg p-8 bg-white rounded-lg shadow-lg">
          {children}
        </div>
      </body>
    </html>
  );
}
