"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
// 这是正确的 import 方式，直接从 "next-themes" 导入
import { type ThemeProviderProps } from "next-themes";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
