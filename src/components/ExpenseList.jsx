import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { MdOutlineClose } from "react-icons/md";

const ExpenseList = () => {
    const { state, dispatch } = useContext(AppContext)

    const total_spent =()=> state.expenses.reduce(
        (previousExpense, currrentExpense)=> previousExpense + currrentExpense.cost, 0) + 10

    const handleDeleteExpense = (id, cost)=> {
        if (cost !==0) {
            (dispatch({
                type: "DELETE_EXPENSE",
                payload: id
            }))
        }

        if(cost === 0) {
            (dispatch({
                type: "REMOVE_ALLOCATION",
                payload: id
            }))
        }
    }

    const increaseAllocation = (name) => {
        let total = total_spent()
        if (total <= state.budget) {
            const expense = {
                name: name,
                cost:10
            }

            dispatch({
                type:"ADD_EXPENSE",
                payload: expense
            })
        } else {alert("Out of funds, cannot increase the allocation!")}
    }

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost:10
        }

        dispatch({
            type:"RED_EXPENSE",
            payload: expense
        })
    }

    return (

        <table className={`w-full rounded-md ${state.displayMode==='dark'?"bg-slate-600":"bg-yellow-50"}`}>
            <thead className="text-left max-md:text-sm">
                <tr className={`${state.displayMode==='dark'?"text-white":""}`}>
                    <th className="">Category</th>
                    <th className="">Amount</th>
                    <th className="max-md:text-center">Amount %</th>
                    <th className="max-md:text-center">Plus 10</th>
                    <th className="max-md:text-center">Minus 10</th>
                    <th className="">Delete</th>
                </tr>
            </thead>
            <tbody className="">
                {state.expenses.map((expense)=>(
                    <tr key={expense.name} className="py-3 h-12">
                        <td className={`${state.displayMode==='dark'?"text-white":""}`}>{expense.name}</td>
                        <td className={`${state.displayMode==='dark'?"text-white":""}`}>{state.currency}{expense.cost}</td>
                        <td className={`${state.displayMode==='dark'?"text-white":""}`}>{(expense.cost/state.budget*100).toFixed(1)}%</td>
                        <td ><button onClick={()=>increaseAllocation(expense.name)} className="flex text-white w-8 h-8 mt-2 rounded-md bg-green-500 hover:bg-green-300 justify-center items-center"> + </button></td>
                        <td ><button onClick={()=>decreaseAllocation(expense.name)} className="flex text-white w-8 h-8 mt-2 rounded-md bg-red-500 hover:bg-red-300 justify-center items-center"> - </button></td>
                        <td><button><MdOutlineClose className="flex text-white w-6 h-6 mt-3 rounded-full bg-black hover:bg-red-300 justify-center items-center" onClick={()=>handleDeleteExpense(expense.id, expense.cost)} /></button></td>

                    </tr>

                ))}
            </tbody>
        </table>

    )
}

export default ExpenseList