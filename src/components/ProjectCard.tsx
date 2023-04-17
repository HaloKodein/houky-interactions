import { faHashtag } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

interface ProjectCardProps {
  name: string
  description: string
  id: string
  premium?: boolean
}

export function ProjectCard({ name, description, id, premium }: ProjectCardProps) {
  const navigate = useNavigate()

  const parsedName = name
    .split(' ')
    .map(n => n[0].toUpperCase())
    .join('')

  return (
    <div
      className='w-full h-64 bg-zinc-600/20 rounded-md flex flex-col p-4 items-center justify-center'
    >
      <div
        className='w-full flex items-center justify-start gap-4'
      >
        <div
          className='w-14 h-14 rounded-md bg-indigo-600 grid place-content-center'
        >
          <h1 className='font-semibold text-xl'>
            {parsedName}
          </h1>
        </div>
        <div>
          <h1 className='text-xl'>
            {name}
          </h1>
          <div className='flex items-center justify-start gap-2'>
            <div
              className='flex items-center justify-start gap-2'
            >
              <div className='w-2.5 h-2.5 rounded-full bg-green-600'>
              </div>
              <h1 className='text-green-600'>Live</h1>
            </div>
            {premium && (
              <div
                className='flex items-center px-2 py-1 rounded-md bg-indigo-600/20 gap-1.5 text-indigo-600'
              >
                <FontAwesomeIcon icon={faHashtag} size='xs' />
                <h1
                  className='text-xs'
                >
                  Premium
                </h1>
              </div>
            )}
          </div>
        </div>
      </div>

      <div
        className='text-zinc-400/40 py-4'
      >
        <p>{description}</p>
      </div>
      <hr />

      <div
        className='w-full flex items-center justify-center gap-4 mt-4'
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className='px-4 py-2 rounded-md bg-zinc-600/20 w-full'
          onClick={() => navigate(`/editor/${id}`)}
        >
          Editor
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className='px-4 py-2 rounded-md bg-zinc-600/20 w-full'
          >
            Preview
          </motion.button>
        </div>
    </div>
  )
}
