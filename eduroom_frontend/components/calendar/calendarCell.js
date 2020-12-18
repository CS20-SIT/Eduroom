import React, { Fragment, useEffect, useState } from "react";
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
      <div onClick={() => { setOpen(true); setShowDate(content); }} className={`${props.isToday && content == todayDate ? 'currentDate' : ''} gridItem`}
        style={{ cursor: "pointer", position: "relative" }}>{content}
        {true ? <span className="event" /> : null}
      </div>
      <style jsx>{style}</style>
      <style jsx>{`
      .event{
        position: absolute;
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background: #ccc;
        top: 3.25rem;
        left: 4.5rem;
      }
      `}</style>
    </Fragment>
  );
};
export default Content;
