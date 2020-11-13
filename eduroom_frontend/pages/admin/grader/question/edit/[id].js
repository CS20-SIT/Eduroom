import React, { Fragment } from "react";
import GeneralNoNav from "../../../../../components/template/generalnonav";
import GNav from "../../../../../components/graderCreate/Layout/gNav";

import QEdit from "../../../../../components/graderCreate/Question/QEditInfo";

const EditQuestion = () => {
  return (
    <Fragment>
      <GeneralNoNav>
        <GNav></GNav>

        <QEdit />
      </GeneralNoNav>
    </Fragment>
  );
};
export default EditQuestion;
