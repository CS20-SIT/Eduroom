import React, { Fragment } from 'react';
// import { useRouter } from 'next/router';
import style from '../../styles/calendar/calendar'
const Content = () => {
    //   const router = useRouter();

    return (
        <Fragment>
            <div>
                <h1 className="test">Hello Calendar</h1>
                <div className="grid">
                    <div className="gridItem">Mon</div>
                    <div className="gridItem">Tue</div>
                    <div className="gridItem">Wed</div>
                    <div className="gridItem">Thu</div>
                    <div className="gridItem">Fri</div>
                    <div className="gridItem">Sat</div>
                    <div className="gridItem">Sun</div>

                    <div className="gridItem">1</div>
                    <div className="gridItem">2</div>
                    <div className="gridItem">3</div>
                    <div className="gridItem">4</div>
                    <div className="gridItem">5</div>
                    <div className="gridItem">6</div>
                    <div className="gridItem">7</div>
                    
                </div>
            </div>
            <style jsx>
                {style}
            </style>
        </Fragment>
    );
};
export default Content;
