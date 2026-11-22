import { projectConfig } from '@/lib/projectConfig'

export function useSetup({ title }: { title: string }) {
  document.title = `${title} | ${projectConfig.appName}`
}
