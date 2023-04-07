import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function Navbar() {
  return (
    <nav
      className='w-screen backdrop-blur border-b border-zinc-800/50 p-4 fixed z-[9]'
    >
      <div
        className='w-full h-14 flex items-center justify-between'
      >
        <div
          className='flex items-center gap-1.5'
        >
          <h1
            className='font-semibold text-2xl border-r-2 border-white pr-2'
          >
            Houky
          </h1>
          <span
            className='text-zinc-500/40 text-xl'
          >
            Interactions
          </span>
        </div>

        <button
          className='px-4 py-2 rounded-md bg-zinc-9500/10 backdrop-blur'
        >
          Login
        </button>
      </div>
    </nav>
  )
} 

