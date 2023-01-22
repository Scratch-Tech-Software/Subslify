import '../assets/styles/search.scss';

const Search = () => {
  const handleChange = () => {};

  return (
    <div className='search'>
      <input
        className='search-input'
        type='search'
        placeholder='Search...'
        onChange={handleChange}
      />
    </div>
  );
};

export default Search;
