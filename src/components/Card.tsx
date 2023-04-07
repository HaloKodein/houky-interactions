import { motion } from 'framer-motion'

interface FeatureCardProps {
  icon: any
  title: string
  description: string
}

export function FeatureCard({ icon, title, description, ...p }: FeatureCardProps) {
  return (
    <>
      <motion.div
        {...p}
        className='w-72 rounded-xl bg-zinc-600/40 backdrop-blur border border-white/20 p-4'
      >
        <div
          className='mt-4 inline-flex items-center gap-2'
        >
          <h1
            className='text-white font-extrabold text-2xl'
          >{icon}</h1>
          <h1
            className='text-white font-extrabold text-2xl'
          >
            {title}
          </h1>
        </div>
        <div className='p-4'>
          <p className='text-zinc-400/80'>{description}</p>
        </div>
      </motion.div>
    </>
  )
}

