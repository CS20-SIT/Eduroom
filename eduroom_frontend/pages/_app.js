import '../styles/globals.css';
import '../styles/all.css';
import React, { Fragment } from 'react';
import UserState from '../contexts/user/userState';
const MyApp = ({ Component, pageProps }) => {
  return (
    <Fragment>
      <UserState>
        <Component {...pageProps} />
      </UserState>
    </Fragment>
  );
};

export default MyApp;
