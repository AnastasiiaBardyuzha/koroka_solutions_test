import React, { FC } from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { connect } from 'react-redux';

import { Header } from '../Header/Header';
import { FreeTest } from '../FreeTest/FreeTest';
import { Catalog } from '../Catalog/Catalog';
import { Help } from '../Help/Help';
import { Profile } from '../Profile/Profile';
import { SignInForm } from '../SignInForm/SignInForm';
import { State } from '../../redux/store';

interface Props {
  signInClicked: boolean;
}


export const LogoSiteTemplate: FC<Props> = ({ signInClicked }) => (
  <Router>
    <Header />
    {signInClicked && <SignInForm />}
    <main className="main">
      <Switch>
        <Route path="/" exact component={FreeTest} />
        <Route path="/catalog" exact component={Catalog} />
        <Route path="/help" exact component={Help} />
        <Route path="/profile" exact component={Profile} />
      </Switch>
    </main>
  </Router>
);


const mapStateToProps = (state: State) => ({
  signInClicked: state.signInClicked,
});

export const LogoSite = connect(
  mapStateToProps,
)(LogoSiteTemplate);
