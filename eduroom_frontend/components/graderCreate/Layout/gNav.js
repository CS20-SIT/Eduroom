import React, { Fragment } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { AppBar, Toolbar } from "@material-ui/core";

import style from "../../../styles/graderCreate/gnav";

const Navbar = () => {
  const router = useRouter();
  return (
    <Fragment>
      <AppBar
        position="sticky"
        style={{ background: "#F4F5F7AA" }}
        elevation={0}
      >
        <Toolbar>
          <div className="navStyle">
            <div className="navItem">
              <Link href="/admin/grader/">Home</Link>
            </div>
            <div className="navItem">
              <Link href="/admin/grader/adminlog">Admin Log</Link>
            </div>
            <div className="navItem">
              <Link href="/admin/grader/announcement">Announcement</Link>
            </div>
            <div className="navItem">
              <Link href="/admin/grader/contest">Contest</Link>
            </div>

            <div className="navItem">
              <Link href="/admin/grader/question">Question</Link>
            </div>
            <div className="navAction">
              <Link href="/register">
                <button className="navLogin">
                  <span className="navLoginText">Nutty</span>
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
