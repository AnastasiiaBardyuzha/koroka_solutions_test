import React, { FC } from 'react';
import {
  NavLink,

} from 'react-router-dom';


import './Nav.scss';


export const Nav: FC = () => (
  <nav className="nav">
    <ul className="nav__list">
      <li className="nav__item">
        <NavLink to="/" exact className="nav__link">
            Free test
        </NavLink>
      </li>
      <li className="nav__item">
        <NavLink to="/catalog" className="nav__link">
            Catalog
        </NavLink>
      </li>
      <li className="nav__item">
        <NavLink to="/help" className="nav__link">
            Help
        </NavLink>
      </li>
    </ul>
  </nav>
);
