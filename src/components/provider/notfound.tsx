import { m } from '@/paraglide/messages.js'
import { useSetup } from '@/hooks/setup.ts'

export function NotfoundProvider() {
  useSetup({ title: m['routes.notfound.title']() })

  return (
    <div>{m['routes.notfound.title']()}</div>
  )
}
