import { DashboardNavbar } from '../components/Navbar'
import { motion } from 'framer-motion'
import { ProjectCard } from '../components/ProjectCard'
import { Modal } from '../components/Modal'
import { useState } from 'react'

interface Project {
  id: string
  name: string
}

export function Projects() {
  const [open, setOpen] = useState(false)
  const [name, setName] = useState('')
  const [projects, setProjects] = useState<Project[]>([
    { name: 'My First Project', id: crypto.randomUUID() }
  ])
  
  function addProject(project_name: string) {
    setName('')

    setProjects(state => [...state, {
      id: crypto.randomUUID(),
      name: project_name
    }])

    setOpen(false)
  }

  return (
    <div className='cont'>
      <DashboardNavbar />
      <Modal
        open={open}
        handleClose={() => setOpen(false)}
        title='Create a new Project'
      >
        <div
          className='flex flex-col items-center justify-center w-full gap-4'
        >
          <label
            htmlFor='name'
            className='mt-2 -mb-2 text-start w-full'
          >
            <h1>Project Name</h1>
          </label>
          <input
            id='name'
            type='text'
            placeholder='Cool Project'
            className='p-2 rounded-md bg-zinc-600/20 w-full outline-none border-[1.2px] border-white/20 focus:border-indigo-500 transition'
            onChange={(e) => setName(e.target.value)}
            value={name}
          />

          <label
            htmlFor='language'
            className='mt-2 -mb-2 text-start w-full'
          >
            <h1>Language</h1>
          </label>

          <select
            className='p-2 rounded-md bg-zinc-600/20 w-full border-[1.2px] border-white/20 outline-none focus:border-indigo-500 transition'
            id='language'
          >
            <option value='typescript'>Typescript</option>
            <option value='javascript'>Javascript</option>
            <option value='nodes' disabled>GUI Nodes</option>
          </select>
        </div>
        <div
          className='flex items-center justify-end w-full mt-4'
        >
          <button
            onClick={() => addProject(name)}
            className='px-4 py-2 rounded-md bg-zinc-600/40'
          >
            Criar
          </button>
        </div>
      </Modal>

      <div
        className='w-full mt-32 flex flex-col items-center px-4'
      >
        <div
          className='w-full flex items-center justify-between'
        >
          <h1
            className='font-semibold text-2xl'
          >
            Projects
          </h1>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setOpen(true)}
            className='px-4 py-2 rounded-md bg-indigo-600'
          >
            New
          </motion.button>
        </div>

        <div
          className='w-full flex flex-col items-center gap-4 py-4'
        >
          {projects.map((p, i) =>
            <ProjectCard
              key={i}
              id={p.id}
              name={p.name}
              description='My first project with porpuse to mske your life better with some features to help you.'
              premium={true}
            />
          )}
        </div>
      </div>
    </div> 
  )
}

