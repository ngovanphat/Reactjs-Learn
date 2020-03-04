import React from 'react';

function Header() {
    return ( 
    <nav className="nav navbar-inverse bg-danger p-1 mb-2">
      <a className="ml-3 navbar-brand active" >Title</a>
      <a className="nav-link">About Me</a>
      <a className="nav-link disabled" >Nothing Here</a>
    </nav>
    );
}

export default Header;