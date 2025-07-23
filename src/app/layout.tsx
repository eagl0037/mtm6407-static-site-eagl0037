// app/layout.tsx
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Natasha Eagles Portfolio',
  description: 'Front-End Developer & Designer Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`scroll-smooth bg-gradient-to-br from-purple-100 via-blue-100 to-white min-h-screen`}
      style={{ height: '100%' }}
    >
      <body
        className={`m-0 ${inter.className} text-gray-900 antialiased`}
        style={{ height: '100%' }}
      >
        {children}
      </body>
    </html>
  )
}
