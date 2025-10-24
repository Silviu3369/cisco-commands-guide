// src/components/theme-provider.tsx
"use client" // Indică faptul că aceasta este o componentă client

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  // Utilizează provider-ul din 'next-themes' pentru a gestiona starea temei
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
