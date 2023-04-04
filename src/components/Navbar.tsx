import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function Navbar() {
  return (
    <nav
      className='w-screen bg-zinc-950 border-b border-zinc-800/40 p-4'
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
            className='text-zinc-600/40 text-xl'
          >
            Interactions
          </span>
        </div>

        <button
          className='px-4 py-2 rounded'
        >
          <FontAwesomeIcon size='lg' icon={faBars} />
        </button>
      </div>
      <div
        className=''
      >
        <ul></ul>
      </div>
    </nav>
  )
} 

