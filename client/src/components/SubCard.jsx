import React, { useState } from 'react';
import { Paper, TextField, Button } from '@mui/material/';
import '../assets/styles/sub-card.scss';

//Tree shake sub from props
const SubCard = ({
  name,
  tier,
  cost,
  paymentDate,
  subscriptionType,
  activiationDate,
}) => {
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
        <Button>Edit</Button>
        <Button>Delete</Button>
      </div>
    </Paper>
  );
};

export default SubCard;
