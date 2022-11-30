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
    const [customerDetails, setCustomerDetails] = useState({
        name : "",
        phone : "",
        address : "",
        city : "",
        state : ""
    })

    // Destructered
    let name = customerDetails.name;
    let phone = customerDetails.phone;
    let address = customerDetails.address;
    let city = customerDetails.city;
    let state = customerDetails.state;

    const toggler =()=>{
        if(name.match(nameRegex) && phone.match(phoneRegex) && address.match(addressRegex) && city.match(cityRegex) && state.match(stateRegex)){
            props.orderToggler()
            document.getElementById('continue').style.backgroundColor = 'white'
            document.getElementById('continue').style.border = 'none'
            setorderSummary(true)
        }
        else{
            borderHandle()
            console.log("Enter details correctly...")
        }
        
    }
    // Regex
    const nameRegex = /^[A-Za-z]+/;
    const phoneRegex = /^[0-9]{10}/;
    const addressRegex = /^[A-Za-z0-9/./-]+/;
    const cityRegex = /^[A-Za-z]{3,}/;
    const stateRegex = /^[A-Za-z/./-]+/;

    // Storing Data
    const handleNameChange = (event) => {
        setCustomerDetails(prevState => ({
            ...prevState,
            name : event.target.value
        }))
    }
    const handlePhoneChange = (event) => {
        setCustomerDetails(prevState => ({
            ...prevState,
            phone : event.target.value
        }))
    }
    const handleAddressChange = (event) => {
        setCustomerDetails(prevState => ({
            ...prevState,
            address : event.target.value
        }))
    }
    const handleCityChange = (event) => {
        setCustomerDetails(prevState => ({
            ...prevState,
            city : event.target.value
        }))
    }
    const handleStateChange = (event) => {
        setCustomerDetails(prevState => ({
            ...prevState,
            state : event.target.value
        }))
    }
     
    const borderHandle = ()=>{
        if(!name){
            document.querySelector(".firstField").style.border = "1px solid red";
            document.querySelector(".firstField").style.borderRadius = "4px";
            setTimeout(() => {
                document.querySelector(".firstField").style.border = "none";
                document.querySelector(".firstField").style.borderRadius = "none";
            }, 4000);
        }
        else if(!phone){
            document.querySelector(".secondField").style.border = "1px solid red";
            document.querySelector(".secondField").style.borderRadius = "4px";
            setTimeout(() => {
                document.querySelector(".secondField").style.border = "none";
                document.querySelector(".secondField").style.borderRadius = "none";
            }, 4000);
        }
        else if(!address){
            document.querySelector(".thirdField").style.border = "1px solid red";
            document.querySelector(".thirdField").style.borderRadius = "4px";
            setTimeout(() => {
                document.querySelector(".thirdField").style.border = "none";
                document.querySelector(".thirdField").style.borderRadius = "none";
            }, 4000);
        }
        else if(!city){
            document.querySelector(".fourthField").style.border = "1px solid red";
            document.querySelector(".fourthField").style.borderRadius = "4px";
            setTimeout(() => {
                document.querySelector(".fourthField").style.border = "none";
                document.querySelector(".fourthField").style.borderRadius = "none";
            }, 4000);
        }
        else if(!state){
            document.querySelector(".fifthField").style.border = "1px solid red";
            document.querySelector(".fifthField").style.borderRadius = "4px";
            setTimeout(() => {
                document.querySelector(".fifthField").style.border = "none";
                document.querySelector(".fifthField").style.borderRadius = "none";
            }, 4000);
        }
        else{

        }
    }
  return (
   <div>
        <div className='customerDetails'>
        <h4>Customer Details</h4>
        <div id='address'>
            <div>
                <form>
                <TextField id="outlined-basic" className='smallField firstField' size='small' label="Full Name" helperText=" " variant="outlined" onChange={handleNameChange} />&nbsp;
                <TextField id="outlined-basic" className='smallField secondField' size='small' label="Mobile Number" variant="outlined" onChange={handlePhoneChange} />
                <TextField id="outlined-basic" className='bigField thirdField' size='small' label="Address" helperText=" " variant="outlined" onChange={handleAddressChange} />
                <TextField id="outlined-basic" className='smallField fourthField' size='small' label="city/town" helperText=" " variant="outlined" onChange={handleCityChange} />&nbsp;
                <TextField id="outlined-basic" className='smallField fifthField' size='small' label="State" variant="outlined" onChange={handleStateChange} />
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
                <button id='addBtn'>Add New Address</button><button id='continue' onClick={toggler}>CONTINUE</button>
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