import React from 'react'
import './index.css'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const Header = () => {

    const MONTHS = [{name:'January'}, {name:'February'}, {name:'March'}, {name:'April'}, {name:'May'}, {name:'June'}, {name:'July'}
    ,{name:'August'}, {name:'September'}, {name:'October'}, {name:'November'}, {name:'December'}]

    return ( 
        <div className="header">
            <div className="title">
            <h1>Budget Buddy</h1>
            </div>
            <div className="buttons">
            <Stack direction="row" spacing={2}>

            {MONTHS.map((month) => {
                return <Button variant="contained" onClick={() => console.log(month.name)}>
                    {month.name}
                </Button>
            })}
            </Stack>
            </div>
        </div>
    )

}

export default Header