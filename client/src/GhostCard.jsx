import React from 'React';
import { useState } from 'react';

const GhostCard = () => {

  const [inputs, setInputs] = useState({});

  //for date picker
  const [date, setDate] = useState(null);

  const handleChange = (e) => {
    //console logs to see state being updated

    // console.log({ inputs });
    // console.log([e.target.name]);
    // console.log('on change');
    // console.log(inputs);

    //descontructing target name from inputs object and reassigning the keyvalue to the current value
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleClick = (e) => {
    //prevent form from auto-sending?
    e.preventDefault();

    if (inputs.questName.length === 0 || inputs.questDesc.length === 0) {
      return;
    }

    const options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        questName: inputs.questName,
        questDescription: inputs.questDesc,
        questPoints: inputs.questPoints,
        questDueDate: date,
      }),
    };

    fetch(URL, options)
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        //after we get a success response, we should grab all of the quests again
        console.log("quest created!");

        // setInputs({});

        //since we are returning the new data point back, we are going to re-render data to have the new data point and therefore cause a re-render for the entire application

        /* The reason we wrap the code after the arrow in () is because without it, JS thinks we are writing a function. This is required whenever returning an object ({} OR []) in a single line. source in the link below*/
        //https://stackoverflow.com/questions/41655402/react-setstate-where-does-prevstate-come-from

        setValue((prevState) => [...prevState, data[0]]);

        /* The reason we wrap the code after the arrow in () is because without it, JS thinks we are writing a function. This is required whenever returning an object ({} OR []) in a single line. source in the link below*/
        //https://stackoverflow.com/questions/41655402/react-setstate-where-does-prevstate-come-from

        setInputs((prevState) => ({
          ...prevState,
          questName: "",
          questDesc: "",
          questPoints: "",
        }));

        setDate(null);

        // console.log(inputs);
        // console.log('done posting');
      });
  };

  return ( 
    <div className="questForm">
      <form onSubmit={handleClick}>
        <h3>Enter New Quest</h3>
        <div className="questFromInput">
          <TextField
            id="outlined-basic"
            label="Quest Name"
            name="questName"
            value={inputs.questName || ""}
            onChange={handleChange}
          />
          {/* <input
              name="questName"
              value={inputs.questName || ""}
              onChange={handleChange}
            ></input> */}
        </div>
        <div className="questFromInput">
          <TextField
            label="Quest Description"
            name="questDesc"
            value={inputs.questDesc || ""}
            onChange={handleChange}
          />
          {/* <input
              name="questDesc"
              value={inputs.questDesc || ""}
              onChange={handleChange}
            ></input> */}
        </div>
        <div className="questFromInput">
          <TextField
            label="Points"
            name="questPoints"
            value={inputs.questPoints || ""}
            onChange={handleChange}
          />
          {/* <input
              name="questPoints"
              value={inputs.questPoints || ""}
              onChange={handleChange}
            ></input> */}
        </div>
        <div className="questFromInput">
          <LocalizationProvider dateAdapter={AdapterMoment}>
            <DatePicker
              label="Due Date"
              value={date}
              onChange={(newDate) => {
                setDate(newDate);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </div>
        <Button variant="contained" type="submit">
          Generate
        </Button>
      </form>
    </div>
    
  );
};
 
export default GhostCard;
