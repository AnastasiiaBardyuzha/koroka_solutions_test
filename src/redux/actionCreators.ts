import {
  SET_IS_LOGGED,
  SET_SIGN_IN_CLICKED,
} from './constants';

export const setIsLogged = (status: boolean) => ({
  type: SET_IS_LOGGED,
  isLogged: status,
});

export const setSignInClicked = (status: boolean) => ({
  type: SET_SIGN_IN_CLICKED,
  signInClicked: status,
});
