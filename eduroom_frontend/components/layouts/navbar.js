import React, { Fragment } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { AppBar, Toolbar } from '@material-ui/core';
import style from '../../styles/layout/navbar'
const Navbar = () => {
  const router = useRouter();
  return (
    <Fragment>
      <AppBar
        position="sticky"
        style={{ background: '#FFFFFFAA' }}
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
                <button
                  className="navLogin"
                  onClick={() => router.push('/register')}
                >
                  <a className="navLoginText">Sign In</a>
                </button>
              </div>
          </div>
        </Toolbar>
      </AppBar>
      <style jsx>
        {style}
      </style>
    </Fragment>
  );
};
export default Navbar;
