import React from "react";

const TableFilters = () => {
  return (
    <div className="table-filters">
      <div className="table-filters-container">
        <div className="stable-checkbox-container">
          <input
            type="checstableCoinkbox"
            id="stableCoin"
            defaultChecked={true}
          />
          <label htmlFor="stableCoin ">Avec stable coin</label>
        </div>
        <div className="no-list-btn">
          <p>Aucune listes</p>
        </div>
        <div className="fav-list">
          <p>Liste des favoris</p>
          <img src="./assets/star-full.svg" alt="icone star" />
        </div>
      </div>
    </div>
  );
};

export default TableFilters;
