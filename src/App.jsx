import './index.css'
import { Routes, Route } from "react-router-dom"
import { Help, MainPage } from './pages'


function App() {


  return (
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/home' element={<MainPage />} />
        <Route path='/help' element={<Help />} />
      </Routes>

  )
}

export default App
