import { useState, useEffect } from 'react';

const useFetch = () => {
  const URL = 'http://localhost:3000/subs';
  const [subList, setSubList] = useState(null);
  const [error, setError] = useState(null);
        
  useEffect(() =>{
    fetch(URL)
      .then((data) => data.json())
      .then((data) => {
        console.log('data-->',data);
        setSubList(data);
        //updating state to have the SubCard the first in the array and making unshifting the previous to after
        // setSubList((prevState) => ([<SubCard sub = {data}/>,...prevState]));
      })
      .catch(err => setError(err.message));
  }, [URL]);
  return { subList, error };
};
 
export default useFetch;