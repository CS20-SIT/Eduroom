import React, { Fragment } from "react";
import style from "../../styles/calendar/calendar";
const Content = (props) => {
    const content = props.Content;
  return (
    <Fragment>
      <div className="EmptyItem">{content}</div>
      <style jsx>{style}</style>
    </Fragment>
  );
};
export default Content;
