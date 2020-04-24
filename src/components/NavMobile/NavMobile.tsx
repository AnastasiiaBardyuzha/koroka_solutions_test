import React, { FC } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './NavMobile.scss';
import { setSignInClicked, setToggledGamb } from '../../redux/actionCreators';
import { State } from '../../redux/store';

interface Props {
  isLogged: boolean;
  toggledGamb: boolean;
  changeToggledGamb: (status: boolean) => void;
  changeSignInClicked: (status: boolean) => void;
}

export const NavMobileTemplate: FC<Props> = ({
  isLogged,
  toggledGamb,
  changeToggledGamb,
  changeSignInClicked,
}) => (
  <nav className={`navMobile_none ${toggledGamb ? 'navMobile' : ''}`}>
    <ul className="navMobile__list">
      <li className="navMobile__item">
        <NavLink
          to="/"
          exact
          className="navMobile__link"
          onClick={() => changeToggledGamb(false)}
        >
          Free Test
        </NavLink>
      </li>
      <li className="navMobile__item">
        <NavLink
          to="/catalog"
          className="navMobile__link"
          onClick={() => changeToggledGamb(false)}
        >
          Catalog
        </NavLink>
      </li>
      <li className="navMobile__item">
        <NavLink
          to="/help"
          className="navMobile__link"
          onClick={() => changeToggledGamb(false)}
        >
          Help
        </NavLink>
      </li>
    </ul>
    {isLogged
      ? (
        <Link
          to="/profile"
          className="navMobile__islogged nav-part__islogged"
          onClick={() => changeToggledGamb(false)}
        >
          <div className="navMobile__islogged nav-part__islogged">
            <span>Michael Browk</span>
            <div className="header__user-avatar">
              <img src="images/header/lion.png" alt="Avatar" className="header__avatar-img" />
            </div>
          </div>
        </Link>
      )
      : (
        <Link
          to="/registration"
          className="navMobile__sign-in nav-part__sign-in"
          onClick={() => changeSignInClicked(true)}
        >
          Sign In
        </Link>
      )}
  </nav>
);

const mapStateToProps = (state: State) => ({
  isLogged: state.isLogged,
  toggledGamb: state.toggledGamb,
});

const mapDispatchToProps = {
  changeSignInClicked: setSignInClicked,
  changeToggledGamb: setToggledGamb,
};

export const NavMobile = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavMobileTemplate);
