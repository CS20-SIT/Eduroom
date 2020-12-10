import React, { Fragment } from "react";
import GeneralNoNav from "../../../../components/graderCreate/GraderCreateLayout/Sidebar";
import GNav from "../../../../components/graderCreate/GraderCreateLayout/Nav";
import ConBig from "../../../../components/graderCreate/Contest/List/Contests";

const Contest = () => {
  return (
    <Fragment>
      <GeneralNoNav>
        <GNav></GNav>
        <ConBig />
      </GeneralNoNav>
    </Fragment>
  );
};
export default Contest;
