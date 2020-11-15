import React, { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/router";

import Create from "./QCreate";

const EditQuestion = (props) => {
  const router = useRouter();

  const id = router.query.id;

  return (
    <Fragment>
      <div>{props.id}</div>
      <Create id={id}></Create>
    </Fragment>
  );
};

export async function getServerSideProps(context) {
  try {
    const id = context.query.id;

    return { props: { id } };
  } catch (err) {
    return { props: { id: "" } };
  }
}
export default EditQuestion;
