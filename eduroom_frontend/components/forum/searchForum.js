import React, { Fragment } from "react";
import { useRouter } from "next/router";
import { AppBar, Toolbar, TextField } from "@material-ui/core";
import style from "../../styles/layout/navbar";

const navForum = () => {
  const router = useRouter();
  return (
    <Fragment>
      <AppBar position="sticky" style={{ background: "#EFF0F6" }} elevation={0}>
        <Toolbar>
          <div className="navforumStyle">
            <div>
              <input type="text" className="searchBox" placeholder="Search" />
            </div>
            <div className='buttonAdd'>
              <div className="navAction">
                <button
                  className="navLogin"
                  onClick={() => router.push("/forum/create")}
                >
                  <a className="navLoginText">+ ADD FORUM</a>
                </button>
              </div>
            </div>

            <div className="navItem">
              <p>user</p>
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <style jsx>{style}</style>
      <style jsx>{`
        .searchbox {
          width: 100px;
          height: 100%;
        }
      `}</style>
    </Fragment>
  );
};
export default navForum;
