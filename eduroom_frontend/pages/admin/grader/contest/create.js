import React, { Fragment } from "react";
import GeneralNoNav from '../../../../components/template/generalnonav';
import GNav from "../../../../components/graderCreate/Layout/gNav"

import Create from "../../../../components/graderCreate/Contest/ConCreate/ConForm";
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
