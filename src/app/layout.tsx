import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Theme from "@/theme";
import { ClerkProvider } from "@clerk/nextjs";

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

export const metadata: Metadata = {
  title: "Planifium",
  description: "Streamline your tasks and projects with our intuitive work management app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Theme>
            {children}
          </Theme>
        </body>
      </html>
    </ClerkProvider>
  );
}
