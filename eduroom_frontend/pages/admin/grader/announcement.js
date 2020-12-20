import React, { Fragment } from "react";
import GeneralNoNav from "../../../components/graderCreate/GraderCreateLayout/Sidebar";
import GNav from "../../../components/graderCreate/GraderCreateLayout/Nav";
import ProtectedAdminRoute from "../../../components/admin/protectedAdminRoute";
import Ann from "../../../components/graderCreate/Announcement/Announcement";
const Announcement = () => {
  return (
    <ProtectedAdminRoute>
      <GeneralNoNav>
        <GNav></GNav>
        <Ann />
      </GeneralNoNav>
    </ProtectedAdminRoute>
  );
};
export default Announcement;
