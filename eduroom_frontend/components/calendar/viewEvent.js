import React, { Fragment, useState, useEffect } from "react";
import CreateEventDialog from "../../components/calendar/createEventDialog";
import CSSTransition from 'react-transition-group/CSSTransition';
import Image from "next/image";
import axios from 'axios';
import style from "../../styles/calendar/calendar";


const Content = (props) => {
    //   const router = useRouter();
    
    const showDate = props.showDate;
    const open = props.open;
    const setOpen = props.setOpen;
    const currentMonth = props.currentMonth;
    const currentMonthNo = props.currentMonthNo;
    const currentYear = props.currentYear;

    const [data, setData] = useState([])

    useEffect(() => {
        const GetData = async () => {
            const result = await axios("http://localhost/api/event/getCourseEvent");
            setData(result.data);
        };
        GetData();
        console.log(data);
    }, []);


    
    const [openEvent, setOpenEvent] = useState(false);



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
                        <div onClick={() =>setOpen(false)} className="d-close">
                            X
            </div>
                        <div className="d-top">
                            <div className="d-day">{showDate} {currentMonth} {currentYear}</div>
                        </div>

                        <div className="content">
                            <div>

                                {data.map((row) => {

                                    return (showDate == row.startday && currentMonthNo == row.nowmonth ?
                                        <div className="d-block">
                                            <div className="edit">
                                                {/* <Edit></Edit> */}
                                            </div>
                                            <div className="title">{row.title}</div>
                                            <div className="point" style={{ background: "#fdd4c1" }}></div>
                                            <div className="detail">{row.hstart}.{row.mstart} - {row.hend}.{row.mend} | {row.place}</div>
                                        </div>
                                        : "")
                                })}

                            </div>
                        </div>
                        <div className="d-buttom">
                            <div onClick={() => {setOpenEvent(true)}} >
                                <button className="button">
                                    Add New Event
                </button>
                            </div>
                        </div>
                    </div>


                </div>
            </CSSTransition>

            <CreateEventDialog openEvent={openEvent} setOpenEvent={setOpenEvent} />
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
