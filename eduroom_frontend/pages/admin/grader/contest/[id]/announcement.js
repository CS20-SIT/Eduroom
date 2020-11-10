import React, { Fragment } from "react";
import GeneralNoNav from '../../../../../components/template/generalnonav';
import GNav from "../../../../../components/graderCreate/Layout/gNav"

import Ann from "../../../../../components/graderCreate/Contest/ConAnn/ConAnn";
const Announcement = () => {
  return (
    <Fragment>
      <GeneralNoNav>
        <GNav> </GNav>
        <Ann />
      </GeneralNoNav>
    </Fragment>
  );
};
export default Announcement;
