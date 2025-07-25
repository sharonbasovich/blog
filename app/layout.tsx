import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/general/NavBar";
import { AuthProvider } from "@/components/general/AuthProvider";
import GridDistortion from "@/components/general/GridDistortion";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sharon's Blog",
  description:
    "Blog hat allows people to make blog posts that can be viewed by everyone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased `}
        >
          <GridDistortion
            imageSrc="https://picsum.photos/1920/1080?grayscale"
            grid={80}
            mouse={0.1}
            strength={0.15}
            relaxation={0.9}
            className="custom-class fixed inset-0 -z-50 w-full h-full pointer-events-none"
          />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 min-h-screen bg-white/40 rounded-md">
            <NavBar />
            {children}
          </div>
        </body>
      </html>
    </AuthProvider>
  );
}
