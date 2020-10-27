import React, { Fragment, useState } from 'react';
import Cell from '../../components/calendar/calendarCell'
// import { useRouter } from 'next/router';
import style from '../../styles/calendar/calendar'
import moment from 'moment';

const Content = () => {
    //   const router = useRouter();
    const days = moment.weekdaysShort();
    const [day] = useState({dateObject: moment()})


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

    const currentDay = ()=>{
        return day.dateObject.format("D");
    }

    return (
        <Fragment>
            <div>

                <div className="grid">
                    {days.map((day) => {
                        return <Cell currentDate={currentDay} Content={day} />
                    })}
                    {blank.map((day) => {
                        return <Cell currentDate={currentDay} Content={day} />
                    })}
                    {daysInMonth.map((day) => {
                        return <Cell currentDate={currentDay} Content={day} />
                    })}
                </div>

            </div>
            <style jsx>
                {style}
            </style>
        </Fragment>
    );
};
export default Content;
