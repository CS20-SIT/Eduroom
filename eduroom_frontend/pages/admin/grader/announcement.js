import React, { Fragment } from "react";
import GeneralNoNav from "../../../components/graderCreate/Layout/gSide";
import GNav from "../../../components/graderCreate/Layout/gNav";

import Ann from "../../../components/graderCreate/AnnCom/Ann";
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
