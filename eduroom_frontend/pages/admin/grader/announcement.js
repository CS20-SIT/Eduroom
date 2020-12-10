import React, { Fragment } from "react";
import GeneralNoNav from "../../../components/graderCreate/GraderCreateLayout/Sidebar";
import GNav from "../../../components/graderCreate/GraderCreateLayout/Nav";

import Ann from "../../../components/graderCreate/Announcement/Announcement";
const Announcement = () => {
  return (
    <Fragment>
      <GeneralNoNav>
        <GNav></GNav>
        <Ann />
      </GeneralNoNav>
    </Fragment>
  );
};
export default Announcement;
