import { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const ExpenseTotal = () => {
    const {expenses} = useContext(AppContext)
    const totalExpenses = expenses.reduce((total, item)=> {
        return(total += item.cost)
    }, 0)
    return (
        <div className="w-[30%] items-center flex bg-red-300 h-full rounded-sm p-1.5 max-md:w-full">
            Spent so far: £{totalExpenses} 1500
        </div>
    )
}

export default ExpenseTotal