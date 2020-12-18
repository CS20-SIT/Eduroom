import React, { Fragment, useState, useEffect } from "react";
import axios from 'axios';
import style from "../../styles/calendar/calendar";
import Image from "next/image";
import CSSTransition from 'react-transition-group/CSSTransition';


const edit = (props) => {

  const [editOpen, setEditOpen] = useState(false);
  const [eventInfo, setEventInfo] = useState({
    title: "",
    type: "",
    description: "",
    startDate: "",
    endDate: "",
    startTime: "",
    endTime: "",
    place: "",
  });
  const handleCreate = (e) => {

    if (eventInfo.type == 'Global') {
      eventInfo.type = '1'
    } else {
      eventInfo.type = '2'
    }
    console.log(eventInfo);
    // if (validator()) {
    api.post("/api/event/createEvent", {
      title: eventInfo.title,
      type: eventInfo.type,
      description: eventInfo.description,
      startDate: eventInfo.startDate,
      endDate: eventInfo.endDate,
      startTime: eventInfo.startTime,
      endTime: eventInfo.endTime,
      place: eventInfo.place,
    });
    // }
  };
  const eventType = ["Course", "Global"];




  return (
    <Fragment>

      <div onClick={() => { setEditOpen(true) }}>
        <Image src="/images/graderCreate/edit.svg" width="20" height="20" />
      </div>


      <CSSTransition
        mountOnEnter
        unmountOnExit
        in={editOpen}
        timeout={{ enter: 700, exit: 100 }}
        classNames={{ enterActive: 'fade-in', exitActive: 'fade-out' }}
      >
        asdasdasd
      </CSSTransition>























      <style jsx>{style}</style>

    </Fragment>
  )
};
export default edit;