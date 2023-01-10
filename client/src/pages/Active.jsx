import { useState } from 'react';
import FormCard from '../components/FormCard';
import { Button } from '@mui/material';
import SubCard from '../components/SubCard';

const Active = () => {

  //had to install a JSON Server package to  https://www.npmjs.com/package/json-server
  //IMPORTANT: MAKE SURE TO INSTALL LIKE THIS: npm install -g json-server
  //Then to start the server json-server --watch db.json

  //ALSO IMPORTANT, need to create a file with the "db.json" naming convention
  const API_URL = 'http://localhost:3000/subs';

  //pseduo state mangement
  //start the subList with the Form Card to take in new subscription tracking and make the "last card" the form
  const [subList, setSubList] = useState([<FormCard />]);

  
  const fetchData = () => {
    fetch(API_URL)
      .then((data) => data.json())
      .then((data) => {
        console.log(data);

        //updating state to have the SubCard the first in the array and making unshifting the previous to after
        setSubList((prevState) => ([<SubCard sub = {data}/>,...prevState]));

  
      });
  };

  return (
    <section>
      <h3>Subscriptions</h3>
      {/* render the current state of subList. At the beginning just a form card. then it will be an array of Sub Cards */}
      {subList}
      <Button onClick={fetchData}>Get Some Data</Button>
    </section>
  );
};

export default Active;
