import { loader } from '@monaco-editor/react'

export function defineTheme(theme: string) {
  return new Promise(res => {
    Promise.all([
      loader.init(),
      import(`monaco-themes/themes/Oceanic Next.json`)
    ]).then(([monaco, data]) => {
      monaco.editor.defineTheme(theme, data)
      res(null)
    })
  })
}

