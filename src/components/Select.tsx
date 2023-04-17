import { Children, useState } from 'react'

interface SelectProps {
  children: React.ReactNode[]
}

export function Select({ children }: SelectProps) {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState(null)

  return (
    <div
      onClick={() => setOpen(state => !state)}
      className='w-full rounded-md px-4 py-2 bg-zinc-600/20 border-[1.2px] border-white/10 relative'
    >
      <h1>Default</h1>

      {open && (
        <div
          className='w-full absolute top-full left-0 flex flex-col items-center justify-center border-x-[1.2px] border-b-[1.2px] border-white/20 rounded-b-md overflow-hidden'
        >
          { children }
        </div>
      )}
    </div>
  )
}

interface OptionProps {
  value: string
  placeholder: string
}

export function Option({ value, placeholder }: OptionProps) {
  return (
    <div
      className='w-full px-4 py-2 bg-zinc-600/20'
    >
      <h1>{ placeholder }</h1>
    </div>
  )
}

