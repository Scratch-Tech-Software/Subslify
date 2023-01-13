import React, { useMemo, useRef, useState, useEffect } from 'react';
import '../assets/styles/searchbar.scss';
import subData from '../../db.json';

function SearchBar() {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState('');
  const inputRef = useRef();

  const filteredItems = useMemo(() => {
    return items.filter(item => {
      return item.toLowerCase().includes(query.toLowerCase())
    })
  }, [items, query])

  function onSubmit(e) {
    e.preventDefault()

    const value = inputRef.current.value
    if (value === "") return
    setItems(prev => {
      return [...prev, value]
    })

    inputRef.current.value = ""
  }

  return (
    <div>
      Search:
      <input
        value={query}
        onChange={e => setQuery(e.target.value)}
        type="search"
      />
      <br />
      <br />
      <form onSubmit={onSubmit}/>
      {subData.map(item => (
        <div>{item}</div>
      ))}
    </div>
  );
};
// const Data = ({data}) => {
//   const [posts, setPosts] = useState([]);
//   const [searchResults, setSearchResults] = useState([]);

//   useEffect(() => {
//     subData().then(json => {
//       setPosts(json);
//       return json;
//     }).then(json => {
//       setSearchResults(json);
//     });
//   }, []);
// };

// const SearchBar = ({posts, setSearchResults}) => {
//   const handleSubmit = (e) => e.preventDefault();

//   const handleSearchChange = (e) => {
//     if(!e.target.value) return setSearchResults(posts);

//     const resultsArray = posts.filter(posts => posts.includes(e.target.value));

//     setSearchResults(resultsArray);
//   };

//   return(
//     <header>
//       <form className="search" onSubmit={handleSubmit}>
//         <input 
//           className="search_input" 
//           type="text" 
//           id="search"
//           onchange={handleSearchChange}
//         />
//         <button className="search_button">

//         </button>
//       </form>
//     </header>
//   );
// };

 
export default SearchBar;