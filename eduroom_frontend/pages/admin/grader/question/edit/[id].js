import React, { Fragment } from "react";
import GeneralNoNav from "../../../../../components/graderCreate/GraderCreateLayout/Sidebar";
import GNav from "../../../../../components/graderCreate/GraderCreateLayout/Nav";
import GBack from "../../../../../components/graderCreate/GraderCreateLayout/Background";
import QEdit from "../../../../../components/graderCreate/Question/Edit";
import ProtectedAdminRoute from "../../../../../components/admin/protectedAdminRoute";
const EditQuestion = () => {
  return (
    <ProtectedAdminRoute>
      <GeneralNoNav>
        <GNav></GNav>
        <QEdit />
        <GBack></GBack>
      </GeneralNoNav>
    </ProtectedAdminRoute>
  );
};
export default EditQuestion;
