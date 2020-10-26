import React, { Fragment, useState } from 'react';
import utils from '../../styles/tutor/utils';
import GeneralNoNav from '../../components/template/generalnonav';

import {
  timeFormatter,
  monthConverter,
} from '../../components/tutor/lib/utils';

import Link from 'next/link';

const Temp = ({ instructor }) => {
  const [booking, setBooking] = useState(true);
  var date = new Date();
  const [month, setMonth] = useState(date.getMonth());
  const [year, setYear] = useState(date.getFullYear());
  var first = new Date(year, month, 1);
  var last = new Date(year, month + 1, 0);
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
  const today = date.getDate();

  let timeSelectedTmp = [];
  const [timeSelected, setTimeSelected] = useState([]);

  return (
    <Fragment>
      <GeneralNoNav>
        <div className='bg-tutor'>
          <div className='container'>
            <div className='flex my-4'>
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
                  {instructor.text}
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
            <div className='w-full flex justify-center'>
              <div style={{ width: 45 + '%' }} className={`px-4 py-2 mx-4`}>
                <div className='flex my-2'>
                  {month != date.getMonth() || year != date.getFullYear() ? (
                    <div
                      onClick={() => {
                        if (month == 0) {
                          setMonth(11);
                          setYear(year - 1);
                        } else {
                          setMonth(month - 1);
                        }
                      }}
                      className='px-2 pointer'
                    >{`<`}</div>
                  ) : (
                    ''
                  )}
                  <div className='w-full flex justify-center font-lato font-bold'>
                    {monthConverter(month)} {year}
                  </div>
                  <div
                    onClick={() => {
                      if (month == 11) {
                        setMonth(0);
                        setYear(year + 1);
                      } else {
                        setMonth(month + 1);
                      }
                    }}
                    className='px-2 pointer'
                  >{`>`}</div>
                </div>
                <div className='calendar my-6'>
                  {dates.map((i, index) => (
                    <span
                      className={`text-sm font-bold ${
                        i < today ? 'disabled' : 'pointer'
                      }`}
                      key={index}
                      onClick={() => {
                        if (i < today) return;
                        setSelected(i);
                        setTimeSelected([]);
                      }}
                    >
                      {index > 6 ? (i > 0 ? i : ' ') : i}
                      <span
                        className={
                          i == selected || i == today
                            ? i == selected
                              ? 'selected'
                              : month == date.getMonth()
                              ? 'today'
                              : ''
                            : ''
                        }
                      />
                    </span>
                  ))}
                </div>
                <div className='my-8'>
                  <div className='my-2 text-md font-bold text-secondary font-lato'>
                    Available Time
                  </div>
                  <div className='grid my-4'>
                    {instructor.times[selected - 1].time.map((e) => (
                      <div
                        onClick={() => {
                          timeSelectedTmp = [...timeSelected];
                          if (timeSelectedTmp[0] - e > 1) {
                            alert('Please select consecutive time slots');
                            return;
                          }
                          if (
                            e - timeSelectedTmp[timeSelectedTmp.length - 1] >
                            1
                          ) {
                            alert('Please select consecutive time slots');
                            return;
                          }
                          timeSelectedTmp.includes(e)
                            ? timeSelectedTmp.splice(
                                timeSelectedTmp.findIndex((x) => x == e),
                                1
                              )
                            : timeSelectedTmp.push(e);
                          timeSelectedTmp.sort(function (a, b) {
                            return +a - +b;
                          });
                          setTimeSelected(timeSelectedTmp);
                        }}
                        className={`pointer text-sm text-secondary font-bold rounded-md px-1 py-1 flex justify-center ${
                          timeSelected.includes(e) ? 'time-selected' : 'border'
                        }`}
                      >
                        {timeFormatter(e)} - {timeFormatter(e + 1)}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div
                style={{ width: 40 + '%', height: 100 + '%' }}
                className={`px-8 py-8 mx-4 shadow rounded-md bg-white-faded`}
              >
                <div className='text-lg font-bold font-lato spacing-md'>
                  BOOK AND PAY
                </div>
                <div className='text-md font-bold font-lato my-4 spacing-sm'>
                  Your Enrollment
                </div>
                <div className='px-2 my-4'>
                  <div className='text-sm font-bold font-lato my-2 spacing-sm'>
                    Date
                  </div>
                  <div className='text-sm font-quicksand font-bold text-secondary my-1 spacing-sm'>
                    {selected} {monthConverter(month)} {year}
                  </div>
                </div>
                <div className='px-2 my-4'>
                  <div className='text-sm font-bold font-lato my-2 spacing-sm'>
                    Time
                  </div>
                  {timeSelected.length == 0 ? (
                    <div className='text-sm font-quicksand font-bold text-secondary my-1 spacing-sm'>
                      Please select appointment times
                    </div>
                  ) : (
                    timeSelected.map((e) => (
                      <div className='text-sm font-quicksand font-bold text-secondary my-1 spacing-sm'>
                        {timeFormatter(e)} - {timeFormatter(e + 1)}
                      </div>
                    ))
                  )}
                </div>
                <div className='px-2 my-4'>
                  <div className='text-sm font-bold font-lato my-2 spacing-sm'>
                    Cost
                  </div>
                  <div className='text-sm font-quicksand font-bold text-secondary my-1 spacing-sm'>
                    {timeSelected.length * instructor.price} THB
                  </div>
                </div>
                <div
                  className={`font-lato font-bold text-md border rounded-md py-2 mx-8 flex justify-center pointer`}
                  onClick={() => {
                    // POST  /tutor/student/appointment
                    console.log(instructor.id);
                    console.log(timeSelected);
                    console.log(selected, month + 1, year);
                    console.log(timeSelected.length * instructor.price);
                  }}
                >
                  Book!
                </div>
              </div>
            </div>
          </div>
        </div>
        <style jsx>{utils}</style>
        <style jsx>{`
          .grid {
            display: grid;
            grid-template-rows: repeat(4, 1fr);
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
          }
          .time-selected {
            border: 1px solid #fb9ccb;
            box-shadow: 0px 0px 0px 1px rgba(251, 156, 203, 0.8);
          }
        `}</style>
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
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac sit suspendisse viverra mattis varius eget sagittis. Lacus aenean dictum suspendisse consequat. Dignissim orci libero malesuada est. Porta id eu quam duis ornare lobortis ridiculus.',
    rating: 4.5,
    ratingCount: 2000,
    times: [
      { date: 1, time: [8, 9, 10, 11, 12, 13, 14, 15, 16, 17] },
      { date: 2, time: [9, 12, 13, 15, 16, 17] },
      { date: 3, time: [11, 12, 15, 16, 17] },
      { date: 4, time: [9, 10, 11, 12, 14, 15, 16, 17] },
      { date: 5, time: [9, 12, 13, 14, 15, 17] },
      { date: 6, time: [9, 10, 11, 12, 15, 16, 17] },
      { date: 7, time: [9, 12, 13, 15, 16, 17] },
      { date: 8, time: [11, 12, 15, 16, 17] },
      { date: 9, time: [9, 10, 11, 12, 14, 15, 16, 17] },
      { date: 10, time: [9, 12, 13, 14, 15, 17] },
      { date: 11, time: [9, 10, 11, 12, 15, 16, 17] },
      { date: 12, time: [9, 12, 13, 15, 16, 17] },
      { date: 13, time: [11, 12, 15, 16, 17] },
      { date: 14, time: [9, 10, 11, 12, 14, 15, 16, 17] },
      { date: 15, time: [9, 12, 13, 14, 15, 17] },
      { date: 16, time: [9, 10, 11, 12, 15, 16, 17] },
      { date: 17, time: [9, 12, 13, 15, 16, 17] },
      { date: 18, time: [11, 12, 15, 16, 17] },
      { date: 19, time: [9, 10, 11, 12, 14, 15, 16, 17] },
      { date: 20, time: [9, 12, 13, 14, 15, 17] },
      { date: 21, time: [9, 10, 11, 12, 15, 16, 17] },
      { date: 22, time: [9, 12, 13, 15, 16, 17] },
      { date: 23, time: [11, 12, 15, 16, 17] },
      { date: 24, time: [9, 10, 11, 12, 14, 15, 16, 17] },
      { date: 25, time: [9, 12, 13, 14, 15, 17] },
      { date: 26, time: [9, 10, 11, 12, 15, 16, 17] },
      { date: 27, time: [9, 12, 13, 15, 16, 17] },
      { date: 28, time: [11, 12, 15, 16, 17] },
      { date: 29, time: [9, 10, 11, 12, 14, 15, 16, 17] },
      { date: 30, time: [9, 12, 13, 14, 15, 17] },
      { date: 31, time: [9, 10, 11, 12, 14, 15, 16, 17] },
    ],
    price: 2000,
  };

  return { props: { instructor } };
}

export default Temp;
