import { faBars, faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Editor as MonacoEditor, Monaco } from '@monaco-editor/react'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { EditorMenu } from '../components/EditorMenu'

interface File {
  value: string
}

export function Editor() {
  const [menuOpen, setMenuOpen] = useState(true)
  const [fileData, setFileData] = useState('// Any')

  const dir = [
    {
      type: 'folder',
      name: 'src',
      content: [
        {
          type: 'folder',
          name: 'services',
          content: [
            { type: 'file', name: 'Handler.ts', value: 'console.log(\'Hi!\')' }
          ]
        },
        { type: 'file', name: 'index.ts', value: 'console.log(\'Hi!\')' }
      ]
    },
    { type: 'file', name: 'package.json', value: '//index.html' }
  ]

  async function changeTheme(monaco: Monaco) {
    const data = await import(`monaco-themes/themes/Oceanic Next.json`)
    await monaco.editor.defineTheme('oceanic-next', data)
    await monaco.editor.setTheme('oceanic-next')
  }

  return (
    <div className='cont'>
      <div
        className='w-screen h-full overflow-hidden'
      >
        <div
          className='w-screen h-16 bg-slate-950 flex items-center justify-between gap-2 px-4 relative border-b border-zinc-600/20'
        >
          <EditorMenu
            open={menuOpen}
            dir={dir}
            handleClick={({ value }: File) => setFileData(value)}
          />
          <button
            onClick={() => setMenuOpen(state => !state)}
            className='rounded-md px-4 py-2 text-zinc-400/80'
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
          <motion.button
            whileTap={{ scale: 0.9 }}
            className='px-4 py-2 rounded-md bg-green-600 flex items-center justify-center gap-2'
          >
            <FontAwesomeIcon icon={faPlay} /> Run
          </motion.button>
        </div>
        <MonacoEditor
          beforeMount={changeTheme}
          className='w-screen h-[calc(100vh-4vh)]'
          defaultLanguage='typescript'
          defaultValue={fileData}
          theme='oceanic-next'
        />
      </div>
    </div>
  )
}
