import React from 'react'
import { useSelector } from 'react-redux'
import Button from '@mui/material/Button';
import { Expense } from '..'
import './index.css'

const Expenses = (props) => {

    const allExpenses = useSelector(state => state.expenses.allExpenses)

    return (
        <div className='expenses'>
        <h2>Expenses </h2>
        <Button variant="outlined" onClick={() => props.popup(true)}> Create Expense </Button>
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