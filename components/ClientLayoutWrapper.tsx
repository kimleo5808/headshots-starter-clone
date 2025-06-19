// components/ClientLayoutWrapper.tsx

"use client"; // 关键！将这个组件标记为客户端组件

import React from "react";
import Header from "@/components/Header";
import { Toaster } from "@/components/ui/toaster";

// 这个组件现在可以安全地使用 Header 和其他客户端组件
export default function ClientLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Toaster />
    </>
  );
}
