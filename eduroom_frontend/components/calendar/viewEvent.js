import React, { Fragment, useState, useEffect, useContext } from "react";
import CreateEventDialog from "../../components/calendar/createEventDialog";
import Edit from "../../components/calendar/edit"
import CSSTransition from 'react-transition-group/CSSTransition';
import Image from "next/image";
import axios from 'axios';
import style from "../../styles/calendar/calendar";
import api from "../../api";
import Delete from "../../components/calendar/delete"
import UserConText from "../../contexts/user/userContext"

const Content = (props) => {
   const userContext = useContext(UserConText)
   const {user} = userContext;

    const showDate = props.showDate;
    const open = props.open;
    const setOpen = props.setOpen;
    const currentMonth = props.currentMonth;
    const currentMonthNo = props.currentMonthNo;
    const currentYear = props.currentYear;
    
    const [data, setData] = useState([])

    useEffect(() => {
        const GetData = async () => {
            const result1 = await api.get("/api/event/getCourseEvent");
            const result2 = await api.get("/api/event/getGlobalEvent");
            const allResult = (result1.data).concat(result2.data)
            setData(allResult);
        };
        GetData();
    }, []);
    const formatTime = (time) => {
        return (time < 10 ? '0' : '') + time
    }


    const [openEvent, setOpenEvent] = useState(false);
    const [isInstructor, setInstructor] = useState(false);
    useEffect(() => {
        api.get('/api/auth/profile').then(res => {
            if (res.data.role == 'instructor') {
                setInstructor(true);
            }
        }
        ).catch(err => {

        })
    }, [])



    return (
        <Fragment>
            <CSSTransition
                mountOnEnter
                unmountOnExit
                in={open}
                timeout={{ enter: 300, exit: 300 }}
                classNames={{ enterActive: 'fade-in', exitActive: 'fade-out' }}
            >
                <div className='bg-overlay'>
                    <div className='d-calendar'>
                        <div onClick={() => setOpen(false)} className="d-close">
                            X
            </div>
                        <div className="d-top">
                            <div className="d-day">{showDate} {currentMonth} {currentYear}</div>
                        </div>

                        <div className="content">
                            <div>
                                {user && data.map((row) => {

                                    return (showDate == row.startday && currentMonthNo == row.nowmonth ?

                                        <div className="d-block">
                                            {
                                                isInstructor && row.event_type == 'course' ? (
                                                    <div className="edit">
                                                        <Edit id={row.eventid} ></Edit>
                                                        <Delete id={row.eventid}></Delete>
                                                    </div>


                                                ) : null
                                            }

                                            <div className="title">{row.title} ({row.coursename}) </div>

                                            {row.event_type == 'course' ? <div className="point" style={{ background: "#fdd4c1" }}></div>
                                                :
                                                <div className="point" style={{ background: "#A880F7" }}></div>}
                                            <div className="detail">{formatTime(row.hstart)}:{formatTime(row.mstart)} - {formatTime(row.hend)}:{formatTime(row.mend)} | {row.place}</div>
                                        </div>
                                        : "")
                                })}

                            </div>
                        </div>


                        {isInstructor ? (
                            <div className="d-buttom">
                                <div onClick={() => { setOpenEvent(true) }} >
                                    <button className="button">
                                        Add New Event
                                </button>
                                </div>
                            </div>
                        ) : null}

                    </div>


                </div>
            </CSSTransition>

            <CreateEventDialog openEvent={openEvent} setOpenEvent={setOpenEvent} date={showDate} monthNo={currentMonthNo} year={props.currentYear} />

            <style jsx>
                {style}
            </style>
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
