import React, { useState } from 'react';

const SearchBar = () => {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    e.preventDefault();
    setText(e.target.value);
  }

return (
    <div>
      <form>
        <div>
          <input 
            type='text'
            id='search'
            value={text}
            onChange={handleChange}
            placeholder='Search Here...'
          />
        </div>
      </form>
    </div>
);
}

export default SearchBar;