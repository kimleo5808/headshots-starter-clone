import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/toaster";

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
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            {/* 
              这是最终的修复：
              我们移除了 main 标签上的内边距 class。
            */}
            <main className="flex-1">{children}</main>
            <Toaster />
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
