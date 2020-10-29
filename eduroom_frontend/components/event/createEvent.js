import Head from 'next/head'
import React, { Fragment } from 'react';
import style from '../../styles/event/event'
import { Button, Grid, Container, TextField } from '@material-ui/core'
import Image from 'next/image'

const content = () => {

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
                                                    style={{ width: "207px", height: "39px" }} />
                                            </div>
                                        </Grid>
                                        <Grid item xs={5}>
                                            <div style={{ marginLeft: "" }}>
                                                <input className="input-box"
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
                                                    style={{ width: "207px", height: "39px" }} />
                                            </div>
                                        </Grid>
                                        <Grid item xs={5}>
                                            <div style={{ marginLeft: "" }}>
                                                <input className="input-box"
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
                                            style={{ width: "983px", height: "39px" }} />
                                    </div>
                                </Grid>
                            </Grid>
                            <div className="button">
                                <button className="create-button" style={{ width: "122px", height: "39px" }}>
                                    <a className="create-button-create">Confirm</a>
                                </button>

                                <button className="cancel-button" style={{ width: "122px", height: "39px", marginLeft:"45px"}}>
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
