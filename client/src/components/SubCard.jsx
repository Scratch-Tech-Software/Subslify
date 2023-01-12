import React, { useState } from 'react';
import { Paper, TextField, Button } from '@mui/material/';
import '../assets/styles/sub-card.scss';

//Tree shake sub from props
const SubCard = ({
  id,
  name,
  tier,
  cost,
  paymentDate,
  subscriptionType,
  activiationDate,
  fetchData,
}) => {
  const API_URL = 'http://localhost:3000/subs';
  //Delete Data Method

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
  //return a Paper/Box with the subscription information
  return (
    <Paper>
      <div className='subCardInput'>
        <TextField label='Subscription Name' id='outlined-basic' value={name} />
        <br></br>
        <TextField label='Subscription Cost' id='outlined-basic' value={tier} />
        <br></br>
        <TextField label='Subscription Cost' id='outlined-basic' value={cost} />
        <br></br>
        <TextField
          label='Subscription Payment Date'
          id='outlined-basic'
          value={paymentDate}
        />
        <br></br>
        <TextField
          label='Subscription Type'
          id='outlined-basic'
          value={subscriptionType}
        />
        <br></br>
        <TextField
          label='Subscription Activation Date'
          id='outlined-basic'
          value={activiationDate}
        />
        <Button onClick={}>Edit</Button>
        <Button onClick={() => handleDelete(id)}>Delete</Button>
      </div>
    </Paper>
  );
};

export default SubCard;
