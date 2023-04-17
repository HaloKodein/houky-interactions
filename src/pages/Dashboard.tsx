import { DashboardNavbar } from '../components/Navbar'
import { motion } from 'framer-motion'

export function Dashboard() {
  return (
    <div className='cont'>
      <DashboardNavbar />

      <section
        className='box w-5/6 h-96 mt-32 flex'
      >
        <div
          className='flex flex-col w-full h-full p-4 gap-4 text-start justify-center'
        >
          <h1
            className='font-bold text-4xl'
          >
            Power up your Projects
          </h1>
          <h1
            className='text-indigo-400 font-extrabold text-2xl uppercase'
          >
            Houky Nodes
          </h1>
          <p
            className='text-zinc-400/80'
          >
            Unlock houky nodes to upgrade your code,
            you can make a bot without coding...
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{scale: 0.9 }}
            className='px-4 py-2 rounded-md bg-gradient-to-r from-purple-400 to-yellow-100 text-zinc-800 w-48'
          >
            Unlock Nodes
          </motion.button>
        </div>
      </section>
    </div>
  )
}
