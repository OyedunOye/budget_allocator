import { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Remaining = () => {
    const { state, remaining } = useContext(AppContext);
    const totalExpenses = state.expenses.reduce((total, item) => {
        return (total + item.cost)
    }, 0)
    const alertType = totalExpenses > 0.8 * state.budget ? 'bg-red-200': 'bg-green-300';

  return (
    <div className={`w-[20%] items-center flex h-full rounded-sm p-1.5 max-md:w-full ${alertType}`}>
        Remaining: {state.currency}{remaining}
    </div>
  )
}

export default Remaining