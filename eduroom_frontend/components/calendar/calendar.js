import React, { Fragment } from 'react';
import Cell from '../../components/calendar/calendarCell'
// import { useRouter } from 'next/router';
import style from '../../styles/calendar/calendar'
const Content = () => {
    //   const router = useRouter();
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]


    return (
        <Fragment>
            <div>

                <div className="grid">
                    {days.map((day) => {
                        return <Cell Content={day} />
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
