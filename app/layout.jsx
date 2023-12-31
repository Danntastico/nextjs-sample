import Link from 'next/link'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Products',
  description: 'Example',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <nav className="bg-blue-500 p-4">
        <div className="container mx-auto">
          <ul className="flex space-x-4">
            <li>
              <Link href="/">
                Home
              </Link>
            </li>
            <li>
              <Link href="/products">
                Products
              </Link>
            </li>
            <li>
              <Link href="/products-client">
                Products Client-Side
              </Link>
            </li>
            <li>
              <Link href="/users">
                Users
              </Link>
            </li>
            <li>
              <Link href="/posts">
                Posts
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container mx-auto mt-8 p-4">
      {children}
      </div>
      </body>
    </html>
  )
}
