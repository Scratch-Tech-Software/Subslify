import React, { useState } from 'react';
import { Paper, TextField } from '@mui/material/';

//Tree shake sub from props
const SubCard = ({ sub }) => {
  //return a Paper/Box with the subscription information
  return sub.map((sub) => {
    return (
      <Paper>
        <TextField label='Subscription Name' value={sub.name} />
        <br></br>
        <TextField label='Subscription Cost' value={sub.cost} />
        <br></br>
        <TextField label='Subscription Payment Date' value={sub.paymentDate} />
        <br></br>
        <TextField label='Subscription Type' value={sub.subscriptionType} />
      </Paper>
    );
  });
};

export default SubCard;
