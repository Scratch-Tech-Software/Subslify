import { useState } from 'react';
import '../assets/styles/search.scss';
const Sort = () => {
    //Initialize the sort button's open state to false
    //Otherwise, the dropdown will be open upon initial render or click
    const [sortStatus, setSortStatus] = useState({open:false});

    //Sort dropdown options
    //Should this ultimately be coming from the db?
    const sortOptions = [
        "Alphabetical",
        "Cost",
        "Payment Due"
    ];

    //Map dropdown options to li component
    const sortListItems = sortOptions.map((el,i) => {
        return <li key={i.toString()} className="sort-list-item">{el}</li>
    });

    //handler that is invoked upon clicking on sort button, toggling its open status to the opposite boolean
    const handleClick = () => {
        setSortStatus((sortStatus) => {
          return {
            open: !sortStatus.open,
          };
        });
    };

    return(
        <div className="sort-container">
            <button type="button" className="sort-button" onClick={handleClick}>
                Sort
            </button>
            {sortStatus.open && (
                <div className="sort-dropdown">
                    <ul className="sort-list">
                        {sortListItems}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Sort;