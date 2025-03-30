import type React from "react"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
          <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="min-h-screen bg-black text-white">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'