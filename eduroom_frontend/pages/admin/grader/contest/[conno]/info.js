import React, { Fragment } from "react";
import GeneralNoNav from "../../../../../components/graderCreate/GraderCreateLayout/Sidebar";
import GNav from "../../../../../components/graderCreate/GraderCreateLayout/Nav";
import Gback from "../../../../../components/graderCreate/GraderCreateLayout/Background";
import ConEdit from "../../../../../components/graderCreate/Contest/Create/CreateForm";

const Info = () => {
  return (
    <Fragment>
      <GeneralNoNav>
        <GNav> </GNav>
        <ConEdit />
        <Gback></Gback>
      </GeneralNoNav>
    </Fragment>
  );
};

export default Info;
