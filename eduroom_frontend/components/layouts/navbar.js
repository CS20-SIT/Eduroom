import React, { Fragment, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { AppBar, Toolbar } from '@material-ui/core';
import style from '../../styles/layout/navbar';
import UserContext from '../../contexts/user/userContext';
const Navbar = () => {
  const userContext = useContext(UserContext);
  const { getUser } = userContext;
  const newUser = userContext.user;
  const router = useRouter();
  useEffect(() => {
    getUser();
  }, []);
  useEffect(() => {
    console.log('inside nav');
    console.log(newUser);
  }, [newUser]);
  
  return (
    <Fragment>
      <AppBar
        position="sticky"
        style={{ background: '#F4F5F7AA' }}
        elevation={0}
      >
        <Toolbar>
          <div className="navStyle">
            <div className="navItem">
              <i className="fas fa-shopping-cart" />
            </div>
            <div className="navItem">
              <Link href="/login">Login</Link>
            </div>
            <div className="navAction">
              <Link href="/register">
                <button className="navLogin">
                  <span className="navLoginText">Sign Up</span>
                </button>
              </Link>
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <style jsx>{style}</style>
    </Fragment>
  );
};
export default Navbar;
