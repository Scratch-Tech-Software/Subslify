const FormRow = ({
  type,
  name,
  value,
  handleChange,
  autocomplete = 'on',
  labelText,
  price,
}) => {
  if (price) {
    return (
      <div className='form-row'>
        <input
          type={type}
          value={value}
          name={name}
          id={name}
          onChange={handleChange}
          className='form-input'
          autoComplete={autocomplete}
        />
      </div>
    );
  }

  return (
    <div className='form-row'>
      {/* <label htmlFor={name} className='form-label'>
        {labelText ?? name}
      </label> */}

      <input
        placeholder={labelText}
        type={type}
        value={value}
        name={name}
        id={name}
        onChange={handleChange}
        className='form-input'
        autoComplete={autocomplete}
      />

      {/* <TextField
        label={labelText}
        value={value}
        type={type}
        name={name}
        id='outlined-basic'
        onChange={handleChange}
        className='formInput'
        autoComplete={autocomplete}
      /> */}
    </div>
  );
};
export default FormRow;
