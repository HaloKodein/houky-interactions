import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const links = [
  'https://media.discordapp.net/attachments/857373404185493514/1092919811551539311/IMG-20230404-WA0012.jpg',
  'https://media.discordapp.net/attachments/857373404185493514/1092919990962884770/IMG-20230404-WA0013.jpg',
  'https://media.discordapp.net/attachments/857373404185493514/1092920547324739666/IMG-20230404-WA0014.jpg',
  'https://media.discordapp.net/attachments/857373404185493514/1092920848500924477/IMG-20230404-WA0017.jpg'
]

export function Galery() {
  const navigate = useNavigate()

  return (
    <>
      <div className='w-full h-screen flex flex-col gap-4 items-center pb-8'>
        <h1 className='text-2xl font-bold pt-4'>
          Que tal relembrar alguns momentos?
        </h1>

        <div
          className='w-full h-full overflow-y-auto grid gap-4'
        >
        {links.map((l, i) => {
          return (
            <div className='w-80 h-64 rounded-md bg-zinc-600 mx-auto overflow-hidden' key={i}>
                <img src={l} className='w-full h-full object-cover rounded-md' />
              </div>
          )
          })}
        </div>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => navigate('/letter')}
          className='bg-rose-200/40 rounded-md px-4 py-2 w-full mt-2'
        >
          ????
        </motion.button>
      </div>
    </>
  )
}

