import {useContext, useState} from 'react'
import { AppContext } from '../context/AppContext'

const Budget = () => {
    const {budget} = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget)
    const handleBudgetChange = (e) => {
        setNewBudget(e.target.value)
    }
  return (
    <div className="h-full rounded-md w-[30%] max-md:w-full">
        <form className=" h-full w-full border-1 border-[#5B53C9] flex items-center rounded-md">
            <label className="bg-[#5B53C9] text-white h-full flex items-center p-1.5 rounded-l-md md:w-3/5">Budget: £{budget}</label>
            <input type="number" step={10} value={newBudget} onChange={handleBudgetChange} className="bg-white h-full p-1 flex rounded-r-md md:w-2/5" />
        </form>
    
    </div>
  )
}

export default Budget