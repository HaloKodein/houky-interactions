import { motion } from 'framer-motion'
import { useState } from 'react'

import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'

export function BirthdayCard() {
  const [view, setView] = useState(false)
  const navigate = useNavigate()

  return (
    <>
      {!view && (<motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setView(true)}
        className='bg-rose-200/40 rounded-md px-4 py-2 w-full my-auto'
      >
        ????
      </motion.button>)}

      {view && (<h1 className='mt-auto mb-12 px-4 text-4xl font-bold'>
        Hmmmm, um cartão... por que você não abre?
      </h1>)}

      {view && (<div className='w-full absolute top-12 left-0 z-[0]'>
        <div className='heart'></div>
      </div>)}

      {view && (<motion.div
        style={{ perspective: '1000px' }}
        initial={{ transform: 'rotate(0deg)' }}
        whileTap={{ transform: 'rotate(-5deg)' }}
        className='w-68 h-80 flex mb-8 relative select-none'
      >
        <motion.div
          style={{
            left: '50.1%',
            transformOrigin: 'left',
            transformStyle: 'preserve-3d',
            transition: 'color .1s ease-in-out'
          }}
          initial={{ transform: 'rotateY(0deg)', color: '#000041' }}
          whileTap={{ transform: 'rotateY(-130deg)', color: 'transparent' }}
          transition={{ type: 'spring', duration: 1 }}
          className='bg-gradient-to-r to-white from-zinc-300 w-2/4 h-full absolute z-[2] grid place-items-center'
        >
          <h1 className='font-semibold text-2xl text-center my-auto'>
            Feliz Aniversário!
          </h1>
        </motion.div>
        <motion.div
          className='bg-gradient-to-r to-white from-zinc-300 w-2/4 h-full absolute right-0 grid place-items-center p-4'
        >
          <h1 className='text-[#000041]'>
            Eu quero que você seja muito feliz, que conquiste tudo que almeja. Continue sendo essa pessoa perfeita do jeito que você é!
            Te amo <FontAwesomeIcon icon={faHeart} color='red' />
          </h1>
        </motion.div>
      </motion.div>)}
      {view && (<motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => navigate('/galery')}
        className='bg-rose-200/40 rounded-md px-4 py-2 w-full mb-auto'
      >
        ????
      </motion.button>)}
    </>
  )
}

