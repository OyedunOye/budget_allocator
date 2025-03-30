import { useContext, useState } from "react"
import { AppContext } from "../context/AppContext"

const AllocationForm = (props) => { //removing props from the argument renders the whole sunmitEvent non-functional.
  const {dispatch, remaining, state} = useContext(AppContext)
  const [name, setName] = useState("")
  const [cost, setCost] = useState("")
  const [action, setAction] = useState("Add")

  const submitEvent = () => {
    const allocatedNames =()=> state.expenses.map(item=>item.name)
    let namesList = allocatedNames()
    if(action==="Add" && cost > remaining) {
      alert(`The amount cannot exceed remaining funds ${state.currency}` + remaining)
      setCost('')
      return
    }

    if(!parseInt(cost)) {
      alert("The amount field not be blank and can only be a number. Please enter an integer in multiples of 10 in this field.")
      return
    }

    if(name === "" || name === "Choose...") {
      alert("The category cannot be blank. Please choose a valid category from the drop-down list.")
      return
    }

    if (namesList.includes(name)){
      const expense = {
        name: name,
        cost: parseInt(cost)
      }

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

    if (!namesList.includes(name)) {
      let expense={
        id:name,
        name: name,
        cost: parseInt(cost)
      }

      if(action === "Add") {
        dispatch({
          type: "ADD_ALLOCATION",
          payload: expense
        })
      } else if(action === "Reduce") {
        alert("You cannot reduce the cost for an allocation category which is not already existing in the allocation table! Choose Add to include a new allocation category in the table.")
      }
    }

  }

  // const handleSubmit=()=> {
  //   console.log("Working!")
  // }

  // console.log(action)
  return (
    <div className="flex my-2 flex-col">
        <h3 className={`text-4xl font-semibold my-5 max-sm:text-xl ${state.displayMode==='dark'?"text-white":""}`}>Change Allocation</h3>
        <div className="flex w-[80%] justify-between flex-wrap md:gap-4 max-md:gap-3 max-md:w-[60%]">
          <div className="ml-8 flex max-md:ml-0 h-10 md:ml-0">
            <label htmlFor="inputGroupSelect01" className="text-2xl bg-slate-300 w-28 p-3 rounded-sm flex items-center max-md:text-sm md:text-xl">Category</label>

            <select className="border w-40 bg-white border-slate-300 text-2xl pl-2 max-md:text-sm md:text-xl" name="" id="inputGroupSelect01" onChange={(e)=> setName(e.target.value)}>
              <option defaultValue="">Choose...</option>
              <option value="House Rent" name="House Rent" className="">House Rent</option>
              <option value="Food" name="Food" className="">Food</option>
              <option value="Hygiene Products" name="Hygiene Product" className="">Hygiene Product</option>
              <option value="Shopping" name="Shopping" className="">Shopping</option>
              <option value="Transport" name="Transport" className="">Transport</option>
              <option value="Save/Invest" name="Save/Invest" className="">Save/Invest</option>
              <option value="Gift" name="Gift" className="">Gift</option>
              <option value="Charity Donations" name="Charity Donations" className="">Charity Donations</option>
              <option value="Partying" name="Partying" className="">Partying</option>
              <option value="Traveling" name="Traveling" className="">Traveling</option>
              <option value="Sport" name="Sport" className="">Sport</option>
              <option value="Miscellaneous" name="Miscellaneous" className="">Miscellaneous</option>
            </select>
          </div>

          <div className="flex h-10">
            <label className="text-2xl bg-slate-300 w-28 p-3 rounded-sm flex items-center max-md:text-sm md:text-xl" htmlFor="inputGroupSelect02">Allocation</label>

            <select className="border w-40 bg-white border-slate-300 text-2xl pl-2 max-md:text-sm md:text-xl" name="" id="inputGroupSelect02" onChange={(e)=>setAction(e.target.value)}>
              <option defaultValue value="Add">Add</option>
              <option value="Reduce">Reduce</option>
            </select>
          </div>
          <div className="flex h-10">
            <label className="text-2xl bg-slate-300 w-28 p-3 rounded-sm flex items-center max-md:text-sm md:text-xl" >Amount</label>
            <input className="border bg-white border-slate-300 text-2xl w-40 h-10 max-md:text-sm md:text-xl p-2" required='required' type='number' id="cost" value={cost} step={10} onChange={(e)=>setCost(e.target.value)} />
          </div>

          <button onClick={submitEvent} className="bg-blue-600 hover:bg-blue-500 cursor-pointer w-20 text-white rounded-md h-10 max-md:text-sm md:text-xl"> Save </button>
        </div>
    </div>
  )
}

export default AllocationForm