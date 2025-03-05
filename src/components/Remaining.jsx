import { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Remaining = () => {
    const {expenses, budget} = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost)
    }, 0)
    const alertType = totalExpenses > budget ? 'bg-red-200': 'bg-green-300';
  return (
    <div className={`w-[30%] items-center flex h-full rounded-sm p-1.5 max-md:w-full ${alertType}`}>
        Remaining: £{budget-totalExpenses}
    </div>
  )
}

export default Remaining