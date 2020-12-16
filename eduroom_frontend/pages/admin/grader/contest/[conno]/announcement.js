import React, { Fragment } from "react";
import GeneralNoNav from "../../../../../components/graderCreate/GraderCreateLayout/Sidebar";
import GNav from "../../../../../components/graderCreate/GraderCreateLayout/Nav";
import AnnouncementPage from "../../../../../components/graderCreate/Announcement/Announcement";
const Announcement = () => {
  return (
    <Fragment>
      <GeneralNoNav>
        <GNav> </GNav>
        <AnnouncementPage />
      </GeneralNoNav>
    </Fragment>
  );
};
export default Announcement;
