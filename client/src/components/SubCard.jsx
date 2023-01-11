import React, { useState } from 'react';
import { Paper, TextField } from '@mui/material/';
import fetch from '../context/fetch';

//Tree shake sub from props
const SubCard = ({ lists }) => {
  //return a Paper/Box with the subscription information
  console.log('lists-->',lists);
  return (
    <div>
      {lists.map((sub)=>(
        <div className='list-preview' key={sub.id}>
          <h2>{sub.name}</h2>
          <p>{sub.cost}</p>
          <p>{sub.paymentDate}</p>
          <p>{sub.subscriptionType}</p>
        </div>
      ))}
    </div>
  );
};

export default SubCard;
