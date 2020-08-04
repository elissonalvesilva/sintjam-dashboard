import React, { useContext } from 'react';
import { NameNavbarContext } from '../contexts/navbar-context';


function Navbar() {

  const { nameValue } = useContext(NameNavbarContext);
  const [nameNavbar] = nameValue;

  return (
    <nav className="navbar">
      <h1>{ nameNavbar }</h1>
    </nav>
  );
}

export default Navbar;
