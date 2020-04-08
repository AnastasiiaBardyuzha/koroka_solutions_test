import React, { FC } from 'react';
import {
  HashRouter as Router,
} from 'react-router-dom';
import { connect } from 'react-redux';

import { Header } from '../Header/Header';
import { SignInForm } from '../SignInForm/SignInForm';
import { State } from '../../redux/store';

interface Props {
  signInClicked: boolean;
}

export const LogoSiteTemplate: FC<Props> = ({ signInClicked }) => {
  if (signInClicked) {
    return (
      <SignInForm />
    );
  }

  return (
    <Router>
      <Header />
    </Router>
  );
};

const mapStateToProps = (state: State) => ({
  signInClicked: state.signInClicked,
});

export const LogoSite = connect(
  mapStateToProps,
)(LogoSiteTemplate);
