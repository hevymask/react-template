import { createRouter, RouterProvider as TanstackRouterProvider } from '@tanstack/react-router'
import { routeTree } from '@/routeTree.gen'
import { deLocalizeUrl, localizeUrl } from '@/paraglide/runtime.js'
import { NotfoundProvider } from '@/components/provider/notfound.tsx'

const router = createRouter({
  routeTree,
  defaultNotFoundComponent: NotfoundProvider,

  rewrite: {
    input: ({ url }) => deLocalizeUrl(url),
    output: ({ url }) => localizeUrl(url)
  }
})

// Set the router types
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

export function RouterProvider() {
  return (
    <TanstackRouterProvider router={router} />
  )
}
