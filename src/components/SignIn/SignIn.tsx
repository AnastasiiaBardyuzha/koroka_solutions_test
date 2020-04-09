import React, { FC, useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { setSignInClicked, setIsLogged } from '../../redux/actionCreators';
import './SignIn.scss';
import '../Form.scss';

interface Props {
  changeSignInClicked: (status: boolean) => void;
  changeIsLogged: (status: boolean) => void;
}

export const SignInTemplate: FC<Props> = ({
  changeSignInClicked,
  changeIsLogged,
}) => {
  const [focusedUserName, setFocusedUserName] = useState(false);
  const [focusedEmail, setFocusedEmail] = useState(false);
  const [actual, setActual] = useState(true);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const { name } = event.target;

    setActual(true);

    switch (name) {
      case 'userName':
        setUserName(value.replace(/^\s/, ''));
        break;

      case 'userEmail':
        setUserEmail(value.replace(/^\s/, ''));
        break;

      default:
        break;
    }
  };

  const focusedInput = (event: React.FocusEvent<HTMLInputElement>) => {
    const focused = event.target.getAttribute('focused-input');

    switch (focused) {
      case 'focusedEmail':
        setFocusedEmail(true);
        break;

      case 'focusedUserName':
        setFocusedUserName(true);
        break;

      default:
        break;
    }
  };

  const unFocused = (name: string, setfunction: (status: boolean) => void) => {
    if (name.length > 0) {
      setfunction(true);
    } else {
      setfunction(false);
    }
  };

  const logged = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (userName === 'Michael Browk' && userEmail === 'michael@gmail.com') {
      changeSignInClicked(false);
      changeIsLogged(true);

      return <Redirect to="/" />;
    }

    setActual(false);

    return '';
  };

  return (
    <div className="form-wrapper form-wrapper_sign-in">
      <form className="form" onSubmit={logged}>
        <div className="form__input-wrapper">
          <label htmlFor="user" className={`form__label ${focusedUserName ? 'form__label-focused' : ''}`}>
            Your name
          </label>
          <input
            id="user"
            type="text"
            className="form__input"
            name="userName"
            value={userName}
            focused-input="focusedUserName"
            required
            onFocus={focusedInput}
            onChange={handleChange}
            onBlur={() => unFocused(userName, setFocusedUserName)}
          />
        </div>
        <div className="form__input-wrapper">
          <label htmlFor="email" className={`form__label ${focusedEmail ? 'form__label-focused' : ''}`}>
            E-mail
          </label>
          <input
            id="email"
            type="email"
            className="form__input"
            name="userEmail"
            value={userEmail}
            focused-input="focusedEmail"
            required
            onFocus={focusedInput}
            onChange={handleChange}
            onBlur={() => unFocused(userEmail, setFocusedEmail)}
          />
        </div>
        <span className={`hidden ${!actual ? 'unhidden' : ''}`}>We cannot find an account with that email or user</span>
        <button
          type="submit"
          className="form__button"
        >
          Sign in
        </button>
      </form>
    </div>
  );
};

const mapDispatchToProps = {
  changeSignInClicked: setSignInClicked,
  changeIsLogged: setIsLogged,
};

export const SignIn = connect(
  null,
  mapDispatchToProps,
)(SignInTemplate);
