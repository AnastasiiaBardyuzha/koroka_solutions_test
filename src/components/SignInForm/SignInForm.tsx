import React, { FC } from 'react';
import {
  HashRouter as Router,
  Link,
  Switch,
  Route,
} from 'react-router-dom';

import { Registration } from '../Registration/Registration';
import { SignIn } from '../SignIn/SignIn';
import './SignInForm.scss';

export const SignInForm: FC = () => (
  <div className="sign-in-form">
    <h3 className="sign-in-form__title">
      Profile
    </h3>
    <Router>
      <ul className="sign-in-form__list">
        <li className="sign-in-form__item">
          <Link to="/registration" className="sign-in-form__link">
              Registration
          </Link>
        </li>
        <li className="sign-in-form__item">
          <Link to="/sign-in" className="sign-in-form__link">
              Sign in
          </Link>
        </li>
      </ul>
      <Switch>
        <Route path="/registration" exact component={Registration} />
        <Route path="/sign-in" exact component={SignIn} />
      </Switch>
      <Link to="/sign-in" className="sign-in-form__sign-in">
              Sign in
      </Link>
    </Router>
  </div>
);
