import './index.css'
import { NavBar, AllocationForm, ExpenseList, Footer } from './components'
import Hero from './container/Hero'
import { useContext } from 'react'
import { AppContext } from './context/AppContext'

function App() {

  const {state} = useContext(AppContext)

  return (
      <div className='dark'>
      <div className={`w-full bg-[#F5EFDB] min-h-screen px-4 flex flex-col  overflow-y-auto ${state.displayMode==='dark'?"bg-black":""}`}>

        <NavBar />
        <Hero />
        <div className="flex">
          <h3 className={`text-4xl font-semibold my-5 max-sm:text-xl ${state.displayMode==='dark'?"text-white":""}`}>Allocation</h3>
        </div>
        <div className='flex'>
          <ExpenseList />
        </div >
        <div className="mb-6">
          <AllocationForm />
        </div>
      </div>

      <div className=' min-w-full'>
        <Footer />
      </div>
      </div>
  )
}

export default App
