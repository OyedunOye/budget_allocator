import {createContext, useReducer} from 'react'

export const AppReducer = (state, action) => {

    switch (action.type) {

    case 'ADD_EXPENSE':
        // action.type = "DONE" //This line of code makes the add_expenses reducer non-functional!
        return {
            ...state,  //return the whole state i.e. currency, budget and expenses list.
            expenses: state.expenses.map(expense =>expense.name === action.payload.name
        ? {... expense, cost: expense.cost + action.payload.cost} : expense
        )}


    case 'RED_EXPENSE':

        return{
            ...state,
            expenses: state.expenses.map(currrentExpense =>currrentExpense.name === action.payload.name && currrentExpense.cost - action.payload.cost >=0
            ? {... currrentExpense, cost: currrentExpense.cost - action.payload.cost} : currrentExpense
        )}


    case 'DELETE_EXPENSE':
        return{
            ...state,
            expenses: state.expenses.map(expense=>expense.id === action.payload?
                {...expense, cost: 0 } : expense
            )
        }

    case 'SET_BUDGET':
        // action.type = "DONE"
        // state.budget = action.payload
        return {
            ...state,
            budget: action.payload
        }

    case 'CHANGE_CURRENCY':
        // state.currency = action.payload
        return {
            ...state,
            currency: action.payload
        }

        // Adds new expense item to the allocation table by choosing ones not already in the table from the drop down list
    case 'ADD_ALLOCATION':
        return {
            ...state,
            expenses: [...state.expenses, action.payload]
        };

    case 'REMOVE_ALLOCATION':
        return {
            ...state,
            expenses: state.expenses.filter(expense=>expense.id !== action.payload)
        }


    case 'DARK_MODE':
        return {
            ...state,
            displayMode: action.payload
        }

    case 'LIGHT_MODE':
        return {
            ...state,
            displayMode: action.payload
        }

    default:
        return state;
  }
}

//Initial app state on login
const initialState = {
    budget: 1300,
    expenses: [
        { id: "Transport", name: 'Transport', cost: 50 },
        { id: "House Rent", name: 'House Rent', cost: 200 },
        // { id: "Food", name: 'Food', cost: 70 },
        // { id: "Hygiene Product", name: 'Hygiene Product', cost: 40 },
        { id: "Shopping", name: 'Shopping', cost: 350 },
        { id: "Gift", name: 'Gift', cost: 100 },
        { id: "Miscellaneous", name: 'Miscellaneous', cost: 150 },
        { id: "Save/Invest", name: 'Save/Invest', cost: 300 },
    ],
    displayMode: 'light',
    currency: '€'
};

//create the context. This is the thing that the components import and use to get the state
export const AppContext = createContext()

//need a provider component which wraps the components we want to give access to the state.
//It accepts the children, which are the nested(wrapped) components
export const AppProvider = ({ children }) => {
    //set up the app state. This takes a reducer and an initial state parameters.
    const [state, dispatch] = useReducer(AppReducer, initialState)
    let remaining = 0;

    if(state.expenses) {
        const totalExpenses = state.expenses.reduce((total, item)=>{
            return (total = total + item.cost)
        },0);
        remaining = state.budget - totalExpenses
    }

    // console.log("AppProvider State:", state);
    return(
        <AppContext.Provider
            value={{
                state,
                dispatch,
                remaining
            }}
        >
            {children}
        </AppContext.Provider>
    )
}