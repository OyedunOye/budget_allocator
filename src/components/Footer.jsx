import { useContext } from 'react'
import { icon, dark_icon } from '../assets'
import { AppContext } from '../context/AppContext'

const Footer = () => {
  const {state} = useContext(AppContext)

  return (
    <div className={`flex justify-between h-30 ${state.displayMode === "dark"? "bg-slate-900":"bg-[#5B53C9]"}`}>
      {state.displayMode === "light"?
      <img src={icon} alt="icon" className='outline-white w-30 h-25'/>:
      <img src={dark_icon} alt="icon" className='outline-white w-30 h-25'/>
  }
      <p className='content-center pr-3 text-white'>{`oyesinaoyedun ©${new Date().getFullYear()}`}</p>
    </div>
  )
}

export default Footer