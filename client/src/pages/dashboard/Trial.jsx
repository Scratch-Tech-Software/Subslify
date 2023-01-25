import { Search, Sort } from '../../components';
import { useAppContext } from '../../context/appContext';
import '../../assets/styles/search.scss';

const Trial = () => {
  const { isLoading, alert, showAlert } = useAppContext();
  console.log({isLoading, alert, showAlert});
  return (
    <div>
      <div>Trial Subscriptions</div>
      <div className="search-sort-container">
        <Search type='trial'/>
        <Sort type='trial'/>
      </div>
    </div>
  );
};

export default Trial;
