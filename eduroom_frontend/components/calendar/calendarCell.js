import React, { Fragment } from "react";
// import { useRouter } from 'next/router';
import style from "../../styles/calendar/calendar";
const Content = (props) => {
  //   const router = useRouter();
  // console.log(props.Content);
  const content = props.Content;
  const TodayDate = props.TodayDate;
  const setOpen = props.setOpen;
  const isNow = props.isNow

  return (
    <Fragment>
      <div onClick={() => { setOpen(content) }} className={`${content == TodayDate && isNow ? 'currentDate' : ''} gridItem`} style={{cursor:"pointer"}}>{content}</div>
      <style jsx>{style}</style>
    </Fragment>
  );
};
export default Content;
