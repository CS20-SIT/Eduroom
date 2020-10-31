import React, { Fragment } from 'react';
import utils from '../../../../styles/tutor/utils';

import {
  dayFormatter,
  timeFormatter,
} from '../../../../components/tutor/lib/utils';

import GeneralNoNav from '../../../../components/template/generalnonav';
const Temp = () => {
  const timeSlotFormatter = (t) => {
    t = t / 6 + 8;
    return timeFormatter(t);
  };
  return (
    <Fragment>
      <GeneralNoNav>
        <div className='bg-tutor'>
          <div className='container'>
            <div className='grid-container'>
              <div>
                <div className='text-lg font-bold'>Plan Your Time</div>
                <div className='text-md font-bold text-secondary left-pink px-4 py-1 my-4'>
                  Setup & Pricing
                </div>
                <div
                  className='w-full bg-navy text-white py-2 pointer'
                  style={{ textAlign: 'center', borderRadius: 4 + 'px' }}
                >
                  Publish
                </div>
              </div>
              <div>
                <div className='text-lg font-bold'>Available Day & Time</div>
                <div className='grid-slots my-8 relative'>
                  {[...Array(54)].map((e, i) =>
                    i == 0 ? (
                      <div></div>
                    ) : i > 0 && i < 6 ? (
                      <div
                        className='text-center py-2'
                        style={{ marginTop: 'auto' }}
                      >
                        {dayFormatter(i).substring(0, 3)}
                      </div>
                    ) : i % 6 == 0 ? (
                      <div
                        className={`text-sm relative px-2 ${
                          i == 48 ? 'last-slot' : ''
                        }`}
                        style={{ top: -5 + 'px', marginLeft: 'auto' }}
                      >
                        {timeSlotFormatter(i)}
                      </div>
                    ) : (
                      <div
                        className='flex px-4 py-2 justify-center items-center bg-white-faded'
                        style={{
                          borderRadius: 5 + 'px',
                          border: 1 + 'px solid rgba(87, 87, 87, 0.4)',
                        }}
                      >
                        <div>+</div>
                      </div>
                    )
                  )}
                </div>
                <div className='text-lg font-bold'>Price per Hour</div>
                <form className='flex my-2'>
                  <input
                    type='number'
                    className='border py-1 px-2'
                    style={{ borderRadius: 5 + 'px', width: 16 + '%' }}
                  />
                  <div className='text-lg font-bold text-secondary py-1 mx-4'>
                    THB
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{utils}</style>
        <style jsx>{`
          .left-pink {
            border-left: 5px solid #fb9ccb;
          }
          .grid-container {
            display: grid;
            grid-template-columns: 18% 1fr;
            gap: 2rem;
          }
          .status {
            margin: auto 0.2rem;
            width: 0.5rem;
            height: 0.5rem;
            border-radius: 50%;
          }
          .grid-slots {
            display: grid;
            grid-template-columns: 0.6fr repeat(5, 1fr);
            grid-template-rows: repeat(9, 1fr);
            gap: 0.5rem;
          }
          .last-slot {
            position: relative;
          }
          .last-slot::after {
            content: '05:00 PM';
            position: absolute;
            bottom: -18px;
            right: 0.5rem;
            width: auto;
          }
        `}</style>
      </GeneralNoNav>
    </Fragment>
  );
};
export default Temp;
