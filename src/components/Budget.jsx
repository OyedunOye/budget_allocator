import { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Budget = () => {
    const {state, dispatch } = useContext(AppContext);
    // const [newBudget, setNewBudget] = useState("")
    

    //issue with first increase or decrease button click for budget. It does not work as expected, so the input box is 10 ahead of state budget when step is used for increment, the worst is that it delays one keystroke when typed in. Image 890 showing 89 in budget state.
    //This was fixed by not using code line 6. Setting a new state of newBudget makes the first click reflect initial state which translates into the initial lagging behaviour.
    const updateBudgetState = (e) =>{
      // setNewBudget(e.target.value)

      dispatch ({
        payload: e.target.value,
        type: 'SET_BUDGET'
      })
    }

    // useEffect(()=> {
    //   updateBudgetState()
    // }, [newBudget])
  return (
    <div className="bg-[#5B53C9] h-full rounded-md w-[20%] max-md:w-full">
        <form className=" h-full w-full border-1 border-[#5B53C9] justify-between flex items-center rounded-md">
            <label className=" text-white h-full flex items-center p-1.5 rounded-l-md md:w-3/5">Budget: {state.currency}{state.budget}</label>
            <input type="number" step={10} onChange={(e)=>
            updateBudgetState(e)
            } className="bg-white h-full p-1 flex rounded-r-md md:w-2/5" />
        </form>

    </div>
  )
}

export default Budget