import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/toaster";

// 我们已经删除了所有和 ThemeProvider、Providers 相关的代码

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
    // 我们把 <Providers> 彻底移除了
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
