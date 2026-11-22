import { createFileRoute } from '@tanstack/react-router'
import { m } from '@/paraglide/messages.js'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div>{m.title()}</div>
  )
}
