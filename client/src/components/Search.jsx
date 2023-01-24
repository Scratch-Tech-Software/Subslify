import '../assets/styles/search.scss';
import { useAppContext } from '../context/appContext';

const Search = () => {
  const handleChange = () => {};

  return (
    <div className='search-container'>
        <form>
      <input
        className='search-input'
        type='text'
        placeholder='Search...'
        onChange={handleChange}
      />
      <button type='submit'><i className='search-button'></i></button>
      </form>
    </div>
  );
};

export default Search;
