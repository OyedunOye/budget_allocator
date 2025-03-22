import { useContext } from 'react'
import { allocationForm,expenses,input,spent,remaining, currency } from '../assets'
import { AppContext } from '../context/AppContext'

const Instructions = () => {

    const {state} = useContext(AppContext)

    const data = [
        {
            title: "Budget input",
            image: input,
            description: "This is the field where you input the amount of money you have to allocate to your desired expense categories."
        }
        ,
        {
            title: "Remaining budget display",
            image: remaining,
            description: "The portion of budget remaining after deduction the already allocated portion of the budget is automatically computed and shown here."
        },
        {
            title: "Total spent so far display",
            image: spent,
            description: "The sum of already allocated amount of money is calculated for you and displayed here. As an additional indicator to help you visualize what is going on, this is displayed in green banner when you have spent below 80% of your budget. The banner turns red to signify the remaining amount is less than 20% of your budget."
        },
        {
            title: "Budget currency choice",
            image: currency,
            description: "This is a drop-down list where you could switch the currency of your budget to the one you desire from the list."
        },
        {
            title: "The expenses allocation table with buttons for controlling the contents of the table.",
            image: expenses,
            description: "This is the table that displays your action in real-time. It displays in a tabular form your allocation category. You can modify the amount allocated for each category by using the green plus button which increases amount by 10 units per click, or the red minus button which decreases amount by 10 per click. The black delete button sets the amount to zero on first click, and removes the allocation category from the table if the amount is already 0. The amount percentage of each category is automatically calculated for you and included in the table."
        },
        {
            title: "Allocation form",
            image: allocationForm,
            description: "This form helps to manipulate allocation in various ways. The category chosen could be an existing category in the expense table or a new one to be added to the table. The action 'add' does addition while 'reduce' performs subtraction. The beauty of this part is that it could add more than 10 units at a time. The amount unit is provided in the amount input box. The changes are observed immediately the save button is clicked."
        }
    ]
  return (
    <>
    <ul className='flex flex-col my-6 gap-10'>
        {data.map((item) =>
        <li key={item.title} className=''>
            <h3 className={`font-bold text-xl ${state.displayMode==='dark' ? "text-white": ""}`}>{item.title}</h3>
            <img src={item.image} alt={item.title} className='my-2 ' />
            <p className={`${state.displayMode==='dark' ? "text-slate-400": ""}`}>{item.description}</p>
        </li>
        )}
        
    </ul>
    <p className={`${state.displayMode==='dark' ? "text-white": ""}`}>Do you have more ideas on how to improve this app and make it more suitable for your use, kindly write to my email : oyesinaoyedun@yahoo.com</p>
    <p className={`my-8 ${state.displayMode==='dark' ? "text-white": ""}`}>Thank you!</p>
    </>
  )
}

export default Instructions