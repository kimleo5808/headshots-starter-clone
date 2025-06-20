"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes"
import Navbar from "@/components/Navbar"
import { Toaster } from "@/components/ui/toaster"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      <Navbar />
      <main className="pt-28 sm:pt-36">{children}</main>
      <Toaster />
    </NextThemesProvider>
  )
}
