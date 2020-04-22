import {
  createStore,
  AnyAction,
} from 'redux';

import {
  SET_IS_LOGGED,
  SET_SIGN_IN_CLICKED,
} from './constants';

export interface State {
  isLogged: boolean;
  signInClicked: boolean;
}

const initialState = {
  isLogged: false,
  signInClicked: true,
};

export const reduser = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case SET_IS_LOGGED:
      return {
        ...state,
        isLogged: action.isLogged,
      };

    case SET_SIGN_IN_CLICKED:
      return {
        ...state,
        signInClicked: action.signInClicked,
      };

    default:
      return state;
  }
};

export const store = createStore(reduser);
