import React from 'react'

const Expense = ( {props} ) => {
    return (
        <tr>
            <th>{ props.category }</th>
            <th>{ props.amount } kr</th>
            <th>{ props.date }</th>
        </tr>
    )

}

export default Expense