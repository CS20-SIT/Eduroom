import React, { Fragment, useState } from 'react';
import utils from '../../../../styles/tutor/utils';

import {
  dayFormatter,
  timeFormatter,
} from '../../../../components/tutor/lib/utils';

import GeneralNoNav from '../../../../components/template/generalnonav';
const Availability = ({ availabilities, price }) => {
  const timeSlotFormatter = (t) => {
    t = t / 6 + 8;
    return timeFormatter(t);
  };
  const [timeSlots, setTimeSlots] = useState(availabilities);
  const timeSelect = (i) => {
    const day = Math.floor(i % 6);
    const time = Math.floor(i / 6 + 8);
    let tmp = timeSlots;
    if (tmp[day].includes(time)) tmp[day].splice(tmp[day].indexOf(time), 1);
    else tmp[day].push(time);
    tmp[1].sort();
    tmp[2].sort();
    tmp[3].sort();
    tmp[4].sort();
    tmp[5].sort();
    setTimeSlots(tmp);
    // console.log(JSON.stringify(timeSlots));
  };
  const [hoverSlot, setHoverSlot] = useState(-1);
  const [cost, setCost] = useState(price);

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
                  onClick={() => {
                    // POST /tutor/instructor/availability
                    console.log(timeSlots);
                    console.log(cost);
                  }}
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
                        className={`flex px-4 py-2 justify-center items-center pointer ${
                          timeSlots[Math.floor(i % 6)].includes(
                            Math.floor(i / 6 + 8)
                          )
                            ? hoverSlot == i
                              ? 'bg-yellow-faded'
                              : 'bg-pink'
                            : hoverSlot == i
                            ? 'bg-yellow-faded'
                            : 'bg-white-faded'
                        } `}
                        style={{
                          borderRadius: 5 + 'px',
                          border: 1 + 'px solid rgba(87, 87, 87, 0.4)',
                        }}
                        onMouseEnter={() => {
                          setHoverSlot(i);
                        }}
                        onMouseLeave={() => {
                          setHoverSlot(-1);
                        }}
                        onClick={() => timeSelect(i)}
                      >
                        <div>
                          {timeSlots[Math.floor(i % 6)].includes(
                            Math.floor(i / 6 + 8)
                          )
                            ? ''
                            : '+'}
                        </div>
                      </div>
                    )
                  )}
                </div>
                <div className='text-lg font-bold'>Price per Hour</div>
                <form className='flex my-2'>
                  <input
                    value={cost}
                    type='number'
                    min='0'
                    className='border py-1 px-2'
                    onChange={(e) => {
                      setCost(e.target.value);
                    }}
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
          .bg-yellow-faded {
            background-color: rgba(252, 169, 34, 0.2);
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

export async function getStaticProps() {
  // GET /tutor/instructor/availability
  const availabilities = {
    1: [15, 16],
    2: [9, 10, 11, 12],
    3: [11, 12],
    4: [13, 14, 15],
    5: [9, 10],
  };
  const price = 2000;

  return { props: { availabilities, price } };
}
export default Availability;
