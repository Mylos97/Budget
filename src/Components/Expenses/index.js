import React from 'react'
import { useSelector } from 'react-redux'
import { Expense } from '..'
import './index.css'

const Expenses = () => {

    const allExpenses = useSelector(state => state.expenses.allExpenses)

    return (
        <div className='expenses'>
        <h2>Expenses </h2>
        <table>
        <thead>
            <tr>
                <th>Category</th>
                <th>Amount</th>
                <th>Date</th>
            </tr>
        </thead>
        <tbody>
        {allExpenses.map((expense, i) => {
            return <Expense key={i} props={expense}/>
        })}
        </tbody>
        </table>
        </div>
    )
}   

export default Expenses