import React, { Fragment } from 'react';
import style from '../../styles/calendar/calendar'
const Content = (props) => {
    //   const router = useRouter();
    const header = props.head;


    return (
        <Fragment>
            <div className="headerCell">{header}</div>
            <style jsx>
                {style}
            </style>
        </Fragment>
        
    );
};
export default Content;
