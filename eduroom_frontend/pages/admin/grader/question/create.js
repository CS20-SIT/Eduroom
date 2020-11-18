import React, { Fragment } from "react";
import GeneralNoNav from "../../../../components/graderCreate/Layout/gSide";

import GNav from "../../../../components/graderCreate/Layout/gNav";

import Create from "../../../../components/graderCreate/Question/QCreate";

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
