'use client';
import { ThemeProvider as NextThemeProvider } from "next-themes";

export function ThemeProvider({ children, ...propos }) {
  return <NextThemeProvider {...propos}>{children}</NextThemeProvider>
}