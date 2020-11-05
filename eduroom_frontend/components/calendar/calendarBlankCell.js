import React, { Fragment } from "react";
const Content = (props) => {
    const content = props.Content;
  return (
    <Fragment>
      <div className="gridItem">{content}</div>
    </Fragment>
  );
};
export default Content;
