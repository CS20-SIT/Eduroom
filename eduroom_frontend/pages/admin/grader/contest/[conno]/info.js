import React, { Fragment } from "react";
import GeneralNoNav from "../../../../../components/graderCreate/Layout/gSide";
import GNav from "../../../../../components/graderCreate/Layout/gNav";

import ConEdit from "../../../../../components/graderCreate/Contest/ConCreate/ConForm";

const Info = () => {
  return (
    <Fragment>
      <GeneralNoNav>
        <GNav> </GNav>
        <ConEdit />
      </GeneralNoNav>
    </Fragment>
  );
};

export default Info;
