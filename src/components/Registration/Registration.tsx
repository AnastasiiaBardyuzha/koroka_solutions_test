import React, { FC, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

import { setSignInClicked } from '../../redux/actionCreators';
import './Registration.scss';
import '../Form.scss';

interface Props {
  changeSignInClicked: (status: boolean) => void;
}

export const RegistrationTemplate: FC<Props> = ({ changeSignInClicked }) => {
  const [focusedUserName, setFocusedUserName] = useState(false);
  const [focusedEmail, setFocusedEmail] = useState(false);
  const [focusedPhone, setFocusedPhone] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const history = useHistory();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const { name } = event.target;

    switch (name) {
      case 'userName':
        setUserName(value.replace(/^\s/, ''));
        break;

      case 'userEmail':
        setUserEmail(value.replace(/^\s/, ''));
        break;

      case 'userPhone':
        setUserPhone(value.replace(/^\s/, ''));
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

      case 'focusedPhone':
        setFocusedPhone(true);
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

  const registrated = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (accepted) {
      history.push('/');
      changeSignInClicked(false);
    }
  };

  return (
    <>
      <div className="social">
        You can sign in with social
        <div className="social__icons">
          <a href="https://www.vk.com" target="blank" className="social__icon">
            <img src="images/icons/vk.png" alt="VK icon" />
          </a>
          <a href="https://www.facebook.com" target="blank" className="social__icon">
            <img src="images/icons/facebook.png" alt="Facebook icon" />
          </a>
          <a href="https://www.google.com" target="blank" className="social__icon">
            <img src="images/icons/google.png" alt="Google icon" />
          </a>
        </div>
      </div>
      <div className="form-wrapper">
        <form className="form" onSubmit={registrated}>
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
          <div className="form__input-wrapper">
            <label htmlFor="phone" className={`form__label ${focusedPhone ? 'form__label-focused' : ''}`}>
              Phone
            </label>
            <input
              id="phone"
              type="tel"
              className="form__input"
              name="userPhone"
              value={userPhone}
              focused-input="focusedPhone"
              required
              onFocus={focusedInput}
              onChange={handleChange}
              onBlur={() => unFocused(userPhone, setFocusedPhone)}
            />
          </div>
          <div className="form__accept">
            <input
              type="checkbox"
              id="accept"
              name="accept"
              value="Accept"
              checked={accepted}
              onChange={() => setAccepted(!accepted)}
              className="form__accept-input"
            />
            <label htmlFor="accept" className="form__accept-label">
              I accept the terms of the offer of
              <a
                href="https://www.google.com/policies/privacy/archive/20160325-20160628/"
                className="form__accept-link"
                target="blank"
              >
                {' the privacy policy'}
              </a>
            </label>
          </div>
          <button
            type="submit"
            className="form__button"
          >
            Registration
          </button>
        </form>
        <Link to="/sign-in" className="redirect-sign-in">
          Sign in
        </Link>
      </div>
    </>
  );
};

const mapDispatchToProps = {
  changeSignInClicked: setSignInClicked,
};

export const Registration = connect(
  null,
  mapDispatchToProps,
)(RegistrationTemplate);
