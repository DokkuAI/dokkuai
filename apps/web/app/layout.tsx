import { ClerkProvider, UserButton } from "@clerk/nextjs";
import "./globals.css";
import "./prosemirror.css"
import { Manrope } from "next/font/google";
import React from "react";

const manRope = Manrope({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        layout: {
          socialButtonsPlacement: "bottom",
        },
        elements: {
          formButtonPrimary: "bg-[#2D66F5]",
        },
      }}
        signUpFallbackRedirectUrl={'/sign-up/create-workspace/usage'}
        signInFallbackRedirectUrl={'/'}
    >
      <html lang="en">
        <UserButton/>
        <body className={`${manRope.className} h-auto w-full`}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
