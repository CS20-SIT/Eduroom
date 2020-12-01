import React, { Fragment } from "react";
import GeneralNoNav from "../../../../components/graderCreate/Layout/gSide";
import GNav from "../../../../components/graderCreate/Layout/gNav";

import Create from "../../../../components/graderCreate/Contest/ConCreate/ConForm";
const ConCreate = () => {
  return (
    <Fragment>
      <GeneralNoNav>
        <div style={{ backgroundColor: "#F4F5F7AA" }}>
          <GNav> </GNav>

          <Create />
        </div>
      </GeneralNoNav>
    </Fragment>
  );
};
export default ConCreate;
