import { Navbar } from '../components/Navbar'

import { motion } from 'framer-motion'
import { faBox, faCode, faDiagramSuccessor } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FeatureCard } from '../components/Card'

const inViewAnimation = {
  initial: {
    opacity: 0,
    transform: 'translateX(-200px)'
  },
  whileInView: {
    opacity: 1,
    transform: 'translateX(0px)'
  },
  transition: {
    type: 'spring',
    duration: 1
  }

}

export function Home() {
  return (
    <div
      className='bg-gradient-to-br from-5% from-slate-950 to-black w-full h-full overflow-y-scroll overflow-x-hidden'
    >
      <Navbar />

      <section
        className='w-full h-full px-4 py-24'
      >
        <div
          className='flex flex-col gap-8 my-20 text-center'
        >
          <motion.h1
            {...inViewAnimation}
            className='font-bold text-4xl'
          >
            Houky Interactions.
          </motion.h1>
          <motion.p
            {...inViewAnimation}
            className='text-zinc-400/80'
          >
            Houky Interactions is a powerfully discord bot maker 
            with some tools and usages.
          </motion.p>
          <motion.div
            {...inViewAnimation}
            className='flex gap-6 justify-center'
          >
            <motion.button
              whileTap={{
                scale: 0.9,
                backgroundColor: 'white',
                color: 'black'
              }}
              className='px-6 py-2.5 rounded-md border border-white select-none'
            >
              About Us
            </motion.button>
            <motion.button
              whileTap={{
                scale: 0.9
              }}
              className='px-6 py-2.5 rounded-md bg-gradient-to-br from-indigo-700 to-purple-600 select-none'
            >
              Get Started
            </motion.button>
          </motion.div>
        </div>
      </section>
      <section
        className='w-full mt-80 select-none'
      >
        <div className='w-full h-24 text-center'>
          <motion.h1
            {...inViewAnimation}
            className='font-extrabold text-4xl text-white'
          >
            Why Houky?
          </motion.h1>
        </div>
        <div className='w-full flex flex-wrap items-center justify-center px-12 gap-8 text-center mb-12'>
        <FeatureCard
          {...inViewAnimation}
          title='Code Editor'
          icon={<FontAwesomeIcon icon={faCode} />}
          description='We have a powerfully code editor, when this make your life coding better.'
        />
        <FeatureCard
          {...inViewAnimation} 
          title='Web Containers'
          icon={<FontAwesomeIcon icon={faBox} />}
          description='We use Web Containers to executer your code, safety and secure.'
        />
        <FeatureCard
          {...inViewAnimation}
          title='Bot Maker'
          icon={<FontAwesomeIcon icon={faDiagramSuccessor} />}
          description='We have a powerfully bot maker with zero code gui.'
        />
        </div>
      </section>
    </div>
  )
}

