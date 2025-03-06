import React from 'react';
import './Navigation.css';

interface NavigationProps {
  onFilterChange: (value: string) => void;
  onSortRequest: (category: 'characters' | 'planets') => void;
}

const Navigation: React.FC<NavigationProps> = ({ onFilterChange, onSortRequest }) => {
  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onFilterChange(event.target.value);
  };

  const handleClear = () => {
    onFilterChange('');
    // Also clear the input field
    const filterInput = document.getElementById('filter') as HTMLInputElement;
    if (filterInput) filterInput.value = '';
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, category: 'characters' | 'planets') => {
    e.preventDefault();
    onSortRequest(category);
  };

  return (
    <nav>
      <ul>
        <li>
          <a 
            href="#characters" 
            onClick={(e) => handleNavClick(e, 'characters')}
          >
            Characters
          </a>
        </li>
        <li>
          <a 
            href="#planets" 
            onClick={(e) => handleNavClick(e, 'planets')}
          >
            Planets
          </a>
        </li>
      </ul>
      <ul>
        <li>
          <label htmlFor="filter">Filter:</label>
          <input 
            type="text" 
            id="filter" 
            placeholder="Search" 
            onChange={handleFilterChange}
          />
        </li>
        <li><button onClick={handleClear}>Clear</button></li> 
      </ul>
    </nav>
  );
};

export default Navigation; 