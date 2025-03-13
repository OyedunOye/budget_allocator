import { useContext } from "react"
import { Budget, Remaining, ExpenseTotal, Currency } from "../components"
import { AppContext } from "../context/AppContext"

const Hero = () => {
  const { state } = useContext(AppContext)
  return (
    <>
    <div className="h-fit p-4 mb-3 flex flex-col items-center">
          <h3 className={`text-2xl font-semibold ${state.displayMode==='dark'?"text-white":""}`}>Personal Budget Allocation</h3>
      </div>

    <div className="flex justify-between my-2 max-md:flex-col max-md:gap-4 flex-wrap">
        <Budget />
        <Remaining />
        <ExpenseTotal />
        <Currency />
    </div>
    </>
  )
}

export default Hero