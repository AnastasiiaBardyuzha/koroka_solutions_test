import React, { FC, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './Header.scss';
import {
  setSignInClicked,
  setToggledGamb,
} from '../../redux/actionCreators';
import { State } from '../../redux/store';
import { Nav } from '../Nav/Nav';
import { NavMobile } from '../NavMobile/NavMobile';

interface Props {
  isLogged: boolean;
  toggledGamb: boolean;
  changeSignInClicked: (status: boolean) => void;
  changeToggledGamb: (status: boolean) => void;
}

export const HeaderTemplate: FC<Props> = ({
  isLogged,
  changeSignInClicked,
  changeToggledGamb,
  toggledGamb,
}) => {
  useEffect(() => window.addEventListener('resize', () => {
    changeToggledGamb(false);
  }));

  return (
    <header className="header">
      <Link to="/">
        <div className="header__logo">
          <img src="images/header/logo.png" alt="Logo" className="header__logo-img" />
        </div>
      </Link>
      <button
        type="button"
        className="header__gamb"
        onClick={() => changeToggledGamb(!toggledGamb)}
      >
        <div className={`nav-icon ${toggledGamb ? 'open' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
      <div className="nav-part">
        <Nav />
        {isLogged
          ? (
            <Link to="/profile" className="nav-part__islogged">
              <div className="nav-part__islogged">
                <span>Michael Browk</span>
                <div className="header__user-avatar">
                  <img src="images/header/lion.png" alt="Avatar" className="header__avatar-img" />
                </div>
              </div>
            </Link>
          )
          : (
            <Link to="/registration" className="nav-part__sign-in" onClick={() => changeSignInClicked(true)}>
              Sign In
            </Link>
          )}
      </div>
      <NavMobile />
    </header>
  );
};

const mapStateToProps = (state: State) => ({
  isLogged: state.isLogged,
  toggledGamb: state.toggledGamb,
});
const mapDispatchToProps = {
  changeSignInClicked: setSignInClicked,
  changeToggledGamb: setToggledGamb,
};

export const Header = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HeaderTemplate);
