import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { MainNavbar } from "@/components/general/navbar";
import { ThemeProvider } from "@/components/ui/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HelixQue - Simple and Efficient URL Shortener",
  description: "A simple and efficient URL shortener. Shorten your links easily with HelixQue.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* <StickyBanner className="bg-gradient-to-b from-blue-500 to-blue-600">
          <p className="mx-0 max-w-[90%] text-white drop-shadow-md">
            Announcing $10M seed funding from project mayhem ventures.{" "}
            <a href="#" className="transition duration-200 hover:underline">
              Read announcement
            </a>
          </p>
        </StickyBanner> */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
       
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={true}
        > 
         <MainNavbar />̀
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
