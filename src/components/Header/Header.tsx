import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './Header.scss';
import { setSignInClicked } from '../../redux/actionCreators';
import { State } from '../../redux/store';
import { Nav } from '../Nav/Nav';

interface Props {
  isLogged: boolean;
  changeSignInClicked: (status: boolean) => void;
}

export const HeaderTemplate: FC<Props> = ({ isLogged, changeSignInClicked }) => {
  return (
    <header className="header">
      <Link to="/">
        <div className="header__logo">
          <img src="images/header/logo.png" alt="Logo" className="header__logo-img" />
        </div>
      </Link>
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
            <button type="button" className="nav-part__sign-in" onClick={() => changeSignInClicked(true)}>
              Sign In
            </button>
          )}
      </div>
    </header>
  );
};

const mapStateToProps = (state: State) => ({
  isLogged: state.isLogged,
});
const mapDispatchToProps = {
  changeSignInClicked: setSignInClicked,
};

export const Header = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HeaderTemplate);
