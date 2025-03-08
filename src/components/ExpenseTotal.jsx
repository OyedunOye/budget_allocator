import { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const ExpenseTotal = () => {
    const {state} = useContext(AppContext)
    const totalExpenses = state.expenses.reduce((total, item)=> {
        return(total += item.cost)
    }, 0)
    return (
        <div className="w-[20%] items-center flex bg-red-300 h-full rounded-sm p-1.5 max-md:w-full">
            Spent so far: {state.currency}{totalExpenses}
        </div>
    )
}

export default ExpenseTotal