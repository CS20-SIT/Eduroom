import React, { Fragment } from "react";
import GeneralNoNav from "../../../../components/template/generalnonav";
import GNav from "../../../../components/graderCreate/Layout/gNav";

import Create from "../../../../components/graderCreate/Question/QCreate";

import AddFile from "../../../../components/graderCreate/Question/addfile";
const ConCreate = () => {
  return (
    <Fragment>
      <GeneralNoNav>
        <GNav></GNav>
        <Create />
        <AddFile />
      </GeneralNoNav>
    </Fragment>
  );
};
export default ConCreate;
