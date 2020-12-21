import React, { Fragment } from "react";
import GeneralNoNav from "../../../../components/graderCreate/GraderCreateLayout/Sidebar";
import GNav from "../../../../components/graderCreate/GraderCreateLayout/Nav";
import ProtectedAdminRoute from "../../../../components/admin/protectedAdminRoute";
import QList from "../../../../components/graderCreate/Question/List/List";

const Question = () => {
  return (
    <ProtectedAdminRoute>
      <GeneralNoNav>
        <GNav></GNav>
        <QList />
      </GeneralNoNav>
    </ProtectedAdminRoute>
  );
};
export default Question;
