import "../styles/globals.css";
import "../styles/all.css";
import React, { Fragment } from "react";
import UserState from "../contexts/user/userState";

const MyApp = ({ Component, pageProps }) => {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return (
    <Fragment>
      <UserState>
        <Component {...pageProps} />
      </UserState>
    </Fragment>
  );
};

export default MyApp;
