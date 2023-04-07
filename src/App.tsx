import { Home } from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

export function App() {
  return (
    <main
      className='w-full h-screen flex flex-col'
    >
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </main>
  )
}

