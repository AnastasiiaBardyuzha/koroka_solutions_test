import React, { FC, useEffect } from 'react';
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
import { setIsLogged } from '../../redux/actionCreators';

interface Props {
  signInClicked: boolean;
  isLogged: boolean;
  changeIsLogged: (status: boolean) => void;
}

export const LogoSiteTemplate: FC<Props> = ({
  signInClicked,
  isLogged,
  changeIsLogged,
}) => {
  useEffect(() => {
    const data = localStorage.getItem('isLogged');

    if (data) {
      changeIsLogged(JSON.parse(data));
    }
  }, [changeIsLogged]);

  useEffect(() => {
    localStorage.setItem('isLogged', JSON.stringify(isLogged));
  });

  return (
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
};

const mapDispatchToProps = {
  changeIsLogged: setIsLogged,
};

const mapStateToProps = (state: State) => ({
  signInClicked: state.signInClicked,
  isLogged: state.isLogged,
});

export const LogoSite = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LogoSiteTemplate);
