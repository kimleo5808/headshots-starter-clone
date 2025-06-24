import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/toaster";
import dynamic from "next/dynamic";

// 这是最终的、最简单的、最正确的动态导入方式
const Providers = dynamic(() => import("@/components/providers"), {
  ssr: false,
});

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
    <html lang="en" suppressHydrationWarning>
      <body className={GeistSans.className}>
        <Providers>
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Toaster />
          </div>
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
