import { projectConfig } from '@/lib/projectConfig'

// This hooks need to be called for each page component.
export function useSetup({ title }: { title: string }) {
  document.title = `${title} | ${projectConfig.appName}`
}
