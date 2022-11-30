import React from 'react'
import './Customer.css'
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useState } from 'react';
import Summary from '../Order Summary/Summary';

function Customer(props) {
    const [orderSummary, setorderSummary] = useState(false)
    const toggler =()=>{
        props.orderToggler()
        document.getElementById('continue').style.backgroundColor = 'white'
        document.getElementById('continue').style.border = 'none'
        setorderSummary(true)
    }
  return (
   <div>
        <div className='customerDetails'>
        <h4>Customer Details</h4>
        <div id='address'>
            <div>
                <form>
                <TextField id="outlined-basic" className='smallField' size='small' label="Full Name" helperText=" " variant="outlined" />&nbsp;
                <TextField id="outlined-basic" className='smallField' size='small' label="Mobile Number" variant="outlined" />
                <TextField id="outlined-basic" className='bigField' size='small' label="Address" helperText=" " variant="outlined" />
                <TextField id="outlined-basic" className='smallField' size='small' label="city/town" helperText=" " variant="outlined" />&nbsp;
                <TextField id="outlined-basic" className='smallField' size='small' label="State" variant="outlined" />
                <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">Type</FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                >
                    <FormControlLabel value="female" control={<Radio />} label="Home" />
                    <FormControlLabel value="male" control={<Radio />} label="Work" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                </RadioGroup>
                </FormControl>
                </form>
            </div>
            
            <div className='addressBtns'>
                <button id='addBtn'>Add New Address</button><button id='continue' onClick={()=>{toggler()}}>CONTINUE</button>
            </div>
         </div>
        </div>
        <div>
            {orderSummary? <Summary/> : null}     
        </div>
   </div>
  )
}

export default Customer