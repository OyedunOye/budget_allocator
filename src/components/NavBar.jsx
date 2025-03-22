import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md'
import logo from '../assets/budget_icon.png'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { Link } from 'react-router';


const NavBar = ({aim}) => {
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
      <Link to="/home" className="">
          <img src={logo} height={50} width={40} alt='logo' className='cursor-pointer py-2' />
      </Link>

      <div className={`flex content-center justify-center divide-x w-40  gap-2 ${state.displayMode==='dark' ? "text-white":"divide-black"}`}>
        <div onClick={()=>switchbutton()} className="cursor-pointer">
          {state.displayMode==="light"?
            <MdOutlineDarkMode  size={45}/>
            :
            <MdOutlineLightMode size={45} className='text-white pt-2'/>
          }

        </div>
        <Link to={aim === "Help" ? "/help" : "/home"} className={`font-semibold flex items-center hover:underline ${state.displayMode==='dark' ? "text-white":""}` }>{aim}</Link>
      </div>
    </div>

  )
}

export default NavBar