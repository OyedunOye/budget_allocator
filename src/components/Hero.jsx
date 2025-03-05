import { useState } from "react"

const Hero = () => {
    const [currency, setCurrency] = useState('£')
  return (
    <div className="flex justify-between my-2 h-10  ">
        <div className="h-full rounded-md w-[30%] ">
            <form className=" h-full w-full border flex items-center rounded-md">
                <label className="bg-[#5B53C9] flex-2 text-white h-full flex items-center p-1.5 w-[1/3] rounded-l-md">Budget: {currency}</label>
                <input type="number" step={10} className="bg-white h-full w-[2/3] p-1 flex rounded-r-md" />
            </form>
        </div>
        <div className="w-[30%] items-center flex bg-green-300 h-full rounded-sm p-1.5">
            Remaining: {currency} 1500
        </div>
        <div className="w-[30%] items-center flex bg-red-300 h-full rounded-sm p-1.5">
            Spent so far: {currency} 1500
        </div>
    </div>
  )
}

export default Hero