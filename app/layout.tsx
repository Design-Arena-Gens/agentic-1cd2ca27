import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '$2000/Month with Free AI Tools - Complete Blueprint',
  description: 'A comprehensive, actionable plan to earn $2000 per month using 100% free AI tools',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
