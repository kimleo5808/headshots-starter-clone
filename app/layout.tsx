import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Headshots AI",
  description: "Generate professional headshots in minutes with AI.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <div className="relative flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Toaster />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
