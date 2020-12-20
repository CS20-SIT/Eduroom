import React, { Fragment } from "react";
import GeneralNoNav from "../../../../components/graderCreate/GraderCreateLayout/Sidebar";
import GNav from "../../../../components/graderCreate/GraderCreateLayout/Nav";
import ConBig from "../../../../components/graderCreate/Contest/List/Contests";
import ProtectedAdminRoute from "../../../../components/admin/protectedAdminRoute";
const Contest = () => {
  return (
    <ProtectedAdminRoute>
      <GeneralNoNav>
        <GNav></GNav>
        <ConBig />
      </GeneralNoNav>
    </ProtectedAdminRoute>
  );
};
export default Contest;
