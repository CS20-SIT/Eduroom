import Head from 'next/head'
import React, { Fragment, useState } from 'react';
import style from '../../styles/event/event'
import { Button, Grid, Container, TextField, } from '@material-ui/core'
import { KeyboardTimePicker } from "@material-ui/pickers";




import Image from 'next/image'
import api from '../../api'
const content = () => {
    






    const [user, setUser] = useState({
        title: '',
        type: '',
        description: '',
        startDate: '',
        endDate: '',
        startTime: '',
        endTime: '',
        place: ''
    });
    const createEvent = async () => {
        console.log(user);
    };
    const handleCreate = (e) => {
        if (validator()) {
            api
                .post('/api/event/createEvent', {
                    title: user.title,
                    type: user.type,
                    description: user.description,
                    startDate: user.startDate,
                    endDate: user.endDate,
                    startTime: user.startTime,
                    endTime: user.endTime,
                    place: user.place
                })

        }
    }

    const validator = () => {

    }
    const [selectedDate, handleDateChange] = useState(new Date());










    return (
        <Fragment>
            <Head>
                <title>Create Event</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Container>
                <Grid container spacing={2}>

                    <Grid item xs={3} >


                        <Image alt="meeting-img" src="/images/createEvent/Meeting.svg" width="290" height="290" />
                    </Grid>
                    <Grid item xs={9}>
                        <h1 className="color-topic topic-font">COME ON...</h1>
                        <h1 className="color-topic topic-font">LET’S JOIN TO MEETING</h1>
                        <p className="color-p">All reservation request should be made at least 24 hours in advance.</p>
                        <p className="color-p">Please note that if your request or reservation is outside the normal</p>
                        <p className="color-p">service hours, our staff may not be able to provide the service at the </p>
                        <p className="color-p">requested time.</p>
                    </Grid>
                </Grid>



                {/* ---------------------------------------Event Create Form --------------------------------------------------*/}
                <Grid container>
                    <Grid item xs={11}>
                        <div className="create-form">
                            {/* --------------------------------------- Title --------------------------------------------------*/}
                            <Grid container>
                                <Grid item xs={7}>
                                    <Grid container>
                                        <Grid item xs={3}>
                                            <div>
                                                <p className="create-topic">Event Title :</p>
                                            </div>
                                        </Grid>
                                        <Grid item xs={9}>
                                            <div style={{ marginLeft: "-18px" }}>
                                                <input className="input-box"
                                                    name="title"
                                                    onChange={(e) => setUser({ ...user, title: e.target.value })}
                                                    style={{ width: "417px", height: "39px" }} />
                                            </div>

                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={5}>
                                    <Grid container>
                                        <Grid item xs={4}>
                                            <p className="create-topic">Event Type :</p>
                                        </Grid>
                                        <Grid item xs={8}>
                                            <input className="input-box"
                                                name="type"
                                                onChange={(e) => setUser({ ...user, type: e.target.value })}
                                                type="text"
                                                style={{ width: "260px", height: "39px" }} />
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>

                            {/* ---------------------------------------Description --------------------------------------------------*/}

                            <Grid container style={{ marginTop: "3.5%" }}>
                                <Grid item xs={2}>
                                    <p className="create-topic">Description :</p>
                                </Grid>
                                <Grid item xs={9}>
                                    <div style={{ marginLeft: "-40px" }}>
                                        <input className="input-box"
                                            name="description"
                                            onChange={(e) => setUser({ ...user, decription: e.target.value })}
                                            style={{ width: "923px", height: "88px" }} />
                                    </div>
                                </Grid>
                            </Grid>

                            {/* ---------------------------------------Date time--------------------------------------------------*/}

                            <Grid container style={{ marginTop: "3.5%" }}>
                                <Grid item xs={6}>
                                    <Grid container>
                                        <Grid item xs={2}>
                                            <p className="create-topic">Start :</p>
                                        </Grid>
                                        <Grid item xs={5}>
                                            <div style={{ marginLeft: "" }}>
                                                <input className="input-box"
                                                    name="startTime"
                                                    onChange={(e) => setUser({ ...user, startTime: e.target.value })}
                                                    style={{ width: "207px", height: "39px" }} />
                                            </div>
                                        </Grid>
                                        <Grid item xs={5}>
                                            <div style={{ marginLeft: "" }}>
                                                <input className="input-box"
                                                    name="startDate"
                                                    onChange={(e) => setUser({ ...user, startDate: e.target.value })}
                                                    style={{ width: "207px", height: "39px" }} />
                                            </div>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={6}>
                                    <Grid container>
                                        <Grid item xs={2}>
                                            <p className="create-topic">End :</p>
                                        </Grid>
                                        <Grid item xs={5}>
                                            <div style={{ marginLeft: "" }}>
                                                <input className="input-box"
                                                    name="endTime"
                                                    onChange={(e) => setUser({ ...user, endTime: e.target.value })}
                                                    style={{ width: "207px", height: "39px" }} />
                                            </div>
                                        </Grid>
                                        <Grid item xs={5}>
                                            <div style={{ marginLeft: "" }}>
                                                <input className="input-box"
                                                    name="endDate"
                                                    onChange={(e) => setUser({ ...user, endDate: e.target.value })}
                                                    style={{ width: "207px", height: "39px" }} />
                                            </div>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>



                            {/* --------------------------------------- Place --------------------------------------------------*/}
                            <Grid container style={{ marginTop: "3.5%" }}>
                                <Grid item xs={1}>
                                    <p className="create-topic">Place :</p>
                                </Grid>
                                <Grid item xs={9}>
                                    <div style={{ marginLeft: "" }}>
                                        <input className="input-box"
                                            name="place"
                                            onChange={(e) => setUser({ ...user, place: e.target.value })}
                                            style={{ width: "983px", height: "39px" }} />
                                    </div>
                                </Grid>
                            </Grid>
                            <div className="button">
                                <button className="create-button" onClick={createEvent} style={{ width: "122px", height: "39px" }}>
                                    <a className="create-button-create">Confirm</a>
                                </button>

                                <button className="cancel-button" style={{ width: "122px", height: "39px", marginLeft: "45px" }}>
                                    <a className="cancel-button-cancel">Cancel</a>
                                </button>
                            </div>


                        </div>
                    </Grid>
                    <Grid item xs={1}>

                    </Grid>
                </Grid>



                





            </Container>














            <style jsx>
                {style}
            </style>
        </Fragment>
    );
}
export default content;


function KeyboardTimePickerExample() {
    const [selectedDate, handleDateChange] = useState(new Date());

    return (
        <KeyboardTimePicker
            label="Masked timepicker"
            placeholder="08:00 AM"
            mask="__:__ _M"
            value={selectedDate}
            onChange={date => handleDateChange(date)}
        />
    );
}
