import React, { Fragment, useEffect, useState } from "react";
import NavForum from "../../components/forum/searchForum";
import style from "../../styles/forum/showForum";
import CreateBlock from "../../components/forum/CreateBlock";
import GeneralNoNav from "../../components/template/generalnonav";
import { useRouter } from "next/router";
import BackButton from "../../components/forum/BackButton";

const create = () => {
  const router = useRouter();

  return (
    <Fragment>
      <GeneralNoNav>
        <div
          style={{
            display: "flex",
            flex: "1 1 auto",
            justifyContent: "space-between",
            background: "#EFF0F6",
          }}
        >
          <div id="nav">
            <NavForum />
            <div className="content">
              <strong className="topic">CREATE FORUM</strong>
            </div>
            <div className="backblock">
              <div className="backtoforum">
                <BackButton />
              </div>
            </div>
            <CreateBlock />
          </div>

          <style jsx>{style}</style>
          <style jsx>
            {`
              #nav {
                width: 100%;
              }
              .form {
                display: flex;
                text-align: center;
              }
              .sub {
                display: flex;
                width: 100%;
                justify-content: center;
              }
              .inner {
                width: 25%;
              }
              .paper {
                margin: 5%;
              }
              .backblock {
                padding: 0% 1% 0% 1%;
                margin: 0% 38% 0% 1%;
                width: auto;
              }
            `}
          </style>
        </div>
      </GeneralNoNav>
    </Fragment>
  );
};
export default create;
