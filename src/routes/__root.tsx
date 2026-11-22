import { Outlet, createRootRoute } from '@tanstack/react-router'
import { shouldRedirect } from '@/paraglide/runtime.js'

export const Route = createRootRoute({
  beforeLoad: async () => {
    // srr means "should redirect result"
    const srr = await shouldRedirect({
      url: window.location.href
    })

    if (srr.shouldRedirect && srr.redirectUrl) {
      window.location.replace(srr.redirectUrl.href)
    }
  },

  component: App
})

function App() {
  return (
    <Outlet />
  )
}
