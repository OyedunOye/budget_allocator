import { useContext, useState } from "react"
import { AppContext } from "../context/AppContext"

const AllocationForm = (props) => {
  const {dispatch, remaining, currency} = useContext(AppContext)
  const [name, setName] = useState("")
  const [cost, setCost] = useState("")
  const [action, setAction] = useState("")

  const submitEvent = () => {
    console.log(remaining)
    if(cost > remaining) {
      alert(`The value cannot exceed remaining funds ${currency}` + remaining)
      setCost('')
      return
    }

    const expense = {
      name: name,
      cost: parseInt(cost)
    }

    console.log(expense)
    if (action === "Reduce") {
      dispatch({
        type: "RED_EXPENSE",
        payload: expense
      })
    } else {
      dispatch({
        type: "ADD_EXPENSE",
        payload: expense
      })
    }
  }

  return (
    <div className="flex my-2 flex-col">
      {/* <div className="flex "> */}
        <h3 className="text-4xl font-semibold my-5 max-sm:text-xl">Change Allocation</h3>
      {/* </div> */}
        <div className="flex w-[80%] justify-between flex-wrap md:gap-4 max-md:gap-3 max-md:w-[60%]">
          <div className="ml-8 flex max-md:ml-0 h-10 md:ml-0">
            <label htmlFor="inputGroupSelect01" className="text-2xl bg-slate-300 w-32 p-3 rounded-sm flex items-center max-md:text-sm md:text-xl">Category</label>

            <select className="border w-48 bg-white border-slate-300 text-2xl pl-2 max-md:text-sm md:text-xl" name="" id="inputGroupSelect01" onChange={(e)=> setName(e.target.value)}>
              {/* {console.log(name)} */}
              <option defaultValue>Choose...</option>
              <option value="House Rent" name="House Rent" className="">House Rent</option>
              <option value="Food" name="Food" className="">Food</option>
              <option value="Hygiene Product" name="Hygiene Product" className="">Hygiene Product</option>
              <option value="Shopping" name="Shopping" className="">Shopping</option>
              <option value="Transport" name="Transport" className="">Transport</option>
              <option value="Gift" name="Gift" className="">Gift</option>
              <option value="Save/Invest" name="Save/Invest" className="">Save/Invest</option>
              <option value="Miscellaneous" name="Miscellaneous" className="">Miscellaneous</option>
            </select>
          </div>

          <div className="flex h-10">
            <label className="text-2xl bg-slate-300 w-32 p-3 rounded-sm flex items-center max-md:text-sm md:text-xl" htmlFor="inputGroupSelect02">Allocation</label>

            <select className="border w-36 bg-white border-slate-300 text-2xl pl-2 max-md:text-sm md:text-xl" name="" id="inputGroupSelect02" onChange={(e)=>setAction(e.target.value)}>
              {/* {console.log(action)} */}
              <option defaultValue value="Add">Add</option>
              <option value="Reduce">Reduce</option>
            </select>
          </div>
          <input className="border bg-white border-slate-300 text-2xl w-44 h-10 max-md:text-sm md:text-xl p-2" required='required' type='number' id="cost" value={cost} step={10} onChange={(e)=>setCost(e.target.value)} />
          {console.log(cost)}

          <button onClick={submitEvent} className="bg-blue-600 w-20 text-white rounded-md h-10 max-md:text-sm md:text-xl"> Save </button>
        </div>
    </div>
  )
}

export default AllocationForm