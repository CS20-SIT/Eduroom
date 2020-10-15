import React, { Fragment } from 'react';
import Link from 'next/link';
import { AppBar, Toolbar, Button } from '@material-ui/core';
const Navbar = () => {
    const NavItemStyle = {
        color: '#5B5B5B',
        fontWeight: '500',
        fontFamily: "'Quicksand', sans-serif",
    };
    const HeaderStyle = {
        color: '#3D467F',
        fontSize: '2em',
        fontWeight: 'bold',
        fontFamily: "'Quicksand', sans-serif",
    };
    return (
        <Fragment>
            <AppBar
                position="sticky"
                style={{ background: '#FFFFFFAA' }}
                elevation={0}
            >
                <Toolbar style={{ padding: '1% 4% 0% 4%' }}>
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            width: '100%',
                        }}
                    >
                        <span style={HeaderStyle}>eduroom</span>
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
                                <button className="navLogin">
                                    <span className="navLoginText">Login</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </Toolbar>
            </AppBar>
            <style jsx>
                {`
                    .navHeader {
                        color: #3d467f;
                        font-size: 2em;
                        font-weight: bold;
                        font-family: 'Quicksand', sans-serif;
                    }
                    .navItemLayout {
                        width: 35vw;
                        display: flex;
                        justify-content: space-around;
                        align-items: center;
                    }
                    .navItem {
                        color: #5b5b5b;
                        font-weight: 500;
                        font-size: 1.2em;
                        font-family: 'Quicksand', sans-serif;
                    }
                    .navLogin {
                        background: #fe75b7;
                        border-radius: 25px;
                        padding: 0.5rem 1.5rem;
                        border: none;
                        transition: 0.25s;
                    }
                    .navLogin:hover {
                        cursor: pointer;
                        opacity: 0.8;
                        transition: 0.25s;
                    }
                    .navLoginText {
                        color: white;
                        font-weight: 700;
                        font-size: 1.2em;
                        font-family: 'Quicksand', sans-serif;
                    }
                `}
            </style>
        </Fragment>
    );
};
export default Navbar;
