import React from "react";
import { useTranslation } from "react-i18next";
import { FilterContainer } from "./styles";

const Cards: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="container">
      <FilterContainer>
        <div className="title">{t("friendList")}</div>
        <div className="filter-wrap">
          <ul>
            <li>
              <span className="search">
                <img src="https://i.ibb.co/zRwwY4x/Vector.png" alt="search" />
              </span>
            </li>
            <li>
              <div className="filter">
                <span className="sort-by">{t("sortBy")}:</span>
                <select name="filter">
                  <option>{t("Newest")}</option>
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
