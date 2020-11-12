import React, { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/router";

import Create from "./QCreate";

const EditQuestion = () => {
  const router = useRouter();
  const id = router.query.id;

  return (
    <Fragment>
      <div>{id}</div>
      <Create id={id}></Create>
    </Fragment>
  );
};
export default EditQuestion;
