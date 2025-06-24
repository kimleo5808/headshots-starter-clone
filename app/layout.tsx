import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "@/components/ThemeProvider";
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
          {/* 
            这是一个真正的 <div>，而不是 Fragment。
            这个 <div> 是 ThemeProvider 唯一、真正的子元素。
            它将作为我们所有页面内容的根容器。
            我们还添加了一些 flex 布局类，以确保页面布局正常。
          */}
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            {/* flex-1 让 main 区域自动填充剩余空间 */}
            <main className="flex-1">{children}</main>
            <Toaster />
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
