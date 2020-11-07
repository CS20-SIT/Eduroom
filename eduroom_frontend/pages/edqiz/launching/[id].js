import Edqiz from "../../../components/edqiz/edqizLunching";
import React, { Fragment, useState } from "react";
import GeneralNoSide from "../../../components/template/generalnoside";

const Content = () => {
  return (
    <Fragment>
      <GeneralNoSide>
        <Edqiz />
      </GeneralNoSide>
    </Fragment>
  );
};
export default Content;
