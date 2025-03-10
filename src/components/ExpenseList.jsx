import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { MdOutlineClose } from "react-icons/md";

const ExpenseList = () => {
    const { state, dispatch, remaining } = useContext(AppContext)
    // console.log ("Rendered state.expenses:", state.expenses)
    console.log(state.expenses)

    const total_spent =()=> state.expenses.reduce(
        (previousExpense, currrentExpense)=> previousExpense + currrentExpense.cost, 0) + 10

    const handleDeleteExpense = (id, cost)=> {
        // cost !==0?
        if (cost !==0) {
        (dispatch({
            type: "DELETE_EXPENSE",
            payload: id
        }))
        }
        // :
         if(cost === 0) {
            (dispatch({
                type: "REMOVE_ALLOCATION",
                payload: id
            }))
        }
    }

    const increaseAllocation = (name) => {
        let total = total_spent()
        console.log(total)
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
        <>
        {console.log(state.expenses)
        }
        <table className="w-full bg-yellow-50 rounded-md">
            <thead className="text-left max-md:text-sm">
                <tr >
                    <th className="">Category</th>
                    <th className="">Amount</th>
                    <th className="">Amount %</th>
                    <th className="">Plus 10</th>
                    <th className="">Minus 10</th>
                    <th className="">Delete</th>
                </tr>
            </thead>
            <tbody className="">
                {state.expenses.map((expense)=>(
                    <tr key={expense.name} className="py-3 h-12">
                        <td className="">{expense.name}</td>
                        <td>{state.currency}{expense.cost}</td>
                        <td>{(expense.cost/state.budget*100).toFixed(1)}%</td>
                        <td ><button onClick={()=>increaseAllocation(expense.name)} className="flex text-white border w-8 h-8 mt-2 rounded-md bg-green-500 hover:bg-green-300 justify-center items-center"> + </button></td>
                        <td ><button onClick={()=>decreaseAllocation(expense.name)} className="flex text-white border w-8 h-8 mt-2 rounded-md bg-red-500 hover:bg-red-300 justify-center items-center"> - </button></td>
                        <td><button><MdOutlineClose className="flex border text-white w-6 h-6 mt-3 rounded-full bg-black hover:bg-red-300 justify-center items-center" onClick={()=>handleDeleteExpense(expense.id, expense.cost)} /></button></td>

                    </tr>

                ))}
            </tbody>
        </table>

        </>
    )
}

export default ExpenseList