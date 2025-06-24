"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
// 在 0.3.0 版本中，我们不需要从这里导入类型

// 我们直接使用 React 的类型，这样更通用、更稳定
type ThemeProviderProps = {
  children: React.ReactNode;
  [key: string]: any;
};

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
