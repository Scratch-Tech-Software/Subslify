import { Search, Sort } from '../../components';
import { useAppContext } from '../../context/appContext';
import '../../assets/styles/search.scss';

const Active = () => {
  /* Questions
  // get active subscriptions tied to user via contextApi? how do i get the data?
  // map all active subscriptions tied to user in array
  */
  /*Sort
    1. Create a new array where subscriptions equal the chosen sort option, leveraging map and sort
    2. Create separate sort handler functions for each sort option
        - Logic might be included here
            - If I do it here, it's only contained in this page
        - Logic might be included in contextAPI
            - If I have the logic included in contextAPI, then it's central and can be accessed by other pages
    3. Potentially use select component
  */
  
  return (
    <div>
      <div>Active Subscriptions</div>
        {/* add a div container to contain the search filter and sort components w/ className for styling*/}
      <div className="search-container">
        <Search />
        <Sort />
      </div>

      {/* render all cards that have been mapped to an array and/or retrieved from state/contexAPI */}
    </div>
  );
};

export default Active;