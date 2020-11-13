import React, { Fragment, useState } from "react";
import Link from "next/link";
const BackButton = () => {
  return (
    <Fragment>
      <b>
        <Link href="/forum"> &lt; back </Link>
      </b>
    </Fragment>
  );
};
export default BackButton;
