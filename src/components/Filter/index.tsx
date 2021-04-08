import React from 'react';
import { FilterContainer } from './styles';
import Friends from '../../friendsList.json';

const Cards: React.FC = () => {
  return (
    <div className="container">
      <FilterContainer>
        <div className="title">Friends List</div>
        <div className="filter-wrap">
          <ul>
            <li>
              <span className="search">
                <img src="https://i.ibb.co/zRwwY4x/Vector.png" alt="search" />
              </span>
            </li>
            <li>
              <div className="filter">
                <span className="sort-by">Sort by:</span>
                <select name="filter">
                  <option>Newest Person</option>
                </select>
                <label htmlFor="filter" className="arrow-icon">
                  <img
                    src="https://i.ibb.co/NTcnd5z/Rectangle.png"
                    alt="arrow"
                  />
                </label>
              </div>
            </li>
            <li>
              <span className="filter-icon">
                <img
                  src="https://i.ibb.co/M6hfRxk/Shape.png"
                  alt="filter icon"
                />
              </span>
            </li>
          </ul>
        </div>
      </FilterContainer>
    </div>
  );
};

export default Cards;
