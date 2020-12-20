import React, { Fragment, useState, useEffect, useContext } from 'react'
import CreateEventDialog from '../../components/calendar/createEventDialog'
import Edit from '../../components/calendar/edit'
import CSSTransition from 'react-transition-group/CSSTransition'
import Image from 'next/image'
import axios from 'axios'
import style from '../../styles/calendar/calendar'
import api from '../../api'
import Delete from '../../components/calendar/delete'
import UserConText from '../../contexts/user/userContext'

const Content = (props) => {
    const userContext = useContext(UserConText)
    const { user } = userContext;

    const showDate = props.showDate;
    const open = props.open;
    const setOpen = props.setOpen;
    const currentMonth = props.currentMonth;
    const currentMonthNo = props.currentMonthNo;
    const currentYear = props.currentYear;

    const [data, setData] = useState([]);
    const [global, setGlobal] = useState([]);
    const [own, setOwn] = useState([]);
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

    useEffect(() => {
        const GetData = async (date) => {
            const result2 = await api.get(`/api/event/getEventbyDate?date=${date}`);
            console.log(result2);

            setData(result2.data.data);
            setGlobal(result2.data.global);
            setOwn(result2.data.own);
            console.log("dateeeeeeeee is" + result2.data.data)
            console.log("data is" + result2.data.data);
            console.log("Global is" + result2.data.global);
            console.log("Own is" + result2.data.own);

        };

        GetData(props.currentYear + "-" + props.currentMonthNo + "-" + props.showDate);
    }, [props.showDate]);


    const formatTime = (time) => {
        return (time < 10 ? '0' : '') + time
    }






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
                        <div className="Cpoint" style={{ background: "#fdd4c1" }}></div>
                        <div className="dot-course">Course</div>
                        <div className="Gpoint" style={{ background: "#A880F7" }}></div>
                        <div className="dot-global">Global</div>
                        <div className="content">
                            <div>


                                {global.map((row) => {

                                    return (

                                        <div className="d-block">

                                            <div className="title">{row.title}</div>
                                            <div className="point" style={{ background: "#A880F7" }}></div>
                                            <div className="detail">{row.starttime.substring(0, 5)} : {row.endtime.substring(0, 5)}</div>
                                            <div className="detail" style={{ marginTop: ".5rem", fontWeight: "bold" }}>{showDate} {currentMonth} - {row.enddate.substring(8, 10)} {currentMonth}</div>
                                            <div className="detail" style={{ marginTop: "0.5rem", fontWeight: "bold", fontSize: "16px" }}>{row.place}</div>
                                        </div>
                                    )
                                })}






                                {own.map((row) => {

                                    return (

                                        <div className="d-block">

                                            <div className="edit">
                                                <Edit id={row.eventid} ></Edit>
                                                <Delete id={row.eventid}></Delete>
                                            </div>




                                            <div className="title">{row.title} ({row.coursename})</div>

                                            <div className="point" style={{ background: "#fdd4c1" }}></div>
                                            <div className="detail">{row.starttime.substring(0, 5)} : {row.endtime.substring(0, 5)}</div>
                                            <div className="detail" style={{ marginTop: ".5rem", fontWeight: "bold" }}>{showDate} {currentMonth} - {row.enddate.substring(8, 10)} {currentMonth}</div>
                                            <div className="detail" style={{ marginTop: "0.5rem", fontWeight: "bold", fontSize: "16px" }}>{row.place}</div>
                                        </div>
                                    )
                                })}


                                {data.map((row) => {

                                    return (

                                        <div className="d-block">


                                            <div className="title">{row.title} ({row.coursename})</div>

                                            <div className="point" style={{ background: "#fdd4c1" }}></div>
                                            <div className="detail">{row.starttime.substring(0, 5)} : {row.endtime.substring(0, 5)}</div>
                                            <div className="detail" style={{ marginTop: ".5rem", fontWeight: "bold" }}>{showDate} {currentMonth} - {row.enddate.substring(8, 10)} {currentMonth}</div>
                                            <div className="detail" style={{ marginTop: "0.5rem", fontWeight: "bold", fontSize: "16px" }}>{row.place}</div>
                                        </div>
                                    )
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
