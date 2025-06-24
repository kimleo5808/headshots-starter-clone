import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/toaster";
import dynamic from "next/dynamic";

// 这是解决所有问题的魔法：
// 我们告诉 Next.js，这个 Providers 组件只能在客户端加载，
// 绝对不能在服务端预渲染时加载。
const Providers = dynamic(() => import("@/components/providers").then((mod) => mod.Providers), {
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
