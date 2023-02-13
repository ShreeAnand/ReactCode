import React from "react";

const NavBar = ({ filterItems, menuList }) => {
  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          {menuList.map((curElement) => {
            return (
              <button
                className="btn-group__item"
                onClick={() => filterItems(curElement)}
              >
            {curElement}
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default NavBar;
