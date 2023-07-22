import React from 'react'
import "./index.scss"
import searchlogo from "../../assets/search.png"
import profilelogo from "../../assets/profile.png"
import heartlogo from "../../assets/heart.png"
const Search = () => {
  return (
    <div className="search">
    <div className="search__input-container">
      <img
        src={searchlogo}
        alt="search logo"
        className="search__search-logo"
      />
      <input type="text" placeholder="Search" />
    </div>
    <img src={profilelogo} alt="profile logo" />
    <img src={heartlogo} alt="favorite logo" />
  </div>
);
};

export default Search