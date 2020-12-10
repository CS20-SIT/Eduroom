import React, { Fragment } from "react";

import GeneralNoNav from "../../../components/graderCreate/GraderCreateLayout/Sidebar";
import GNav from "../../../components/graderCreate/GraderCreateLayout/Nav";
import Landing from "../../../components/graderCreate/GraderCreateLanding/Landing";
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
