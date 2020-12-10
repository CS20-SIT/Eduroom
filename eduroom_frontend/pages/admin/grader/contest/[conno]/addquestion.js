import React, { Fragment } from "react";
import GeneralNoNav from "../../../../../components/graderCreate/GraderCreateLayout/Sidebar";
import GNav from "../../../../../components/graderCreate/GraderCreateLayout/Nav";
import Create from "../../../../../components/graderCreate/Question/Create";

const ConCreate = () => {
  return (
    <Fragment>
      <GeneralNoNav>
        <GNav></GNav>

        <Create />
      </GeneralNoNav>
    </Fragment>
  );
};
export default ConCreate;
