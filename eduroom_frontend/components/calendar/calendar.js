import React, { Fragment, useState, useEffect } from "react";
import Cell from "../../components/calendar/calendarCell";
import HeadCell from "../../components/calendar/calendarHeader";
import BlankCell from "../../components/calendar/calendarBlankCell";
import CSSTransition from 'react-transition-group/CSSTransition';

// import { useRouter } from 'next/router';
import style from "../../styles/calendar/calendar";
import moment from "moment";
import Link from "next/link";
import {
  Grid,
  Container,
  DialogContent,
  Dialog,
  DialogTitle,
  Button,
  DialogContentText,
  DialogActions,
  TextField,

} from "@material-ui/core";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const Content = () => {
  // Pop-up-event


  //Array of short names of the day.
  //Mon Tue ...
  const days = moment.weekdaysShort();

  //change when click next or before month
  const [day, setDay] = useState({
    dateObject: moment(),
  });
  const [isToday, setIsToday] = useState(true);
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

  console.log(blankEnd);

  const Today = new Date();
  const TodayDate = Today.getDate();
  const TodayMonth = Today.getMonth() + 1;
  const TodayYear = Today.getFullYear();

  const currentDate = parseInt(day.dateObject.format("D"));
  const currentMonth = day.dateObject.format("MMMM");
  const currentMonthNo = parseInt(day.dateObject.format("M"));
  const currentYear = parseInt(day.dateObject.format("YYYY"));

  useEffect(() => {
    isTodayInThisMonthAndYear();
  });

  const isTodayInThisMonthAndYear = () => {
    if (TodayMonth === currentMonthNo && TodayYear === currentYear) {
      setIsToday(true);
    } else {
      setIsToday(false);
    }
  };

  const [open, setOpen] = useState(false);
  const [showDate, setShowDate] = useState(-1);

  return (
    <Fragment>

      <CSSTransition
        mountOnEnter
        unmountOnExit
        in={open}
        timeout={{ enter: 300, exit: 300 }}
        classNames={{ enterActive: 'fade-in', exitActive: 'fade-out' }}
      >
        <div className='bg-overlay' onClick={() => setOpen(false)}>

          <div className='d-calendar'>
            <div className="d-top">
              <div className="d-day">{showDate} {currentMonth}{currentYear}</div>
            </div>

            <div className="content">
              <div>
                TEST Content
              </div>
            </div>
            <div className="d-buttom">
              <div className="">
                <button>
                  Edit มั้ง? คิดก่อน
                </button>
              </div>
            </div>
          </div>
        </div>
      </CSSTransition>


      <div className="month-color text-center">
        <div className="month-size">
          <Container>
            <Grid container spacing={0}>
              <Grid item xs={2}></Grid>
              <Grid item xs={1}>
                <div className="previous-m" onClick={minusMonth}>
                  {" "}
                  &lt;{" "}
                </div>
              </Grid>
              <Grid item xs={6}>
                {currentMonth + " " + currentYear}
              </Grid>
              <Grid item xs={1}>
                <div className="forward-m" onClick={addMonth}>
                  &gt;
                </div>
              </Grid>
              <Grid item xs={2}></Grid>
            </Grid>
          </Container>
        </div>
        <div className="grid">



          {days.map((dayName) => {
            return <HeadCell head={dayName} />;
          })}

          {blank.map((blank) => {
            return <BlankCell Content={blank} />;
          })}

          {daysInMonth.map((day) => {
            return <Cell TodayDate={TodayDate} setOpen={setOpen} Content={day} setShowDate={setShowDate} isNow={isToday} />;
          })}

          {blankEnd.map((blank) => {
            return <BlankCell Content={blank} />;
          })}

          {/*  <div>
                        <Link href="/event">
                            <button className="addEvent-button">Add Event</button>
                        </Link>
                    </div> */}
        </div>
      </div>

      <style jsx>{style}</style>
      <style jsx>
        {
          `
                        .fade-in {
                          animation: fade-in 0.3s forwards;
                        }
                        .fade-out {
                          animation: fade-out 0.3s forwards;
                        }
                        @keyframes fade-in {
                          0% {
                            opacity: 0;
                          }
                          100% {
                            opacity: 1;
                          }
                        }
                        @keyframes fade-out {
                          0% {
                            opacity: 1;
                          }
                          100% {
                            opacity: 0;
                          }
                        }

                        
                        
                        
                        `
        }
      </style>
    </Fragment>
  );
};
export default Content;
