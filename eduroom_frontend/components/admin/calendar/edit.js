import React, { Fragment, useState, useEffect } from 'react'
import CSSTransition from 'react-transition-group/CSSTransition'
import style from '../../../styles/calendar/calendar'
import Image from "next/image";
import api from '../../../api'
import { useRouter } from "next/router";

const edit = (props) => {
    const router = useRouter();
    const setOpenEvent = props.setOpenEvent
    const [EditOpen, setEditOpen] = useState(false);
    const handleClickOpen = () => {
        setEditOpen(true);
    };
    const [data, setData] = useState([])

    useEffect(() => {
        const GetData = async () => {
            const result1 = await api.get("/api/event/getEvent",
                {
                    params: {
                        id: props.id
                    }
                });
            setData(result1.data[0]);

        };
        GetData();

    }, []);
    console.log(data)

    // ---------------------createEvent---------------------------
    const [eventInfo, setEventInfo] = useState({
        title: data?.title,
        description: data?.detail,
        startDate: data?.startdate,
        endDate: data?.enddate,
        startTime: data?.starttime,
        endTime: data?.endtime,
        place: data?.place,
    })
    const handleCreate = (e) => {

        console.log(eventInfo);
        // if (validator()) {
        api.post("/api/event/eEvent", eventInfo).then(
            (res) => {
                alert("success");
                router.push("/calendar")
            }
        ).catch(err => {
            console.log(err);
        })
           
        
    };
    const eventType = ['Course', 'Global']

    return (
        <Fragment>
            <div style={{marginBottom:"20px"}}>
            <button
                style={{
                    padding: 0,
                    border: "none",
                    background: "none",
                    cursor: "pointer",
                }}
                onClick={handleClickOpen}
            >
                {" "}
                <Image src="/images/graderCreate/edit.svg" width="20" height="20" />
            </button>
            </div>

            <CSSTransition
                mountOnEnter
                unmountOnExit
                in={EditOpen}
                timeout={{ enter: 700, exit: 100 }}
                classNames={{ enterActive: 'fade-in', exitActive: 'fade-out' }}
            >
                <div className="D-create">
                    <div style={{ height: '10%' }}></div>
                    <div className="text-create">Edit Event</div>

                    {/* ---------------------- ---------eventtitle------------------------------- */}
                    <div>
                        {data != null ? <input

                            defaultValue={data?.title}
                            className="event-title"
                            onChange={(e) => setEventInfo({ ...eventInfo, title: e.target.value })}
                            placeholder="Event Title"
                            style={{ height: '50px' ,fontSize:'18px'}}
                        ></input>
                            : null

                        }
                    </div>

                    {/* ---------------------- ---------eventType------------------------------- */}
                 

                    {/* ---------------------- ---------eventdescript------------------------------- */}
                    <div>
                        <input
                            defaultValue={data?.detail}
                            className="event-detail"
                            onChange={(e) => setEventInfo({ ...eventInfo, description: e.target.value })}
                            placeholder="Description"
                            style={{ height: '50px' ,fontSize:'18px'}}
                        ></input>
                    </div>
                    {/* ---------------------- ---------time------------------------------- */}

                    <div className="startdate">
                        <div>startDate</div>

                        <input
                            defaultValue={data?.startdate}
                            className="event-startDate"
                            onChange={(e) => setEventInfo({ ...eventInfo, startDate: e.target.value })}
                            placeholder="Start date"
                            type="date"
                            style={{fontSize:'14px'}}
                        ></input>
                    </div>

                    <div className="startTime">
                        <div>startTime</div>
                        <input
                            defaultValue={data?.starttime}
                            className="event-startTime"
                            onChange={(e) => setEventInfo({ ...eventInfo, startTime: e.target.value })}
                            placeholder="Start Time"
                            type="Time"
                            style={{fontSize:'14px'}}
                        ></input>
                    </div>

                    <div className="enddate">
                        <div>endDate</div>
                        <input
                            defaultValue={data?.enddate}
                            className="event-endDate"
                            onChange={(e) => setEventInfo({ ...eventInfo, endDate: e.target.value })}
                            placeholder="end date"
                            type="date"
                            style={{fontSize:'14px'}}

                        ></input>
                    </div>

                    <div className="endtime">
                        <div>endTime</div>
                        <input
                            defaultValue={data?.endtime}
                            className="event-endTime"
                            onChange={(e) => setEventInfo({ ...eventInfo, endTime: e.target.value })}
                            placeholder="end Time"
                            type="time"
                            style={{fontSize:'14px'}}

                        ></input>
                    </div>

                    {/* -------------------------------place------------------------------- */}
                    <div>
                        <input
                            defaultValue={data?.place}
                            className="event-place"
                            onChange={(e) => setEventInfo({ ...eventInfo, place: e.target.value })}
                            placeholder="Event Place"
                            style={{ height: '50px' ,fontSize:'18px'}}
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
                            setEditOpen(false)
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
};
export default edit;