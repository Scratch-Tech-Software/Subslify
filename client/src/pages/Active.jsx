import { useState } from 'react';
import FormCard from '../components/FormCard';
import { Button } from '@mui/material';
import SubCard from '../components/SubCard';
import moment from 'moment';
import Title from '../components/Title';
import '../assets/styles/active.scss';
import '../assets/styles/sub-card2.scss';
import { useEffect } from 'react';

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
          //reassign dates to the parsed version using moment to ensure proper formatting with in sub card

          console.log('sub payment date', sub.name, sub.paymentDate);

          console.log('sub activation date', sub.name, sub.activationDate);

          return (
            <div>
              {/* <div className='sub-card'>
                <SubCard
                  key={sub.id}
                  id={sub.id}
                  name={sub.name}
                  tier={sub.tier}
                  cost={sub.cost}
                  paymentDate={sub.paymentDate}
                  subscriptionType={sub.subscriptionType}
                  activationDate={sub.activationDate}
                  fetchData={fetchData}
                />
              </div> */}

              <div className='sub-card2'>
                <div className='subCardBackground'>
                  <div className='subType'>{sub.subscriptionType}</div>
                  <div className='subCost'>${sub.cost}/mo</div>
                  <div className='subName'>{sub.name}</div>
                  <div className='paymentDate'>
                    Billing Date: {moment(sub.paymentDate).format('MM/DD/YYYY')}
                  </div>
                  <div className='activationDate'>
                    Activation Date: {moment(sub.activationDate).format('MM/DD/YYYY')}
                  </div>
                  <div className='email'>Email: theaxman123@gmail.com</div>
                  <div className='cardInfo'>Card on file: Visa XXX136</div>
                  <button>Edit</button>
                  <button>Delete</button>
                </div>
              </div>
            </div>
          );
        });

        setSubList(() => [...subListBox]);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='active'>
      <Title title='Subscriptions' />
      {/* INSERT nav bar here! */}
      <nav class='crumbs'>
        <ol>
          <li class='crumb'>
            <a href='#'>item1</a>
          </li>
          <li class='crumb'>
            <a href='#'>item2</a>
          </li>
          <li class='crumb'>item3</li>
        </ol>
      </nav>

      {/* render the current state of subList. At the beginning just a form card. then it will be an array of Sub Cards */}
      <div className='active-cards'>
        {subList}
        <FormCard setSubList={setSubList} fetchData={fetchData} />
        <Button onClick={fetchData}>Get Some Data</Button>
      </div>
    </div>
  );
};

export default Active;
