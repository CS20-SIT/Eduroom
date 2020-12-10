import React, { Fragment } from "react";
import { useRouter } from "next/router";

import Create from "./Create";

const EditQuestion = () => {
  const router = useRouter();
  const id = router.query.id;

  return (
    <Fragment>
      <Create id={id}></Create>
    </Fragment>
  );
};

export default EditQuestion;
