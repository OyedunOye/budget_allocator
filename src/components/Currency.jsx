import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'

const Currency = () => {
    const { dispatch } = useContext(AppContext)
    const [curr, setCurr] = useState('€')

    const handleCurrChange = () => {

        dispatch({
            type: CHANGE_CURR,
            payload: curr
        })
    }
  return (
    <div className='w-[20%] max-md:w-full'>
        <div className='items-center flex justify-between h-9 rounded-sm p-1.5 max-md:w-full bg-amber-950'>
            <label htmlFor="currency" className="text-white h-full flex items-center p-1.5 rounded-l-md md:w-3/5">Currency</label>
            <select name="" id="inputGroupSelect04" className=" bg-white rounded-r-md p-r-4 text-lg max-md:text-sm max-md:h-full" onChange={(e)=> setCurr(e.target.value)} >
                <option defaultValue value="€">Euro(€)</option>
                <option value="zł">PLN(zł)</option>
                <option value="₦">NGN(₦)</option>
                <option value="$">USD($)</option>
                <option value="£">GBP(£)</option>
                <option value="₹">INR(₹)</option>
                <option value="¥">CHN(¥)</option>
            </select>
        </div>
    </div>
  )
}

export default Currency