import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md'
import logo from '../assets/budget_icon.png'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
const NavBar = () => {
  const {state, dispatch } = useContext(AppContext)

  const switchbutton = ()=>{
    if (state.displayMode === "light") {
      const payload = "dark"
      dispatch({
        type: 'DARK_MODE',
        payload: payload
      })
      return
    }else if (state.displayMode === "dark") {
      const payload = "light"
      dispatch({
        type:'LIGHT_MODE',
        payload: payload
      })
    }
  }

  return (
    <div className='flex w-full mt-2 justify-between'>
      <div className="">
          <img src={logo} height={50} width={40} alt='logo' className='cursor-pointer py-2' />
      </div>

      <div onClick={()=>switchbutton()} className="cursor-pointer">
      {state.displayMode==="light"?
        <MdOutlineLightMode size={45}/>
      :
        <MdOutlineDarkMode className='text-white' size={45}/>}
      </div>
    </div>
  )
}

export default NavBar