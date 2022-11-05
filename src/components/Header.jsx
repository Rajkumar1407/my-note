import React from 'react';

function Header(props) {
    const logo = (
        <img src= {require("../images/notes.png")} alt="logo" class="logo" />
      );
      return (
        <div className="header">
          {logo}
          <h1 className="logoName">  </h1>
        </div>
      );
}

export default Header;