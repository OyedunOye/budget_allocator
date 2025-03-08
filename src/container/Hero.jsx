import { Budget, Remaining, ExpenseTotal, Currency } from "../components"

const Hero = () => {
  return (
    <div className="flex justify-between my-2 max-md:flex-col max-md:gap-4 flex-wrap">
        <Budget />
        <Remaining />
        <ExpenseTotal />
        <Currency />
    </div>
  )
}

export default Hero