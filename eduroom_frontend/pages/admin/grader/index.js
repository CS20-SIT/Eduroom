import React, { Fragment } from "react";
import ProtectedAdminRoute from "../../../components/admin/protectedAdminRoute";
import GeneralNoNav from "../../../components/graderCreate/GraderCreateLayout/Sidebar";
import GNav from "../../../components/graderCreate/GraderCreateLayout/Nav";
import Landing from "../../../components/graderCreate/GraderCreateLanding/Landing";
const LandPage = () => {
  return (
    <ProtectedAdminRoute>
      <GeneralNoNav>
        {" "}
        <GNav></GNav>
        <Landing />
      </GeneralNoNav>
      {/* <GeneralTemplate>
       <Landing />
      </GeneralTemplate> */}
    </ProtectedAdminRoute>
  );
};
export default LandPage;
