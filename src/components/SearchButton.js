import React from 'react';
import search from '../images/search.svg';

const SearchButton = () => {
  return (
    <div className="right-sidebar-box search-box">
      <img className="search-icon" alt="search" src={search} />
      <input placeholder="Search Twitter" />
    </div>
  );
};

export default SearchButton;
