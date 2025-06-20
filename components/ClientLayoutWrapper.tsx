// components/ClientLayoutWrapper.tsx

"use client"; // 关键！将这个组件标记为客户端组件

import React from "react";
import Navbar from "@/components/Navbar"; // <-- 已修正: 之前是 Header, 现在是 Navbar
import { Toaster } from "@/components/ui/toaster";

// 这个组件现在可以安全地使用 Navbar 和其他客户端组件
export default function ClientLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
  <div>
    <Navbar />
    <main>{children}</main>
    <Toaster />
  </div>
)
  );
}
