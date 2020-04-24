import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

import { setIsLogged } from '../../redux/actionCreators';
import './Profile.scss';

interface Props {
  changeIsLogged: (status: boolean) => void;
}

export const ProfileTemplate: FC<Props> = ({ changeIsLogged }) => {
  const history = useHistory();

  const isLoggedOut = () => {
    history.push('/');
    changeIsLogged(false);
  };

  return (
    <div className="profile">
      <h3 className="profile__title">Profile</h3>
      <button
        className="profile__button"
        type="button"
        onClick={isLoggedOut}
      >
        Sign Out
      </button>
    </div>
  );
};

const mapDispatchToProps = {
  changeIsLogged: setIsLogged,
};

export const Profile = connect(
  null,
  mapDispatchToProps,
)(ProfileTemplate);
