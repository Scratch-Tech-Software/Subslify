import { useState } from 'react';
import '../assets/styles/search.scss';

const Sort = () => {
  //Initialize the sort button's open state to false
  //Otherwise, the dropdown will be open upon initial render
  const [sortStatus, setSortStatus] = useState({
    isOpen: false,
    activeSortOpt: null,
  });

  const { activeSortOpt } = sortStatus;

  //Sort dropdown options
  //Should this ultimately be coming from the db?
  const sortOptions = ['Alphabetical', 'Cost', 'Payment Due'];

  const handleSortOptClick = (e) => {
    e.preventDefault();
    setSortStatus({ isOpen: false, activeSortOpt: e.target.innerText });
  };

  //handler that is invoked upon clicking on sort button, toggling its open status to the opposite boolean
  const handleSortClick = () => {
    setSortStatus((sortStatus) => {
      return {
        ...sortStatus,
        isOpen: !sortStatus.isOpen,
      };
    });
  };

  //Map dropdown options to li component
  const sortListItems = sortOptions.map(el => {
    //If the list item was selected, provide dynamic className for dynamic styling
    //Will let user know which sort option is currently active
    let activeClass = activeSortOpt === el ? 'active sort-list-item' : 'sort-list-item';

    return (
      <li
        key={el}
        className={activeClass}
        //Handle click to update state to show this sort option is the active selection
        onClick={handleSortOptClick}
      >
        {el}
      </li>
    );
  });
  
  return (
    <div className='sort-container'>
      <button type='button' className='sort-button' onClick={handleSortClick}>
        Sort
      </button>
      {sortStatus.isOpen && (
        <div className='sort-dropdown'>
          <ul className='sort-list'>{sortListItems}</ul>
        </div>
      )}
    </div>
  );
};

export default Sort;
