import React, { Fragment } from "react";
import GeneralNoNav from "../../../../components/graderCreate/GraderCreateLayout/Sidebar";
import GNav from "../../../../components/graderCreate/GraderCreateLayout/Nav";

import QList from "../../../../components/graderCreate/Question/List/List";

const Question = () => {
  return (
    <Fragment>
      <GeneralNoNav>
        <GNav></GNav>
        <QList />
      </GeneralNoNav>
    </Fragment>
  );
};
export default Question;
