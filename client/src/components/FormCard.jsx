import React, { useState } from 'react';
import { Paper, TextField } from '@mui/material/';
import Button from '@mui/material/Button';
import MUFormRowCard from './MUFormRowCard.jsx';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import '../assets/styles/form-card.scss';

const FormCard = ({ fetchData }) => {
  const API_URL = 'http://localhost:3000/subs';

  const subInformation = {
    subName: '',
    subTier: '',
    subCost: '',
    subType: '',
  };

  //state to handle form inputs
  const [inputs, setInputs] = useState(subInformation);

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
        activationDate: activationDate,
      }),
    };

    fetch(API_URL, options)
      .then((data) => data.json())
      .then((data) => {
        setInputs((prevState) => ({
          ...prevState,
          subName: '',
          subTier: '',
          subCost: '',
          subType: '',
        }));

        fetchData();
        setPaymentDate(null);
        setActivationDate(null);

        // console.log(inputs);
        // console.log('done posting');
      });
  };

  return (
    <div className='form-card'>
      <Paper>
        <form onSubmit={handleClick}>
          <MUFormRowCard
            labelText='Subscription Name'
            name='subName'
            value={inputs.subName || ''}
            handleChange={handleChange}
          />

          {/* <MUFormRowCard
            labelText='Subscription Tier'
            name='subTier'
            value={inputs.subTier || ''}
            handleChange={handleChange}
          /> */}

          <MUFormRowCard
            labelText='Subscription Cost'
            price={true}
            name='subCost'
            value={inputs.subCost || ''}
            handleChange={handleChange}
          />

          <MUFormRowCard
            labelText='Subscription Type'
            name='subType'
            value={inputs.subType || ''}
            handleChange={handleChange}
          />

          <div className='formInputDate'>
            <label className='form-label'>Billing Due Date</label>

            <LocalizationProvider dateAdapter={AdapterMoment}>
              <DatePicker
                value={paymentDate}
                onChange={(newDate) => {
                  setPaymentDate(newDate);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </div>

          <div className='formInputDate'>
            <label className='form-label'>Activation Date</label>

            <LocalizationProvider dateAdapter={AdapterMoment}>
              <DatePicker
                placeholder={'activationDate'}
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

      {/* <TextField
              label='Tier'
              name='subTier'
              value={inputs.subTier || ''}
              onChange={handleChange}
            /> */}
    </div>
  );
};

export default FormCard;
