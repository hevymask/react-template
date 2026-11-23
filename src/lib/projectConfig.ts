import z from 'zod'

type Config = z.infer<typeof configSchema>
const configSchema = z.object({
  appName: z.string()
})

function setConfig(config: Config) {
  return configSchema.parse(config)
}

// Need to customize this options.
export const projectConfig = setConfig({
  appName: 'react-template'
})
