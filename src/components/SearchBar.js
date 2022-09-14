import React, { useState } from 'react';

const SearchBar = (query) => {
  const [search, setSearch] = useState([]);

  const onFormSubmit = (e) => {
    e.preventDefault();
    setSearch(search); 
  }

return (
    <div>
      <form onSubmit={onFormSubmit}>
        <div>
          <input 
            type='text'
            value={query}
            placeholder='Search Here...'
            onChange={e => setSearch({ query: e.target.value })}
          />
        </div>
      </form>
    </div>
);
}

export default SearchBar;