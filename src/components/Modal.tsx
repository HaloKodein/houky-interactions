import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion, AnimatePresence } from 'framer-motion'
import { ReactNode } from 'react'

interface ModalProps {
  children: ReactNode
  title: string
  open: boolean
  handleClose: () => void
}

const variants = {
  closed: {
    opacity: 0,
    scale: 0,
    y: '-20px',
  },
  opened: {
    opacity: 1,
    scale: 1,
    y: '0px',
  },
  exit: {
    opacity: 0,
    scale: 0,
    y: '20px'
  }
}

export function Modal({ children, title, open, handleClose }: ModalProps) {
  return (
    <AnimatePresence
      mode='wait'
      initial={false}
    >
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
          className='absolute top-0 left-0 bg-black/60 w-screen h-screen flex items-center justify-center'
        >
          <motion.div
            variants={variants}
            initial='closed'
            animate='opened'
            exit='exit'
            onClick={(e) => e.stopPropagation()}
            className='w-5/6 rounded-md bg-slate-950 p-4'
          >
            <div
              className='flex w-full items-center justify-between'
            >
              <h1>{ title }</h1>
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={handleClose}
                className='px-4 py-2 rounded-md'
              >
                <FontAwesomeIcon icon={faXmark} />
              </motion.button>
            </div>
            <hr className='my-2' />
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
