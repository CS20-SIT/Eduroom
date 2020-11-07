import Edqiz from "../../../components/edqiz/studentPlay";
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

export async function getServerSideProps(ctx) {
  try {
    const room = ctx.query.room;
    return { props: { room } };
  } catch (err) {
    return { props: { room: "" } };
  }
}
