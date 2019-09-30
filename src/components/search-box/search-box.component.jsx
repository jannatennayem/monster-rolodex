import React from 'react';
import './search-box.style.css';
export const SearchBox = ({placeholer, handleChange}) => (

    <input
    className = 'search'
    type = 'search' placeholer = {placeholer} 
        onChange= {handleChange }
      />
)