import logo from '../assets/budget_icon.png'
const NavBar = () => {
  return (
    <div className="div">
        <img src={logo} height={50} width={40} alt='logo' className='cursor-pointer py-2' />

        <div className="h-fit p-4 mb-3 border-amber-400 border-4 flex flex-col items-center">
            <h3 className='text-2xl font-semibold'>Personal Budget Allocation</h3>
        </div>
    </div>
  )
}

export default NavBar