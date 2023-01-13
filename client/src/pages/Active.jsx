import { useEffect, useState } from 'react';
import FormCard from '../components/FormCard';
import { Button } from '@mui/material';
import SubCard from '../components/SubCard';
import SearchBar from '../components/SearchBar';
import '../assets/styles/active.scss';

const Active = () => {
  //had to install a JSON Server package to  https://www.npmjs.com/package/json-server
  //IMPORTANT: MAKE SURE TO INSTALL LIKE THIS: npm install -g json-server
  //Then to start the server json-server --watch db.json

  //ALSO IMPORTANT, need to create a file with the "db.json" naming convention
  const API_URL = 'http://localhost:3000/subs';

  //pseduo state mangement
  //start the subList with the Form Card to take in new subscription tracking and make the "last card" the form
  const [subList, setSubList] = useState([]);

  //fetchData function
  const fetchData = () => {
    fetch(API_URL)
      .then((data) => data.json())
      .then((data) => {
        //updating state to have the SubCard the first in the array and making unshifting the previous to after

        const subListBox = data.map((sub) => {
          return (
            <div className='sub-card'>
              <SubCard
                key={sub.id}
                id={sub.id}
                name={sub.name}
                tier={sub.tier}
                cost={sub.cost}
                paymentDate={sub.paymentDate}
                subscriptionType={sub.subscriptionType}
                activiationDate={sub.activiationDate}
                fetchData={fetchData}
              />
            </div>
          );
        });

        setSubList(() => [...subListBox]);
      });
  };

  return (
    <div className='active'>
      <h3>Subscriptions</h3>
      {/* render the current state of subList. At the beginning just a form card. then it will be an array of Sub Cards */}
      <div className='active-cards'>
        <SearchBar/>
        <FormCard setSubList={setSubList} fetchData={fetchData} />
        <Button onClick={fetchData}>Get Some Data</Button>
      </div>
    </div>
  );
};

export default Active;
