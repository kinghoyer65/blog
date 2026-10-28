import Link from 'next/link'

const API = 'https://jsonplaceholder.typicode.com'

type Post = {
  id: number
  title: string
  body: string
  userId: number
}

export default async function Posts() {
  const res = await fetch(`${API}/posts`)
  const lista: Post[] = await res.json()

  return (
    <main>
      <h1>Posts</h1>

      <ul>
        {lista.map((p) => (
          <li key={p.id}>
            <Link href={`/posts/${p.id}`}>
              {p.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}