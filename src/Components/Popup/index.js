import React from 'react'
import { useEffect, useRef, useState } from 'react'
import { useForm } from "react-hook-form"
import './index.css'
import Button from '@mui/material/Button'
import {
    MDBInput,
    MDBCol,
    MDBRow,
    MDBCheckbox,
    MDBBtn
} from 'mdb-react-ui-kit'
import { TextField, Box } from '@mui/material'

const Popup = (props) => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const [closePopup , setClosePopup] = useState(false)
    const [countDown, setCountDown] = useState(0)
    const [runTimer, setRunTimer] = useState(false)

    // Do something about the data
    const onSubmit = data => setRunTimer(true)

    function useOutsideAlerter(ref) {
        useEffect(() => {
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setRunTimer(true)
                }
            } 
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }

    useEffect(() => {
    let timerId;
    if (runTimer) {
        console.log('in timer')
        setCountDown(35);
        setClosePopup(true)
        timerId = setInterval(() => {
        setCountDown((countDown) => countDown - 1);
        }, 10);
    } else {
        clearInterval(timerId);
    }

    return () => clearInterval(timerId);
    }, [runTimer]);

    useEffect(() => {
    if (countDown < 0 && runTimer) {
        console.log("expired");
        setRunTimer(false);
        props.closePopup(false)
        setCountDown(0);
    }
    }, [countDown, runTimer]);

    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);


    return (
        <div className={closePopup ? "popup-closing" : "popup"}>
            <div className="popup-open" ref={wrapperRef}>
                <h2>Create New Expense</h2>
                <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '80ch' },
                }}
                noValidate
                autoComplete="off"
                >

                <form onSubmit={handleSubmit(onSubmit)}> 
                <TextField defaultValue="" {...register("category", {required: true})} label="Category"/>
                {errors.category && 
                <span>This field is required</span>}
                <br/>
                <TextField {...register("amount", { required: true })} label="Amount"/>
                {errors.amount && 
                <span>This field is required</span>}
                <br/>
                <TextField defaultValue="" {...register("date", {required: true})} label="Date"/>
                {errors.category && 
                <span>This field is required</span>}
                <br/>
                <Button variant='outlined' type='submit' onClick={() => {
                    console.log("Errirs" + errors.category)
                }
                
                }>Create Expense</Button> 
                </form>
                
                </Box>


                <br/>
                <Button variant='outlined' onClick={() => {
                    setRunTimer(true)
                }
                }>Close</Button> 
            </div>
        </div>
    )
}

export default Popup