import { useState } from 'react'
import { motion } from 'framer-motion'

const letters = [
  ` Você é uma pessoa incrivel, eu não canso e nunca vou cansar de falar
    isso. Quero aproveitar esse momento pra dizer que tudo é fase, e todos
    os problemas tem solução... Mas quando você se ver desanparada ou 
    perdida, saiba que eu vou estar lá com você pra te apoiar. E como eu
    ja te falei uma vez, eu sou insistente, se você cair eu também vou
    estar la pra te levantar!`,
  `
    Bom... É isso, eu queria poder fazer bem mais, mas infelizmente
    a distancia nos impede né?! Obrigado por deixar eu fazer parte
    desse momento, espero fazer parte de outros mais e mais até
    quando nós estivermos mais velhos kkkkk (bem guei né?).
    Aproveite o seu dia, te amo!
  `
]

export function Letter() {
  const [idx, setIdx] = useState(0)

  function next() {
    const result = (idx >= letters.length) ? 0 : 1
    setIdx(result)
  }

  return (
    <>
      <div className='w-full h-screen grid place-items-center'>
        <div className='flex flex-col gap-4'>
          <h1 className='text-center text-xl font-semibold'>
            {letters[idx]}
          </h1>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={next}
            className='bg-rose-200/40 rounded-md px-4 py-2 w-full mt-2'
          >
            Continuar...
          </motion.button>
        </div>
      </div>
    </>
  )
}

