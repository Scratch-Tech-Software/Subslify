import React, { useState } from 'react';
import { Paper, TextField, Button } from '@mui/material/';
import FormRow from './FormRow.jsx';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import moment from 'moment';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import '../assets/styles/sub-card.scss';
import '../assets/styles/sub-card2.scss';

//Tree shake sub from props
const SubCard = ({
  id,
  name,
  tier,
  cost,
  paymentDate,
  subscriptionType,
  activationDate,
  fetchData,
}) => {
  const API_URL = 'http://localhost:3000/subs';

  const subInformation = {
    subName: name,
    subTier: tier,
    subCost: cost,
    subType: subscriptionType,
  };

  //state to handle form inputs
  const [inputs, setInputs] = useState(subInformation);

  //for date picker
  const [newPaymentDate, setNewPaymentDate] = useState(paymentDate);

  //for date picker
  const [newActivationDate, setNewActivationDate] = useState(activationDate);

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

  //Delete Function
  const handleDelete = (subId) => {
    const options = {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ subId }),
    };

    console.log(subId);

    fetch(API_URL + `/${subId}`, options)
      .then((data) => data.json())
      .then((data) => {
        console.log('this is the data returned from deletion', data);
        //after we get a success response, we should grab all of the quests again

        fetchData();
      });
  };

  const handleEdit = (subId) => {
    /**
     * TO DO:
     * change options below
     * then add to OnClick in button below
     */
    const options = {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id,
        name: inputs.subName,
        tier: inputs.subTier,
        cost: inputs.subCost,
        paymentDate,
        subscriptionType: inputs.subType,
        activationDate,
      }),
    };

    fetch(API_URL + `/${subId}`, options)
      .then((data) => data.json())
      .then((data) => {
        console.log('this is the data returned from deletion', data);
        //after we get a success response, we should grab all of the quests again

        fetchData();
      });
  };
  //return a Paper/Box with the subscription information
  return (
    <div className='sub-card2'>
      <div className='subCardBackground'>
        <div className='subType'>
          <FormRow
            labelText='Type of Subscription'
            name='subType'
            value={inputs.subType || ''}
            handleChange={handleChange}
          />
        </div>
        <div className='subCost'>
          $
          <FormRow
            labelText='Cost Per Month'
            price={true}
            name='subCost'
            value={inputs.subCost || ''}
            handleChange={handleChange}
          />
          /mo
        </div>

        <div className='subName'>
          <FormRow
            labelText='Subscription Name'
            name='subName'
            value={inputs.subName || ''}
            handleChange={handleChange}
          />
        </div>

        <div className='paymentDate'>
          Billing Date: {moment(paymentDate).format('MM/DD/YYYY')}
        </div>

        <div className='activationDate'>
          Activation Date: {moment(activationDate).format('MM/DD/YYYY')}
        </div>

        {/* <div className='formInputDate'>
          <LocalizationProvider dateAdapter={AdapterMoment}>
            <DatePicker
              label='Date of Payment'
              value={newPaymentDate}
              onChange={(newDate) => {
                setNewPaymentDate(newDate);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </div>

        <div className='formInputDate'>
          <LocalizationProvider dateAdapter={AdapterMoment}>
            <DatePicker
              label='Activation Date'
              value={newActivationDate}
              onChange={(newDate) => {
                setNewActivationDate(newDate);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </div> */}

        <div className='email'>Email: theaxman123@gmail.com</div>
        <div className='cardInfo'>Card on file: Visa XXX136</div>
        <Button onClick={() => handleEdit(id)}>Edit</Button>
        <Button onClick={() => handleDelete(id)}>Delete</Button>
      </div>
    </div>
  );
};

export default SubCard;
