import React, { Fragment, useState } from 'react';
import Cell from '../../components/calendar/calendarCell'
import HeadCell from '../../components/calendar/calendarHeader'
// import { useRouter } from 'next/router';
import style from '../../styles/calendar/calendar'
import moment from 'moment';
import Link from 'next/link';
import { Grid, Container, DialogContent, Dialog, DialogTitle, Button } from '@material-ui/core'
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';



const Content = () => {
    // Pop-up-event
    const useStyles = makeStyles((theme) => ({
        typography: {
            padding: theme.spacing(2),
        },
    }));
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;



    //Array of short names of the day.
    //Mon Tue ...
    const days = moment.weekdaysShort();

    const [day, setDay] = useState({
        dateObject: moment()
    })

    const addMonth = () => {
        const dateObject = day.dateObject.add(1, "M")
        setDay(
            { ...day, dateObject: dateObject }
        )
    }

    const minusMonth = () => {
        const dateObject = day.dateObject.add(-1, "M")
        setDay(
            { ...day, dateObject: dateObject }
        )
    }

    //return the first day of that month
    // 0 = sun, 1 = mon , ... , 6 = sat
    const firstDayOfMonth = () => {
        let dateObj = day.dateObject
        let firstDay = moment(dateObj)
            .startOf("month")
            .format("d");
        return firstDay;
    }

    //add black cell before the first day of the month
    // i.e. first day is tuesday => fill blank in sunday and monday.
    let blank = [];
    for (let i = 0; i < firstDayOfMonth(); i++) {
        blank.push("");
    }

    //array of days in that month start from 1 to 28,29,30,31 (up to that month)
    let daysInMonth = [];
    for (let d = 1; d <= day.dateObject.daysInMonth(); d++) {
        daysInMonth.push(d);
    }

    //return currentDate (date of the current day)
    const currentDate = () => {
        return day.dateObject.format("D");
    }

    const currentMonth = day.dateObject.format("MMMM")
    const currentYear = day.dateObject.format("YYYY")






    return (
        <Fragment>
            {/* Pop up event content */}
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <Typography className={classes.typography}>This November.</Typography>
            </Popover>



            <div className="month-color text-center" >
                <div className="month-size">
                    <Container>
                        <Grid container spacing={0}>
                            <Grid item xs={2}>
                            </Grid>
                            <Grid item xs={1}>
                                <div className="previous-m" onClick={minusMonth}> &lt; </div>
                            </Grid>
                            <Grid item xs={6} onClick={handleClick}>
                                {currentMonth + " " + currentYear}

                            </Grid>
                            <Grid item xs={1}>
                                <div className="forward-m" onClick={addMonth}>&gt;</div>
                            </Grid>
                            <Grid item xs={2}>

                            </Grid>
                        </Grid>
                    </Container>

                </div>
                <div className="grid">

                    {days.map((dayName) => {
                        return <HeadCell head={dayName} />
                    })}

                    {blank.map((day) => {
                        return <Cell currentDate={currentDate} Content={day} />
                    })}
                    
                    {daysInMonth.map((day) => {
                        return <Cell currentDate={currentDate} Content={day} />
                    })}

                    {/*  <div>
                        <Link href="/event">
                            <button className="addEvent-button">Add Event</button>
                        </Link>
                    </div> */}

                </div>




            </div>





            <style jsx>
                {style}
            </style>
        </Fragment>
    );
};
export default Content;
