import React, { Fragment } from "react";
import GeneralNoNav from "../../../../../components/graderCreate/GraderCreateLayout/Sidebar";
import GNav from "../../../../../components/graderCreate/GraderCreateLayout/Nav";

import ConQuestionEdit from "../../../../../components/graderCreate/Question/List/List";

const Info = () => {
  return (
    <Fragment>
      <GeneralNoNav>
        <GNav> </GNav>
        <ConQuestionEdit />
      </GeneralNoNav>
    </Fragment>
  );
};

export default Info;
