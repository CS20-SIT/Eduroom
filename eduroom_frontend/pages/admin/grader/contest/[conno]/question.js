import React, { Fragment } from "react";
import GeneralNoNav from "../../../../../components/graderCreate/GraderCreateLayout/Sidebar";
import GNav from "../../../../../components/graderCreate/GraderCreateLayout/Nav";

import ConQuestionEdit from "../../../../../components/graderCreate/Question/List/List";
import ProtectedAdminRoute from "../../../../../components/admin/protectedAdminRoute";
const Info = () => {
  return (
    <ProtectedAdminRoute>
      <GeneralNoNav>
        <GNav> </GNav>
        <ConQuestionEdit />
      </GeneralNoNav>
    </ProtectedAdminRoute>
  );
};

export default Info;
