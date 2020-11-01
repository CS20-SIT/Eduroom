import React, { Fragment } from "react";
import GeneralNoNav from '../../../../components/template/generalnonav';
import GNav from "../../../../components/graderCreate/Layout/gNav"
import ConBig from "../../../../components/graderCreate/Contest/ConList/ConBig";

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
