import React, { FC } from 'react';

import { Provider } from 'react-redux';

import { store } from './redux/store';
import { LogoSite } from './components/LogoSite/LogoSite';
import './App.scss';

export const App: FC = () => (
  <div className="wrapper">
    <Provider store={store}>
      <LogoSite />
    </Provider>
  </div>
);
