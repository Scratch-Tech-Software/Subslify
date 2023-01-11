import React, { useState } from 'react';
import { Paper, TextField } from '@mui/material/';
import Button from '@mui/material/Button';
import FormRow from './FormRow.jsx';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import '../assets/styles/ghostCard.css';


const FormCard = () => {
  const [ name, setName ] = useState('');
  const [ tier, setTier ] = useState('');
  const [ cost, setCost ] = useState('');
  const [ payment, setPayment ] = useState('');
  const [ subType, setSubType ] = useState('');
  const [ activate, setActivate] = useState('');

  const handleClick = (e) => {
    //prevent form from auto-sending?
    e.preventDefault();

    const post = { name, tier, cost, payment, subType, activate };

    fetch('http://localhost:3000/subs',{
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(post)
    })
      .then(()=>{
        console.log('added new post');
        history.push('/active');
      }); 
  };

  return (
    <div className='ghostCard'>
      <Paper>
        <form onSubmit={handleClick}>
          <h3>Track New Sub</h3>
          <div className='ghostCardInput'>
            <FormRow/>

            <TextField
              id='outlined-basic'
              label='Subscription Name'
              name='subName'
              value={name || ''}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='ghostCardInput'>
            <TextField
              label='Tier'
              name='subTier'
              value={tier || ''}
              onChange={(e) => setTier(e.target.value)}
            />
          </div>
          <div className='ghostCardInput'>
            <TextField
              label='Cost per month'
              name='subMonthCost'
              value={cost || ''}
              onChange={(e) => setCost(e.target.value)}
            />
          </div>
          <div className='ghostCardInput'>
            <LocalizationProvider dateAdapter={AdapterMoment}>
              <DatePicker
                label='Date of Payment'
                value={payment}
                onChange={(newDate) => {
                  setPayment(newDate);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </div>
          <div className='ghostCardInput'>
            <TextField
              label='Type of Subscription'
              name='subType'
              value={subType || ''}
              onChange={(e) => setSubType(e.target.value)}
            />
          </div>
          <div className='ghostCardInput'>
            <LocalizationProvider dateAdapter={AdapterMoment}>
              <DatePicker
                label='Activation Date'
                value={activate}
                onChange={(newDate) => {
                  setActivate(newDate);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </div>
          <Button className='add' variant='contained' type='submit'>
            Add New Subscription
          </Button>
        </form>
      </Paper>
    </div>
  );
};

export default FormCard;
