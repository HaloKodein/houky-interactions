import { Home } from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Dashboard } from './pages/Dashboard'
import { Projects } from './pages/Projects'
import { Editor } from './pages/Editor'

export function App() {
  return (
    <main
      className='w-full h-screen flex flex-col'
    >
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/dashboard/projects' element={<Projects />} />
          <Route path='/editor/:id' element={<Editor />} />
        </Routes>
      </Router>
    </main>
  )
}

