import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Navbar from "@/components/Navbar"; // 恢复这一行
import { Toaster } from "@/components/ui/toaster"; // 我们也把 Toaster 加回来
import { Analytics } from "@vercel/analytics/react"; // Analytics 也加回来

export const metadata = {
  title: "Headshots AI",
  description: "Generate professional headshots in minutes with AI.",
};

export default function RootLayout({
  children,
