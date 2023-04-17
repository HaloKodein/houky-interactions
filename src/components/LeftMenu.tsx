import { faChevronLeft, faDiagramProject, faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'

interface LeftMenuProps {
  handleClose: () => any,
  open: boolean
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
    width: '100%'
  }
}

export function LeftMenu({ handleClose, open }: LeftMenuProps) {
  return (
    <AnimatePresence
      mode='wait'
      initial={false}
    >
    {open && ( 
      <motion.div
        variants={variants}
        initial='closed'
        animate='opened'
        exit='closed'
        className='h-screen absolute top-0 left-0 gap-2 flex flex-col p-4 items-center justify-content-center bg-slate-950'
      >
        <div
          className='w-full flex items-center justify-between p-4 h-14'
        >
          <h1
            className='font-semibold text-2xl'
          >
            Houky
          </h1>
          <button
            onClick={handleClose}
            className='px-4 py-2 rounded-md text-zinc-400/80'
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
        </div>
        <Link
          className='px-4 py-2 w-full text-zinc-400/80 flex items-center gap-2'
          to='/'
        >
           <FontAwesomeIcon icon={faHome} /> Home
        </Link>
        <Link
          className='px-4 py-2 w-full text-zinc-400/80 flex items-center gap-2'
          to='/dashboard/projects'
        >
           <FontAwesomeIcon icon={faDiagramProject} /> Projects
        </Link>
      </motion.div>
    )}
    </AnimatePresence>
  )
}
