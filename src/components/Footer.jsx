import budget_icon from '../assets/budget_icon.png'
const Footer = () => {
  return (
    <div className='flex justify-between h-30 bg-[#5B53C9]'>
      <img src={budget_icon} alt="icon" className='outline-white w-30 h-25'/>
      <p className='content-center pr-3 text-white'>oyesinaoyedun ©2025</p>
    </div>
  )
}

export default Footer