import { Routes, Route } from 'react-router-dom'
import Intro from './pages/Intro'
import Home from './pages/Home'
import Watch from './pages/Watch'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="/home" element={<Home />} />
      <Route path="/watch/:type/:imdbId" element={<Watch />} />
    </Routes>
  )
}
