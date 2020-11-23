import React, { Fragment } from "react";
import GeneralNoNav from "../../../../../components/graderCreate/Layout/gSide";
import GNav from "../../../../../components/graderCreate/Layout/gNav";

import ConQuestionEdit from "../../../../../components/graderCreate/Question/QList/QList";

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
