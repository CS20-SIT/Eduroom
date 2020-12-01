import React, { Fragment } from "react";

import GeneralNoNav from "../../../components/graderCreate/Layout/gSide";
import GNav from "../../../components/graderCreate/Layout/gNav";
import Landing from "../../../components/graderCreate/Landing/glanding";
const LandPage = () => {
  return (
    <Fragment>
      <GeneralNoNav>
        {" "}
        <GNav></GNav>
        <Landing />
      </GeneralNoNav>
      {/* <GeneralTemplate>
       <Landing />
      </GeneralTemplate> */}
    </Fragment>
  );
};
export default LandPage;
