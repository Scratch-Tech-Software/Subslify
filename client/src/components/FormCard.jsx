import React, { useState } from 'react';
import { Paper, TextField } from '@mui/material/';
import Button from '@mui/material/Button';
import FormRow from './FormRow.jsx';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import '../assets/styles/ghostCard.css';

const FormCard = () => {
  //state to handle form inputs
  const [inputs, setInputs] = useState({});

  //for date picker
  const [paymentDate, setPaymentDate] = useState(null);

  //for date picker
  const [activationDate, setActivationDate] = useState(null);

  const handleChange = (e) => {
    //console logs to see state being updated

    // console.log({ inputs });
    // console.log([e.target.name]);
    // console.log('on change');
    // console.log(inputs);

    //descontructing target name from inputs object and reassigning the keyvalue to the current value
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));

    console.log(inputs);
  };

  const handleClick = (e) => {
    //prevent form from auto-sending?
    e.preventDefault();

    const options = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: inputs.subName,
        tier: inputs.subTier,
        cost: inputs.subCost,
        paymentDate: paymentDate,
        subscriptionType: inputs.subType,
        activiationDate: activationDate,
      }),
    };

    fetch(URL, options)
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        //after we get a success response, we should grab all of the quests again
        console.log('quest created!');

        // setInputs({});

        //since we are returning the new data point back, we are going to re-render data to have the new data point and therefore cause a re-render for the entire application

        /* The reason we wrap the code after the arrow in () is because without it, JS thinks we are writing a function. This is required whenever returning an object ({} OR []) in a single line. source in the link below*/
        //https://stackoverflow.com/questions/41655402/react-setstate-where-does-prevstate-come-from

        setValue((prevState) => [...prevState, data[0]]);

        /* The reason we wrap the code after the arrow in () is because without it, JS thinks we are writing a function. This is required whenever returning an object ({} OR []) in a single line. source in the link below*/
        //https://stackoverflow.com/questions/41655402/react-setstate-where-does-prevstate-come-from

        setInputs((prevState) => ({
          ...prevState,
          subName: '',
          subTier: '',
          subCost: '',
          subType: '',
        }));

        setPaymentDate(null);
        setActivationDate(null);

        // console.log(inputs);
        // console.log('done posting');
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
              value={inputs.subName || ''}
              onChange={handleChange}
            />
          </div>
          <div className='ghostCardInput'>
            <TextField
              label='Tier'
              name='subTier'
              value={inputs.subTier || ''}
              onChange={handleChange}
            />
          </div>
          <div className='ghostCardInput'>
            <TextField
              label='Cost per month'
              name='subMonthCost'
              value={inputs.subCost || ''}
              onChange={handleChange}
            />
          </div>
          <div className='ghostCardInput'>
            <LocalizationProvider dateAdapter={AdapterMoment}>
              <DatePicker
                label='Date of Payment'
                value={paymentDate}
                onChange={(newDate) => {
                  setPaymentDate(newDate);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </div>
          <div className='ghostCardInput'>
            <TextField
              label='Type of Subscription'
              name='subType'
              value={inputs.subType || ''}
              onChange={handleChange}
            />
          </div>
          <div className='ghostCardInput'>
            <LocalizationProvider dateAdapter={AdapterMoment}>
              <DatePicker
                label='Activation Date'
                value={activationDate}
                onChange={(newDate) => {
                  setActivationDate(newDate);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </div>
          <Button variant='contained' type='submit'>
            Add New Subscription
          </Button>
        </form>
      </Paper>
    </div>
  );
};

export default FormCard;
