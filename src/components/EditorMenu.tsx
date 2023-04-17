import { faFileCirclePlus, faFolderPlus } from '@fortawesome/free-solid-svg-icons'
import { faFile, faFolder } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

interface EditorMenuProps {
  open: boolean
  dir: Dir[]
  handleClick: (target: File) => any
}

const variants = {
  closed: {
    opacity: 0,
    transform: 'translateX(-200px)',
    width: '0%',
  },
  opened: {
    opacity: 1,
    transform: 'translateX(0px)',
    width: '83.33333%'
  }
}

interface Dir {
  type: string
  name: string
  content?: Dir[]
  value?: string
}

export function EditorMenu({ open, dir, handleClick }: EditorMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          variants={variants}
          initial='closed'
          animate='opened'
          exit='closed'
          className='absolute w-5/6 h-screen top-full left-0 bg-slate-950 z-[9999] border-r border-zinc-600/20 shadow'
        >
          <div
            className='w-full px-4 flex items-center justify-center gap-2 mt-8'
          >
            <button
              className='bg-zinc-600/20 rounded-md px-4 py-2 w-full transition hover:bg-zinc-600/40'
            >
              Files
            </button>
            <button
              className='bg-zinc-600/20 rounded-md px-4 py-2 w-full transition hover:bg-zinc-600/40'
            >
              Cosole
            </button>
          </div>

          <div
            className='w-full px-4 flex flex-col items-center justify-center'
          >
            <div
              className='flex items-center justify-between mt-8 w-full'
            >
              <h1
                className='font-semibold text-2xl'
              >
                Files
              </h1>
              <div
                className='flex items-center'
              >
                <button
                  className='px-2 py-1 text-zinc-400/80'
                >
                  <FontAwesomeIcon icon={faFileCirclePlus} />
                </button>
                <hr className='border-r border-zinc-400/60 h-2 rounded-md' />
                <button
                  className='px-2 py-1 text-zinc-400/80'
                >
                  <FontAwesomeIcon icon={faFolderPlus} />
                </button>
              </div>
            </div>
            <div
              className='flex flex-col gap-2 items-start justify-center w-full py-2'
            >
              {dir.map((d, i) => (
                <div
                  className='w-full'
                  key={i}
                >
                  <div
                    className='w-full flex gap-2 items-center'
                  >
                    { (d.type === 'file')
                      ? (<File name={d.name} value={d.value} onClick={handleClick} />)
                      : (<Folder name={d.name} content={d.content} onClick={() => null} />)
                    }
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

interface Content {
  name: string
  value?: string
  content?: Dir[]
  onClick: (target: File) => any
}

interface File {
  value: string
  name: string
}

function File({ name, value = '', onClick }: Content) {
  return (
    <div
      onClick={() => onClick({ value, name })}
      className='w-full flex items-center gap-2 hover:bg-zinc-600/40 rounded-md py-1 transition'
    >
      <div
        className='mr-1'
      >
        <FontAwesomeIcon icon={faFile} />
      </div>
      <h1>{name}</h1>
    </div>
  )
}

function Folder({ name, content, onClick }: Content) {
  const [open, setOpen] = useState(false)

  return (
    <div
      className='w-full flex flex-col items-center justify-center'
    >
      
      <div
        onClick={() => setOpen(state => !state)}
        className='w-full flex items-center gap-2 hover:bg-zinc-600/40 rounded-md py-1 transition'
      >
        <FontAwesomeIcon icon={faFolder} />
        <h1>{name}</h1>
      </div>

      {open && (
        <div
          className='w-full px-4 border-l border-zinc-400/20 py-2'
        >
          {content?.map((d, i) => {
            return (d.type === 'file')
              ? (<File key={i} name={d.name} value={d.value} onClick={()=>onClick({ value: d.value ?? '', name: d.name })} />)
              : (<Folder key={i} name={d.name} content={d.content} onClick={() => null} />)
          })}
        </div>
      )}
    </div>
  )
}

