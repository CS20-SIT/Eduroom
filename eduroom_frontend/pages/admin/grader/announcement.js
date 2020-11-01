import React, { Fragment } from "react";
<<<<<<< Updated upstream
import GeneralNoNav from '../../../components/template/generalnonav';
import GNav from "../../../components/graderCreate/Layout/gNav"

=======
import GeneralTemplate from "../../../components/template/general";
>>>>>>> Stashed changes
import Ann from "../../../components/graderCreate/Ann";
const Announcement = () => {
  return (
    <Fragment>
      <GeneralNoNav>
        <GNav></GNav>
        <Ann />
      </GeneralNoNav>
    </Fragment>
  );
};
export default Announcement;
