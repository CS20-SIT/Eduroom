import React, { Fragment, useState } from 'react';
import utils from '../../../styles/tutor/utils';

const Mode = ({ requestMode, setRequestMode }) => {
  const requestModeHeader = ['All', 'Pending', 'Approved', 'Rejected'];
  return (
    <Fragment>
      <div className='flex my-6 '>
        {requestModeHeader.map((r, i) => (
          <div
            key={i}
            className={`border-secondary text-secondary rounded-md py-1 text-center mx-4 text-md pointer ${
              requestMode == i ? 'bg-navy text-white' : 'bg-white-faded'
            }`}
            style={{ width: '7rem' }}
            onClick={() => {
              setRequestMode(i);
            }}
          >
            {r}
          </div>
        ))}
      </div>
      <style jsx>{utils}</style>
      <style jsx>{``}</style>
    </Fragment>
  );
};
export default Mode;
