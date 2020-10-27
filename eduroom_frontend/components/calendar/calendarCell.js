import React, { Fragment } from 'react';
// import { useRouter } from 'next/router';
import style from '../../styles/calendar/calendar'
const Content = (props) => {
    //   const router = useRouter();
    // console.log(props.Content);
    return (
        <Fragment>
            <div className="gridItem">{props.Content}</div>
            <style jsx>
                {style}
            </style>
        </Fragment>
        
    );
};
export default Content;
