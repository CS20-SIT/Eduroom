import "../styles/globals.css";
import "../styles/all.css";
import { Fragment } from "react";
import UserState from "../contexts/user/userState";
import NavState from "../contexts/landing/navState";
import Container from "../components/container";

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
      <NavState>
        <UserState>
          <Container>
            <Component {...pageProps} />
          </Container>
        </UserState>
      </NavState>
    </Fragment>
  );
};

export default MyApp;
