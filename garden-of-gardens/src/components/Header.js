import React, { useState } from 'react';

const Header = () => {
  const [searchInput, setSearchInput] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  
  // Function to handle search input changes and fetch suggestions
  const handleSearchInputChange = (e) => {
    const searchTerm = e.target.value;
    setSearchInput(searchTerm);
    
    // Implement fetching search suggestions from Google here
    // Update 'suggestions' state with fetched suggestions
  };

  return (
    <header>
      <div className="top-menu">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search plants..."
            value={searchInput}
            onChange={handleSearchInputChange}
          />
          {suggestions.length > 0 && (
            <div className="search-suggestions">
              <ul>
                {suggestions.map((suggestion, index) => (
                  <li key={index}>{suggestion}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="dropdown">
          {/* Dropdown code here */}
        </div>
        <a href="/cart" className="cart-icon">Cart</a>
      </div>
    </header>
  );
};

export default Header;
