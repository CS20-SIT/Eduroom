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

            <div className="space-top"></div>
            <Container>
                <div className="head">
                    <Grid container spacing={2}>

                        <Grid item xs={5.5} >


                            <Image alt="meeting-img" src="/images/createEvent/image.svg" width="528" height="383" />
                        </Grid>
                        <Grid item xs={6}>
                            <h1 className="color-topic topic-font" >COME ON...</h1>
                            <h1 className="color-topic topic-font">LET’S JOIN TO MEETING</h1>

                            <p className="color-p " style={{ marginTop: "25px" }}>All reservation request should be made at least <span style={{ color: "#FB9CCB" }}>24 hours</span> in advance.</p>

                            <p className="color-p">Please note that if your request or reservation is outside the normal</p>
                            <p className="color-p">service hours, our staff may not be able to provide the service at the requested time.</p>

                        </Grid>
                    </Grid>
                </div>




                {/* ---------------------------------------Event Create Form --------------------------------------------------*/}
                <div className="form">
                    <Grid container>
                        <div>
                            <input className="event-title"></input>
                        </div>
                        <div>
                            <input className="event-type"></input>
                        </div>







                    </Grid>
                </div>




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
