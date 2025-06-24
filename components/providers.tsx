"use client";

import { ThemeProvider } from "next-themes";

// 唯一的改动：从 "export function Providers" 改为 "export default function Providers"
export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
}
