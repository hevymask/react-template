import { useEffect } from 'react'
import { useDarkMode } from 'usehooks-ts'

export function ThemeProvider() {
	const { isDarkMode } = useDarkMode()

	useEffect(() => {
		document.body.classList.toggle('dark', isDarkMode)
	}, [isDarkMode])

  return null
}
