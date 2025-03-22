// import { Link } from "react-router"
import { Footer, NavBar, Instructions } from "../components"
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Help = () => {

  const { state } = useContext(AppContext);

  return (
    <div className='dark'>
      <div className={`w-full bg-[#F5EFDB] min-h-screen px-4 flex flex-col  overflow-y-auto ${state.displayMode==='dark'?"bg-black":""}`}>
        <div className=''>
          <NavBar aim="Home" />
        </div>
        <Instructions />
    </div>
      <Footer />
  </div>
  )
}

export default Help