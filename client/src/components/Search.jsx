import '../assets/styles/search.scss';
import { useAppContext } from '../context/appContext';

const Search = () => {
  const handleChange = () => {};

  return (
    <div className='search-container'>
      <form className='search'>
        <input
          className='search-input'
          type='text'
          placeholder='Search...'
          onChange={handleChange}
        />
        <button type='submit'><i className='fa-search'></i></button>
      </form>
    </div>
  );
};

export default Search;
