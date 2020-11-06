import React, { Fragment } from "react";
// import { useRouter } from 'next/router';
import style from "../../styles/calendar/calendar";
const Content = (props) => {
  //   const router = useRouter();
  // console.log(props.Content);
  const content = props.Content;
  const TodayDate = props.TodayDate;
  const isNow = props.isNow;

  return (
    <Fragment>
      {(content == TodayDate && isNow )? (
        <div className="currentDate gridItem">{content}</div>
      ) : (
        <div className="gridItem">{content}</div>
      )}
      <style jsx>{style}</style>
    </Fragment>
  );
};
export default Content;
