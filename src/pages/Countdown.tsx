import { useNavigate } from 'react-router-dom'
import { useCountdown } from '../hooks/useCountdown'
import { motion } from 'framer-motion'

interface CountdownProps {
  trigger: string
}

export function Countdown({ trigger }: CountdownProps) {
  const navigate = useNavigate()
  const [days, hours, minutes, seconds] = useCountdown(trigger)

  return (
    <>
      <div className='w-full flex flex-col gap-4 my-auto'>
        <h1 className='cursive-txt text-6xl'>
          Um mundo sem você é um mundo perdido...
        </h1>
        <div className='w-full flex gap-2'>
          <div
            className='bg-rose-200/40 backdrop-blur rounded-md w-full px-4 py-2'
          >
            <h1 className='font-extrabold text-4xl'>{days}</h1>
            <span>{(parseInt(days) > 1) ? 'Dias' : 'Dia'}</span>
          </div>
          <div
            className='bg-rose-200/40 backdrop-blur rounded-md w-full px-4 py-2'
          >
            <h1 className='font-extrabold text-4xl'>{hours}</h1>
            <span>{(parseInt(hours) > 1) ? 'Horas' : 'Hora'}</span>
          </div>
          <div
            className='bg-rose-200/40 backdrop-blur rounded-md w-full px-4 py-2'
          >
            <h1 className='font-extrabold text-4xl'>{minutes}</h1>
            <span>{(parseInt(minutes) > 1) ? 'Minutos' : 'Minuto'}</span>
          </div>
          <div
            className='bg-rose-200/40 backdrop-blur rounded-md w-full px-4 py-2'
          >
            <h1 className='font-extrabold text-4xl'>{seconds}</h1>
            <span>{(parseInt(seconds) > 1) ? 'Segundos' : 'Segundo'}</span>
          </div>
        </div>

      {(true) && (<motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => navigate('/birthday-card')}
        className='bg-rose-200/40 rounded-md px-4 py-2 w-full my-auto'
      >
        ????
      </motion.button>)}
      </div>
    </>
  )
}

