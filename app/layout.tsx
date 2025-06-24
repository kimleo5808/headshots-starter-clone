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
            这是最终的修复！
            我们用一个 React Fragment 把所有子元素包裹起来，
            这样 ThemeProvider 就只接收到了一个子元素。
          */}
          <>
            <Navbar />
            <main className="pt-28 sm:pt-36">{children}</main>
            <Toaster />
          </>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
