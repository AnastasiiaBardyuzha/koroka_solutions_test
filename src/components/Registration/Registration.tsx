import React, { FC, useState } from 'react';

import './Registration.scss';

export const Registration: FC = () => {
  const [focusedUserName, setFocusedUserName] = useState(false);
  const [focusedEmail, setFocusedEmail] = useState(false);
  const [focusedPhone, setFocusedPhone] = useState(false);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPhone, setUserPhone] = useState('');

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
      <form className="form">
        <div className="form__input-wrapper">
          <label htmlFor="user" className={`form__label ${focusedUserName ? 'form__label-focused' : ''}`}>
            Your name
          </label>
          <input
            id="user"
            type="text"
            className="form__input"
            name="userName"
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
            focused-input="focusedPhone"
            required
            onFocus={focusedInput}
            onChange={handleChange}
            onBlur={() => unFocused(userPhone, setFocusedPhone)}
          />
        </div>
        <button
          type="submit"
          className="form__button"
        >
          Submit
        </button>
      </form>
    </>
  );
};
