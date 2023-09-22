import { Route, Routes, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Vans from './pages/Vans/Vans'
import './Server'
import VanDetail from './pages/Vans/VanDetail'
import Layout from './components/Layout'
function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Vans" element={<Vans />} />
          <Route path="/Vans/:id" element={<VanDetail />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
