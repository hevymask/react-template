import z from 'zod'

const configSchema = z.object({
  appName: z.string()
})

type Config = z.infer<typeof configSchema>

function setConfig(config: Config) {
  return configSchema.parse(config)
}

// Need to customize this options.
export const projectConfig = setConfig({
  appName: 'react-template'
})
