import { Search, Sort } from '../../components';
import { useAppContext } from '../../context/appContext';
import '../../assets/styles/search.scss';

const Trial = () => {
  return (
    <div>
      <div>Trial Subscriptions</div>
      <div className="search-sort-container">
        <Search />
        <Sort />
      </div>
    </div>
  );
};

export default Trial;
