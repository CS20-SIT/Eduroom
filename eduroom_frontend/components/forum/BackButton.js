import React, { Fragment, useState } from "react";
import Link from "next/link";
const BackButton = () => {
  return (
    <Fragment>
      <div>
      <b>
        <Link href="/forum"> &lt; back </Link>
      </b>
      </div>
    </Fragment>
  );
};
export default BackButton;
