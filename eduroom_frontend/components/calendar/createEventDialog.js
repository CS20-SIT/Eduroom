import React, { Fragment, useState, useEffect } from 'react'
import CSSTransition from 'react-transition-group/CSSTransition'
import style from '../../styles/calendar/calendar'
import api from '../../api'
import { useRouter } from "next/router";

const Content = (props) => {
    const router = useRouter();
    const openEvent = props.openEvent
    const setOpenEvent = props.setOpenEvent


    
    // ---------------------createEvent---------------------------
    const [eventInfo, setEventInfo] = useState({
        title: '',
        type: '',
        description: '',
        startDate: '',
        endDate: '',
        startTime: '',
        endTime: '',
        place: '',
    })
    const handleCreate = (e) => {

        console.log(eventInfo);
        // if (validator()) {
        api.post("/api/event/createEvent", eventInfo).then(
            (res) => {
                alert("success");

                router.push("/calendar")
            }
        ).catch(err => {
            console.log(err);
        })/*  {
            title: eventInfo.title,
            description: eventInfo.description,
            startDate: eventInfo.startDate,
            endDate: eventInfo.endDate,
            startTime: eventInfo.startTime,
            endTime: eventInfo.endTime,
            place: eventInfo.place,
          });  */
        // }
    };
    const eventType = ['Course', 'Global']

    return (
        <Fragment>
            <CSSTransition
                mountOnEnter
                unmountOnExit
                in={openEvent}
                timeout={{ enter: 700, exit: 100 }}
                classNames={{ enterActive: 'fade-in', exitActive: 'fade-out' }}
            >
                <div className="D-create">
                    <div style={{ height: '10%' }}></div>
                    <div className="text-create">Create Event</div>

                    {/* ---------------------- ---------eventtitle------------------------------- */}
                    <div>
                        <input
                            className="event-title"
                            onChange={(e) => setEventInfo({ ...eventInfo, title: e.target.value })}
                            placeholder="Event Title"
                            style={{ height: '50px' }}
                        ></input>
                    </div>

                    {/* ---------------------- ---------eventType------------------------------- */}
                    <div>
                        <select className="event-type" onChange={(e) => setEventInfo({ ...eventInfo, type: e.target.value })}>
                            <option value="default" disabled>
                                Event Type
							</option>
                            {eventType.map((type) => {
                                return (
                                    <option value={type} key={type}>
                                        {type}
                                    </option>
                                )
                            })}
                        </select>
                    </div>

                    {/* ---------------------- ---------eventdescript------------------------------- */}
                    <div>
                        <input
                            className="event-detail"
                            onChange={(e) => setEventInfo({ ...eventInfo, description: e.target.value })}
                            placeholder="Description"
                            style={{ height: '50px' }}
                        ></input>
                    </div>
                    {/* ---------------------- ---------time------------------------------- */}

                    <div className="startdate">
                        <div>startDate</div>
                        <input
                            className="event-startDate"
                            onChange={(e) => setEventInfo({ ...eventInfo, startDate: e.target.value })}
                            placeholder="Start date"
                            type="date"
                        ></input>
                    </div>

                    <div className="startTime">
                        <div>startTime</div>
                        <input
                            className="event-startTime"
                            onChange={(e) => setEventInfo({ ...eventInfo, startTime: e.target.value })}
                            placeholder="Start Time"
                            type="Time"
                        ></input>
                    </div>

                    <div className="enddate">
                        <div>endDate</div>
                        <input
                            className="event-startDate"
                            onChange={(e) => setEventInfo({ ...eventInfo, endDate: e.target.value })}
                            placeholder="end date"
                            type="date"
                        ></input>
                    </div>

                    <div className="endtime">
                        <div>endTime</div>
                        <input
                            className="event-endTime"
                            onChange={(e) => setEventInfo({ ...eventInfo, endTime: e.target.value })}
                            placeholder="end Time"
                            type="time"
                        ></input>
                    </div>

                    {/* -------------------------------place------------------------------- */}
                    <div>
                        <input
                            className="event-place"
                            onChange={(e) => setEventInfo({ ...eventInfo, place: e.target.value })}
                            placeholder="Event Place"
                            style={{ height: '50px' }}
                        ></input>
                    </div>

                    <div className="confirmBT">
                        <button className="event-confirm" onClick={handleCreate} >
                            <a className="event-confirmText">CONFIRM</a>
                        </button>
                    </div>
                    <div
                        className="cancelBT"
                        onClick={() => {
                            setOpenEvent(false)
                        }}
                    >
                        <button className="event-cancel">
                            <a className="event-cancelText">CANCEL</a>
                        </button>
                    </div>
                </div>
            </CSSTransition>

            <style jsx>{style}</style>
            <style jsx>
                {`
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
				`}
            </style>
        </Fragment>
    )
}
export default Content
