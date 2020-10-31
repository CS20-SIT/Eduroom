import React, { Fragment } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { AppBar, Toolbar } from '@material-ui/core'
import style from '../../styles/layout/navbar'
const Navbar = () => {
  const router = useRouter()
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
              <button
                className="navLogin"
              >
                <span className="navLoginText">Sign In</span>
              </button>
              </Link>
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <style jsx>{style}</style>
    </Fragment>
  )
}
export default Navbar
