import type { Metadata } from 'next'
import Link from 'next/link'
import './globals.css'

export const metadata: Metadata = {
  title: 'O meu blog',
  description: 'Mini-blog de posts',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body
        style={{
          margin: 0,
          minHeight: '100vh',
          backgroundColor: '#0c0c0f',
          color: '#f4f4f5',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        <header
          style={{
            width: '100%',
            backgroundColor: '#141418',
            borderBottom: '1px solid #303038',
          }}
        >
          <nav
            style={{
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
              gap: '12px',
              padding: '18px 28px',
            }}
          >
            <Link
              href="/"
              style={{
                padding: '10px 18px',
                borderRadius: '8px',
                backgroundColor: '#24242b',
                color: '#ffffff',
                textDecoration: 'none',
              }}
            >
              Início
            </Link>

            <Link
              href="/posts"
              style={{
                padding: '10px 18px',
                borderRadius: '8px',
                backgroundColor: '#24242b',
                color: '#c4b5fd',
                textDecoration: 'none',
              }}
            >
              Posts
            </Link>
          </nav>
        </header>

        <div
          style={{
            width: '100%',
            maxWidth: '900px',
            margin: '0 auto',
            padding: '48px 24px',
            boxSizing: 'border-box',
          }}
        >
          {children}
        </div>
      </body>
    </html>
  )
}