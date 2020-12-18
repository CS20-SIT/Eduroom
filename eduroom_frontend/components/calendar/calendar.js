import React, { Fragment, useState, useEffect } from "react";
import Cell from "../../components/calendar/calendarCell";
import HeadCell from "../../components/calendar/calendarHeader";
import BlankCell from "../../components/calendar/calendarBlankCell";
import ViewEvent from '../../components/calendar/viewEvent';
import Image from "next/image";
import api from "../../api";
// import { useRouter } from 'next/router';
import style from "../../styles/calendar/calendar";
import moment from "moment";
import Link from "next/link";
import {
  Grid,
  Container
} from "@material-ui/core";
import { useRouter } from "next/router";

const Content = () => {
  //create Eventpage
  const router = useRouter();

  //Array of short names of the day.
  //Mon Tue ...
  const days = moment.weekdaysShort();

  //change when click next or before month
  const [day, setDay] = useState({
    dateObject: moment(),
  });

  //state chage 1 month per click
  const addMonth = () => {
    const dateObject = day.dateObject.add(1, "M");
    setDay({ ...day, dateObject: dateObject });
  };
  const minusMonth = () => {
    const dateObject = day.dateObject.add(-1, "M");
    setDay({ ...day, dateObject: dateObject });
  };

  //return the first day of that month
  // 0 = sun, 1 = mon , ... , 6 = sat
  const firstDayOfMonth = () => {
    let dateObj = day.dateObject;
    let firstDay = moment(dateObj).startOf("month").format("d");
    return firstDay;
  };

  let count = 0;

  //add black cell before the first day of the month
  // i.e. first day is tuesday => fill blank in sunday and monday.
  let blank = [];
  for (let i = 0; i < firstDayOfMonth(); i++) {
    blank.push("x");
    count++;
  }

  //array of days in that month start from 1 to 28,29,30,31 (up to that month)
  let daysInMonth = [];
  for (let d = 1; d <= day.dateObject.daysInMonth(); d++) {
    daysInMonth.push(d);
    count++;
  }

  let blankEnd = [];
  while (count < 42) {
    blankEnd.push("x")
    count++;
  }

  const Today = new Date();
  const TodayDate = Today.getDate();
  const TodayMonth = Today.getMonth() + 1;
  const TodayYear = Today.getFullYear();

  const currentDate = parseInt(day.dateObject.format("D"));
  const currentMonth = day.dateObject.format("MMMM");
  const currentMonthNo = parseInt(day.dateObject.format("M"));
  const currentYear = parseInt(day.dateObject.format("YYYY"));


  const [showDate, setShowDate] = useState(-1);
  const [open, setOpen] = useState(false);


  const [isInstructor, setInstructor] = useState(false);
  useEffect(() => {
    api.get('/api/auth/profile').then(res => {
      if (res.data.role == 'instructor') {
        setInstructor(true);
      }
    }
    ).catch(err=>{

    })
  }, [])

  // ------------------code below----------------------//
  return (
    <Fragment>



      <div className="bg-calendar">
        <Image
          alt="image"
          src="/images/createEvent/calendar.svg"
          width="331"
          height="300"
        />
      </div>

      <ViewEvent open={open} setOpen={setOpen} showDate={showDate} currentMonth={currentMonth} currentMonthNo={currentMonthNo} currentYear={currentYear} />





      {/* ------------------------------Create Event on main Calendar Page---------------------------------------- */}
      {
        isInstructor ? (
          <div className="createEvent">
            <button className="bt-createEvent"
              onClick={() => {
                router.push(`/event`)
              }}>
              createEvent
        </button>
          </div>
        ):null
}




      {/* ------------------------------Calendar Header---------------------------------------- */}
      <div className="month-color text-center">
        <div className="month-size">
          <Container>
            <Grid container spacing={0}>
              <div className="previous-m" onClick={minusMonth}>
                {" "}
                <Image
                  alt="left-arrow"
                  src="/images/createEvent/L.svg"
                  width="30"
                  height="30"
                />
                {" "}
              </div>

              <div className="month">
                {currentMonth + " " + currentYear}
              </div>


              <div className="forward-m" onClick={addMonth}>
                <Image
                  alt="right-arrow"
                  src="/images/createEvent/R.svg"
                  width="30"
                  height="30"
                />
              </div>


            </Grid>
          </Container>
        </div>

        {/* -------------------------------Fill Calendar Items------------------------------- */}
        <div className="grid">

          {days.map((dayName) => {
            return <HeadCell head={dayName} />;
          })}

          {blank.map((blank) => {
            return <BlankCell Content={blank} />;
          })}

          {daysInMonth.map((day) => {
            return <Cell isToday={TodayDate == day && TodayMonth == currentMonthNo && TodayYear == currentYear} todayDate={TodayDate} setOpen={setOpen} Content={day} setShowDate={setShowDate} />;
          })}

          {blankEnd.map((blank) => {
            return <BlankCell Content={blank} />;
          })}

        </div>
      </div>


      <style jsx>{style}</style>
    </Fragment>
  );
};
export default Content;
