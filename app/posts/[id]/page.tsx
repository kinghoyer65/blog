import Link from 'next/link'
import { notFound } from 'next/navigation'

const API = 'https://jsonplaceholder.typicode.com'

type Post = {
  id: number
  title: string
  body: string
  userId: number
}

export default async function Post({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const res = await fetch(`${API}/posts/${id}`)

  if (!res.ok) {
    notFound()
  }

  const p: Post = await res.json()

  return (
    <div>
      <h1>{p.title}</h1>
      <p>{p.body}</p>

      <Link href="/posts">Voltar</Link>
    </div>
  )
}