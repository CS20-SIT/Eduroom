import React, { Fragment } from "react";
import GeneralNoNav from "../../../../components/graderCreate/GraderCreateLayout/Sidebar";
import GNav from "../../../../components/graderCreate/GraderCreateLayout/Nav";
import Gback from "../../../../components/graderCreate/GraderCreateLayout/Background";
import Create from "../../../../components/graderCreate/Contest/Create/CreateForm";
const ConCreate = () => {
  return (
    <Fragment>
      <GeneralNoNav>
        <GNav> </GNav>
        <Gback></Gback>
        <Create />
      </GeneralNoNav>
    </Fragment>
  );
};
export default ConCreate;
