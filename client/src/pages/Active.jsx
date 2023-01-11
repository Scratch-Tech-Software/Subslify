import { useState, useEffect } from 'react';
import FormCard from '../components/FormCard';
import { Button } from '@mui/material';
import SubCard from '../components/SubCard';
import fetch from '../context/fetch';

// import SearchBar from '../components/SearchBar';

const Active = () => {
  
  const { lists } = fetch('http://localhost:3000/subs');
  
  return (
    <div className='active'>
      {/* <SearchBar/> */}
      <h3>Subscriptions</h3>
      {/* render the current state of subList. At the beginning just a form card. then it will be an array of Sub Cards */}
      <SubCard/>
      { lists && <Blog lists={lists}/>}
      <Button onClick={fetch}>Get Some Data</Button>
    </div>
  );
};

export default Active;
