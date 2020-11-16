import React, { Fragment } from "react";
import GeneralNoNav from "../../../components/graderCreate/Layout/gSide";
import GNav from "../../../components/graderCreate/Layout/gNav";

import Log from "../../../components/graderCreate/AdminLog/Log";
const AdminLog = () => {
  return (
    <Fragment>
      <GeneralNoNav>
        <GNav></GNav>
        <Log />
      </GeneralNoNav>
    </Fragment>
  );
};
export default AdminLog;
