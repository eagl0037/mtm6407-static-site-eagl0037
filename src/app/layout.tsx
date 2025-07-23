import './globals.css'
import ClientNav from './ClientNav'

export const metadata = {
  title: 'Natasha Eagles Portfolio',
  description: 'A portfolio site built with Next.js and Tailwind CSS',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 font-sans">
        <ClientNav />
        <main className="max-w-6xl mx-auto px-4 py-8">{children}</main>
        <footer className="text-center text-sm text-gray-500 py-8">
          &copy; {new Date().getFullYear()} Natasha Eagles
        </footer>
      </body>
    </html>
  )
}
