import React, {
  FC,
  useEffect,
  useRef,
  useCallback,
} from 'react';
import {
  HashRouter as Router,
  NavLink,
  Switch,
  Route,
  useHistory,
} from 'react-router-dom';
import { connect } from 'react-redux';

import { Registration } from '../Registration/Registration';
import { SignIn } from '../SignIn/SignIn';
import { setSignInClicked, setToggledGamb } from '../../redux/actionCreators';
import './SignInForm.scss';

interface Props {
  changeSignInClicked: (status: boolean) => void;
  changeToggledGamb: (status: boolean) => void;
}

export const SignInFormTemplate: FC<Props> = ({
  changeSignInClicked, changeToggledGamb,
}) => {
  const divEl = useRef<HTMLDivElement>(null);
  const history = useHistory();

  const handleClick = useCallback((e: Event) => {
    if (divEl.current && divEl.current.contains(e.target as Node)) {
      return '';
    }

    changeSignInClicked(false);
    changeToggledGamb(false);
    history.push('/');

    return '';
  }, [changeSignInClicked, history, changeToggledGamb]);

  useEffect(() => {
    document.addEventListener('mousedown', handleClick, false);

    return () => document.removeEventListener('mousedown', handleClick, false);
  }, [handleClick]);


  return (
    <div className="sign-in-form-wrapper">
      <div className="sign-in-form" ref={divEl}>
        <h3 className="sign-in-form__title">
          Profile
        </h3>
        <Router>
          <ul className="sign-in-form__list">
            <li className="sign-in-form__item">
              <NavLink to="/registration" className="sign-in-form__link">
                  Registration
              </NavLink>
            </li>
            <li className="sign-in-form__item">
              <NavLink to="/sign-in" className="sign-in-form__link">
                  Sign in
              </NavLink>
            </li>
          </ul>
          <Switch>
            <Route path="/registration" exact component={Registration} />
            <Route path="/sign-in" exact component={SignIn} />
          </Switch>
        </Router>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  changeSignInClicked: setSignInClicked,
  changeToggledGamb: setToggledGamb,
};

export const SignInForm = connect(
  null,
  mapDispatchToProps,
)(SignInFormTemplate);
