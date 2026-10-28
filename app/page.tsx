import Link from 'next/link'

export default function Home() {
  return (
    <main
      style={{
        padding: '40px 28px',
        border: '1px solid #303038',
        borderRadius: '16px',
        backgroundColor: '#17171c',
      }}
    >
      <p
        style={{
          margin: '0 0 16px',
          color: '#c4b5fd',
          fontSize: '13px',
          letterSpacing: '3px',
        }}
      >
        O MEU BLOG
      </p>

      <h1
        style={{
          margin: '0 0 18px',
          color: '#ffffff',
          fontSize: '36px',
          fontWeight: 700,
        }}
      >
        Bem-vindo!
      </h1>

      <p
        style={{
          margin: 0,
          color: '#b6b6c2',
          fontSize: '18px',
          lineHeight: 1.7,
        }}
      >
        Para veres o conteúdo, clica em{' '}
        <Link
          href="/posts"
          style={{
            color: '#c4b5fd',
            textDecoration: 'underline',
          }}
        >
          Posts
        </Link>
        {' '}no menu acima.
      </p>
    </main>
  )
}