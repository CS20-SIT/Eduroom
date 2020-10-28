import Head from 'next/head'
import React, { Fragment } from 'react';
import style from '../../styles/event/event'
import { Button, Grid, Container, TextField } from '@material-ui/core'


const content = () => {

    return (
        <Fragment>
            <Head>
                <title>Create Event</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <Container>
                    <Grid Container spacing={3}>
                        <Grid item xs={6}>
                            //Image
                        </Grid>
                        <Grid item xs={3}>
                            <h1 className="color-topic">COME ON...</h1>
                        </Grid>
                        <Grid item xs={3}>
                            <h1 className="color-topic">LET’S JOIN TO MEETING</h1>
                        </Grid>
                    </Grid>

                    <div className="create-form">
                        <p>Event Tittle :</p>
                        <Grid Container spacing={4}>
                            <Grid item xs={6}>
                                <form>
                                    <input
                                        className="create-textfield"
                                        type="text"
                                    />
                                </form>
                            </Grid>
                            <Grid item xs={6}>
                                <form>
                                    <input
                                        className="create-textfield"
                                        type="text"
                                    />
                                </form>
                            </Grid>
                            
                        </Grid>
                        
                       





                    </div>

                </Container>
            </main>










            <style jsx>
                {style}
            </style>
        </Fragment>
    );
}
export default content;
