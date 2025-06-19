// app/layout.tsx

import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import ClientLayoutWrapper from "@/components/ClientLayoutWrapper"; // 导入新的包装组件

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Headshots AI",
  description: "Generate professional headshots in minutes with AI.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className} suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          {/* 使用新的客户端包装器来包裹 children */}
          <ClientLayoutWrapper>
            {children}
          </ClientLayoutWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
