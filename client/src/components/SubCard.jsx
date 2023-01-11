import React, { useState } from 'react';
import { Paper, TextField, Button } from '@mui/material/';
import '../assets/styles/sub-card.scss';

//Tree shake sub from props
const SubCard = ({ sub }) => {
  //return a Paper/Box with the subscription information
  return sub.map((sub) => {
    return (
      <div className='subCard'>
        <Paper key={sub.id}>
          <div className='subCardInput'>
            <TextField
              label='Subscription Name'
              id='outlined-basic'
              value={sub.name}
            />
            <br></br>
            <TextField
              label='Subscription Cost'
              id='outlined-basic'
              value={sub.cost}
            />
            <br></br>
            <TextField
              label='Subscription Payment Date'
              id='outlined-basic'
              value={sub.paymentDate}
            />
            <br></br>
            <TextField
              label='Subscription Type'
              id='outlined-basic'
              value={sub.subscriptionType}
            />

            <Button>Edit</Button><Button>Delete</Button>
          </div>
        </Paper>
      </div>
    );
  });
};

export default SubCard;
