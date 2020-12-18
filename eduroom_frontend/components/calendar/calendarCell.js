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
<<<<<<< HEAD


  return (
    <Fragment>
      <div onClick={() => { setOpen(true); setShowDate(content); }} className={`${props.isToday && content == todayDate ? 'currentDate' : ''} gridItem`}
        style={{ cursor: "pointer", position: "relative" }}>{content}
        {true ? <span className="event" /> : null}
      </div>
=======
  const [hasEvent,setEvent] = useState(false)
  useEffect(()=>{
    let event = false
    props.events?.map(el=>{
      const sdate = new Date(el.startdate)
      const edate = new Date(el.enddate)
      const cdate = new Date(props.date+ ' 07:00')
      if(cdate >= sdate && cdate <= edate){
        event = true
      }
    })
    setEvent(event)
  },[props.events])
 
  return (
    <Fragment>
      <div onClick={() => { setOpen(true);setShowDate(content); }} className={`${props.isToday&&content == todayDate ? 'currentDate' : ''} gridItem`} style={{cursor:"pointer",color:`${hasEvent?'red':'black'}`}}>{content}</div>
>>>>>>> 950bc489a622de108fe61b2fffbe1cd5a2ddbeb3
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
