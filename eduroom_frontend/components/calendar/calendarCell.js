import React, { Fragment, useEffect, useState} from "react";
// import { useRouter } from 'next/router';
import style from "../../styles/calendar/calendar";
const Content = (props) => {
  //   const router = useRouter();
  // console.log(props.Content);
  const content = props.Content;
  const todayDate = props.todayDate;
  const setOpen = props.setOpen;
  const setShowDate = props.setShowDate;

 
  return (
    <Fragment>
      <div onClick={() => { setOpen(true);setShowDate(content); }} className={`${props.isToday&&content == todayDate ? 'currentDate' : ''} gridItem`} style={{cursor:"pointer"}}>{content}</div>
      <style jsx>{style}</style>
    </Fragment>
  );
};
export default Content;
