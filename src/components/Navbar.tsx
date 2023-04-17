import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Dropdown, DropdownItem } from './Dropdown'
import { LeftMenu } from './LeftMenu'

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

export function DashboardNavbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav
      className='w-screen backdrop-blur border-b border-zinc-800/50 p-4 fixed'
    >
      <div
        className='w-full h-14 flex items-center justify-between'
      >
        <button
          onClick={() => setOpen(true)}
          className='rounded-md px-4 py-2 text-zinc-400/80'
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
        <Link
          to='/'
          className='font-semibold text-2xl'
        >
          Houky
        </Link>
        <Dropdown>
          <DropdownItem>
            Nodes
          </DropdownItem>
          <DropdownItem>
            Teams
          </DropdownItem>
          <hr />
          <DropdownItem>
            Account
          </DropdownItem>
          <DropdownItem>
            Settings
          </DropdownItem>
          <DropdownItem danger>
            Logout
          </DropdownItem>
        </Dropdown>
      </div>
      <LeftMenu
        handleClose={() => setOpen(false)}
        open={open}
      />
    </nav>
  )
} 

