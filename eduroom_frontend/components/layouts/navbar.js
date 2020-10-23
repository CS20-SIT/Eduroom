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
            <span className="navHeader">eduroom</span>
            <div className="navItemLayout">
              <div className="navItem">
                <Link href="/exam">Exam</Link>
              </div>
              <div className="navItem">
                <Link href="/course">Course</Link>
              </div>
              <div className="navItem">
                <Link href="/forum">Forum</Link>
              </div>
              <div className="navItem">
                <Link href="/">Home</Link>
              </div>
              <div className="navAction">
                <button
                  className="navLogin"
                  onClick={() => router.push('/login')}
                >
                  <a className="navLoginText">Login</a>
                </button>
              </div>
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
