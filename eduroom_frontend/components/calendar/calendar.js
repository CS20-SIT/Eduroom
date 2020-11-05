import React, { Fragment, useState } from 'react';
import Cell from '../../components/calendar/calendarCell'
import HeadCell from '../../components/calendar/calendarHeader'
// import { useRouter } from 'next/router';
import style from '../../styles/calendar/calendar'
import moment from 'moment';
import Link from 'next/link';
import { Button } from '@material-ui/core'

const Content = () => {
    //   const router = useRouter();
    const days = moment.weekdaysShort();
    
    const [day, setDay] = useState({
        dateObject: moment()
    })

    // const monthsList = moment.months();
    // const monthNo = day.dateObject.month();

    const addMonth = ()=>{
        // const dateObject = moment(day.dateObject).set("month", monthNo);
        const dateObject = day.dateObject.add(1,"M")
        setDay(
            {...day, dateObject: dateObject}
        )
    }
    const minusMonth = ()=>{
        // const dateObject = moment(day.dateObject).set("month", monthNo);
        const dateObject = day.dateObject.add(-1,"M")
        setDay(
            {...day, dateObject: dateObject}
        )
    }


    const firstDayOfMonth = ()=>{
        let dateObj = day.dateObject
        let firstDay = moment(dateObj)
            .startOf("month")
            .format("d");
        return firstDay;
    }

    let blank = [];
    for(let i=0; i<firstDayOfMonth(); i++){
        blank.push("");
    }

    let daysInMonth = [];
    for(let d = 1; d<= day.dateObject.daysInMonth(); d++){
        daysInMonth.push(d);
    }

    const currentDate = ()=>{
        return day.dateObject.format("D");
    }

    const currentMonth = day.dateObject.format("MMMM")
    const currentYear = day.dateObject.format("YYYY")

    return (
        <Fragment>
            <div>
                <h1>{currentMonth + " "+currentYear}</h1>
                <button className="addEvent-button" onClick={minusMonth}>-</button>
                <button className="addEvent-button" onClick={addMonth}>+</button>
                
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
                </div>

                <Link href="/event">
                    <button className="addEvent-button">Add Event</button>
                </Link>
                

            </div>
            <style jsx>
                {style}
            </style>
        </Fragment>
    );
};
export default Content;
