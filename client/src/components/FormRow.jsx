const FormRow = ({
  type,
  name,
  value,
  handleChange,
  autocomplete = 'on',
  labelText,
}) => {
  return (
    <div className='form-row'>
      <label htmlFor={name} className='form-label'>
        {labelText ?? name}
      </label>
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
};
export default FormRow;
