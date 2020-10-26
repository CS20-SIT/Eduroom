import React, { Fragment } from 'react';
import { useRouter } from 'next/router';
import style from '../../styles/calendar/calendar'
const Content = () => {
  const router = useRouter();
  return (
    <Fragment>
      <div>
        <h1 className="test">Hello Calendar</h1>
      </div>
      <style jsx>
        {style}
      </style>
    </Fragment>
  );
};
export default Content;
