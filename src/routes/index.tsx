import { createFileRoute } from '@tanstack/react-router'
import { m } from '@/paraglide/messages.js'
import { useSetup } from '@/hooks/setup.ts'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  useSetup({ title: m['routes.index.title']() })

  return (
    <div>{m['routes.index.title']()}</div>
  )
}
