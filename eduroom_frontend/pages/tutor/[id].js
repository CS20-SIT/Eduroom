import React, { Fragment, useState } from 'react';
import utils from '../../styles/tutor/utils';
import GeneralNoNav from '../../components/template/generalnonav';

import Link from 'next/link';
const Temp = ({ instructor }) => {
  const [booking, setBooking] = useState(true);
  var date = new Date();
  var first = new Date(date.getFullYear(), date.getMonth(), 1);
  var last = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  var firstDate = first.getDate();
  var lastDate = last.getDate();
  var firstDay = first.getDay();
  const size = firstDay + lastDate - firstDate + 1 + 7;
  let dates = [];
  let tmp = 0;
  dates[tmp++] = 'SUN';
  dates[tmp++] = 'MON';
  dates[tmp++] = 'TUE';
  dates[tmp++] = 'WED';
  dates[tmp++] = 'THU';
  dates[tmp++] = 'FRI';
  dates[tmp++] = 'SAT';
  for (let i = 7; i < firstDay + 7; i++) {
    dates[i] = 0;
  }
  for (let i = firstDay + 7; i < size; i++) {
    dates[i] = i - firstDay + 1 - 7;
  }

  const [selected, setSelected] = useState(date.getDate());
  return (
    <Fragment>
      <GeneralNoNav>
        <div className='bg-tutor'>
          <div className='container'>
            <div className='flex my-8'>
              <div>
                <div
                  className='rounded-full bg-yellow'
                  style={{ width: 4 + 'rem', height: 4 + 'rem' }}
                ></div>
              </div>
              <div className='flex flex-col mx-3'>
                <div className='flex'>
                  <div className='font-lato font-bold text-xl text-primary'>
                    {instructor.name}
                  </div>
                  <div className='mx-2 flex items-center text-yellow'>
                    <i class='fas fa-star'></i>
                    <div className='text-sm mx-1 text-yellow'>
                      {instructor.rating}
                    </div>
                    <div className='text-sm text-secondary'>
                      (
                      {instructor.ratingCount > 1000
                        ? instructor.ratingCount / 1000 + 'k'
                        : instructor.ratingCount}
                      )
                    </div>
                  </div>
                </div>
                <div className='font-lato font-bold text-md text-secondary mx-1'>
                  {instructor.info}
                </div>
                <div className='font-lato font-bold text-md mx-1 my-2'>
                  {instructor.lorem}
                </div>
                <div className='flex my-2'>
                  <div
                    className={`mx-1 text-md font-bold pointer ${
                      booking ? 'text-navy text-underline' : 'text-secondary'
                    }`}
                    onClick={() => {
                      setBooking(true);
                    }}
                  >
                    Booking
                  </div>
                  <div
                    className={`mx-1 text-md font-bold pointer ${
                      !booking ? 'text-navy text-underline' : 'text-secondary'
                    }`}
                    onClick={() => {
                      setBooking(false);
                    }}
                  >
                    Reviews
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className='calendar px-8 py-4' style={{ width: 40 + '%' }}>
                {dates.map((i, index) => (
                  <span
                    className={`text-sm font-bold`}
                    key={index}
                    onClick={() => {
                      setSelected(i);
                    }}
                  >
                    {index > 6 ? (i > 0 ? i : ' ') : i}
                    <span className={i == selected ? 'selected' : ''} />
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <style jsx>{utils}</style>
      </GeneralNoNav>
    </Fragment>
  );
};
export async function getStaticPaths() {
  // Get every possible [id]
  const paths = [
    { params: { id: '1' } },
    { params: { id: '2' } },
    { params: { id: '3' } },
    { params: { id: '4' } },
    { params: { id: '5' } },
  ];

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // ID for fetching instructor information
  const id = params.id;
  // GET /tutor/instructor/info
  const instructor = {
    id,
    name: 'Thanawat Benjachatriroj',
    info: 'Frontend Developer',
    lorem:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac sit suspendisse viverra mattis varius eget sagittis. Lacus aenean dictum suspendisse consequat. Dignissim orci libero malesuada est. Porta id eu quam duis ornare lobortis ridiculus.',
    rating: 4.5,
    ratingCount: 2000,
    availabilities: [
      { day: 0, startTime: 9, endTime: 10 },
      { day: 0, startTime: 10, endTime: 11 },
      { day: 0, startTime: 11, endTime: 12 },
      { day: 0, startTime: 12, endTime: 13 },
      { day: 0, startTime: 15, endTime: 16 },
      { day: 0, startTime: 16, endTime: 17 },
      { day: 1, startTime: 10, endTime: 11 },
      { day: 1, startTime: 11, endTime: 12 },
      { day: 1, startTime: 14, endTime: 15 },
      { day: 1, startTime: 15, endTime: 16 },
      { day: 1, startTime: 16, endTime: 17 },
      { day: 2, startTime: 12, endTime: 13 },
      { day: 2, startTime: 13, endTime: 14 },
      { day: 2, startTime: 14, endTime: 15 },
      { day: 2, startTime: 15, endTime: 16 },
      { day: 2, startTime: 16, endTime: 17 },
      { day: 3, startTime: 9, endTime: 10 },
      { day: 3, startTime: 10, endTime: 11 },
      { day: 3, startTime: 11, endTime: 12 },
      { day: 4, startTime: 12, endTime: 13 },
      { day: 4, startTime: 15, endTime: 16 },
      { day: 4, startTime: 16, endTime: 17 },
      { day: 5, startTime: 10, endTime: 11 },
      { day: 5, startTime: 11, endTime: 12 },
      { day: 5, startTime: 14, endTime: 15 },
      { day: 6, startTime: 15, endTime: 16 },
      { day: 6, startTime: 16, endTime: 17 },
      { day: 6, startTime: 17, endTime: 18 },
    ],
    price: 2000,
  };

  return { props: { instructor } };
}

export default Temp;
