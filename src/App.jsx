// import { useState } from 'react'
import './index.css'
import { NavBar, Hero, Changes, Footer } from './components'
import MainAppSection from './container.jsx/MainAppSection'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <main className='w-full bg-yellow-200 min-h-screen px-4'>
      <NavBar />
      <Hero />
      <MainAppSection />
      <Changes />
      <Footer />
    </main>
  )
}

export default App
