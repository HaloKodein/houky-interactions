import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { BirthdayCard } from './pages/BirthdayCard'
import { Countdown } from './pages/Countdown'
import { Galery } from './pages/Galery'
import { Letter } from './pages/Letter'

const trigger = 'Apr 6, 2023 00:00:00'

export function App() {
  return (
    <main
      className='w-full h-screen flex flex-col px-4 text-center'
    >
      <Router>
        <Routes>
          <Route path='/' element={<Countdown trigger={trigger} />} />
          <Route path='/birthday-card' element={<BirthdayCard />} />
          <Route path='/galery' element={<Galery />} />
          <Route path='/letter' element={<Letter />} />
        </Routes>
      </Router>
    </main>
  )
}

