import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AnimatePresence, motion } from 'framer-motion'
import { ReactNode, useState } from 'react'

const menuVariants = {
  closed: {
    opacity: 0,
    scale: 0,
    y: '-20px',
  },
  opened: {
    opacity: 1,
    scale: 1,
    y: '0px',
  }
}

const chevronVariants = {
  up: {
    transform: 'rotateX(180deg)'
  },
  down: {
    transform: 'rotateX(0deg)'
  }
}

interface DropdownProps {
  children: ReactNode
}

export function Dropdown({ children }: DropdownProps) {
  const [open, setOpen] = useState(false)

  return (
    <div className='relative'>
      <div
        onClick={() => setOpen(state => !state)} 
        className='flex items-center gap-2 px-1 py-1 cursor-pointer'
      >
        <div
          className='w-7 h-7 rounded-full bg-zinc-800'
        >
        </div>
        <motion.div
          variants={chevronVariants}
          initial='up'
          animate={open ? 'down' : 'up'}
        >
          <FontAwesomeIcon icon={faChevronDown} />
        </motion.div>
      </div>
      <AnimatePresence
        mode='wait'
        initial={false}
      >
        {open && (
          <motion.div
            variants={menuVariants}
            initial='closed'
            animate='opened'
            exit='closed'
            className='absolute top-full right-0 rounded-md bg-zinc-950 p-2 flex flex-col w-52 shadow-xl'
          >
            <h1
              className='font-bold uppercase text-md p-2'
            >
              Houky 
            </h1>
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

interface DropdownItemProps {
  children: ReactNode
  danger?: boolean
}

export function DropdownItem({ children, danger = false }: DropdownItemProps) {
  return (
    <motion.a
      className={`p-2 w-full text-[0.75rem] ${danger ? 'text-red-600/80' : 'text-zinc-300/80'}`}
      href='#'
    >
      {children}
    </motion.a>
    
  )
}

