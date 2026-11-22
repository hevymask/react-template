import { createRouter, RouterProvider as TanstackRouterProvider } from '@tanstack/react-router'
import { routeTree } from '@/routeTree.gen'

const router = createRouter({
  routeTree
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
