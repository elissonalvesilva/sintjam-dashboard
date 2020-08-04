import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { NameNavbarContext } from '../contexts/navbar-context';
import { ToggleContext } from '../contexts/toggle-context';

import sidebarModules from '../config/sidebar-modules';
import menuIcon from '../images/menu-icon.png'

function Sidebar() {
  const { nameValue } = useContext(NameNavbarContext);
  const { toggleValue } = useContext(ToggleContext);

  // eslint-disable-next-line no-unused-vars
  const [nameNavbar, setNameNavbar] = nameValue;

  const [toggle, setToggle] = toggleValue;

  return (
    <div className="sidebar">
      <div className="sidebar-toggle">
        <button
          type="button"
          className="toogle-menu"
          onClick={() => setToggle(!toggle)}
        >
          <img src={menuIcon} alt='icon toggle' />
        </button>
      </div>

      <ul className="sidebar-menu">
        {
          sidebarModules.modules.map((module) => (
            <li className="menu-item" key={module.name}>
              <NavLink
                exact={module.exact}
                to={module.link}
                className="item-link"
                activeClassName="active"
                onClick={() => setNameNavbar(module.name)}>

                <i className={`item-icon ${module.icon}`}/>
                <span className="item-text">{module.name}</span>
              </NavLink>
            </li>
          ))
        }
      </ul>

    </div>
  );
}

export default Sidebar;
