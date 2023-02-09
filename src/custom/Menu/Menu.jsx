import React from "react";
import "./Menu.css";
function Menu({ children }) {
  return (
    <>
      <input type="checkbox" class="toggler" />
      <div class="hamburger">
        <div></div>
      </div>
      <div class="menu">{children}</div>
    </>
  );
}

export default Menu;
