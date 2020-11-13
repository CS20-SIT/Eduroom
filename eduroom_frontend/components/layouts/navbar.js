import React, { Fragment, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { AppBar, Toolbar } from '@material-ui/core';
import style from '../../styles/layout/navbar';
import UserContext from '../../contexts/user/userContext';
import Image from 'next/image';

const Navbar = () => {
  const userContext = useContext(UserContext);
  const { getUser } = userContext;
  const user = userContext.user;
  const router = useRouter();
  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <Fragment>
      <AppBar
        position="sticky"
        style={{ background: 'transparent' }}
        elevation={0}
      >
        <Toolbar>
          <div className="navStyle">
            {user ? (
              <div className="navItem">
                <i className="fas fa-heart"></i>
              </div>
            ) : null}
            <div className="navItem">
              <i className="fas fa-shopping-cart" />
            </div>
            {user ? (
              <Fragment>
                <div className="navItem">
                  <span style={{ color: '#3d467f' }}>{user.firstname}</span>
                </div>
                <div className="navItem">
                  <Image
                    src="/images/nav/avatar.svg"
                    width="50"
                    height="50"
                    alt="avatar"
                  ></Image>
                </div>
              </Fragment>
            ) : (
              <Fragment>
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
              </Fragment>
            )}
          </div>
        </Toolbar>
      </AppBar>
      <style jsx>{style}</style>
    </Fragment>
  );
};
export default Navbar;
