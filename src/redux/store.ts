import {
  createStore,
  AnyAction,
} from 'redux';

import {
  SET_IS_LOGGED,
  SET_SIGN_IN_CLICKED,
  SET_TOGGLED_GAMB,
} from './constants';

export interface State {
  isLogged: boolean;
  signInClicked: boolean;
  toggledGamb: boolean;
}

const initialState = {
  isLogged: false,
  signInClicked: false,
  toggledGamb: false,
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

    case SET_TOGGLED_GAMB:
      return {
        ...state,
        toggledGamb: action.toggledGamb,
      };

    default:
      return state;
  }
};

export const store = createStore(reduser);
