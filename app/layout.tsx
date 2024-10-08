import './globals.css'
import { Inter } from 'next/font/google'
import Layout from './components/Layout'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Student Management System',
  description: 'A comprehensive system for managing students, courses, and more.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-soft-blue-50`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
