import React from 'react';

function Header(props) {
    const logo = (
        <img src= {require("../images/sticky-note.png")} alt="logo" class="logo" />
      );
      return (
        <div className="header">
          {logo}
          <h1 className="logoName"> Notes </h1>
        </div>
      );
}

export default Header;