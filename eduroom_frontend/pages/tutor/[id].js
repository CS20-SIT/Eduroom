import React, { Fragment, useState } from 'react';
import utils from '../../styles/tutor/utils';
import GeneralNoNav from '../../components/template/generalnonav';
import {
  timeFormatter,
  monthConverter,
  dateFormatter,
} from '../../components/tutor/lib/utils';

import Link from 'next/link';

import Calendar from '../../components/tutor/booking/calendar';
import Rating from '../../components/tutor/booking/rating';
import GroupBooking from '../../components/tutor/booking/group-booking';

const Instructor = ({ instructor, reviews }) => {
  // console.log('instructorID', instructor.id);

  // console.log('reviews', reviews);

  // BOOKING MODE SELECTION
  const [booking, setBooking] = useState(true);

  // DATE & TIME SELECTION
  const now = new Date();
  const [date, setDate] = useState(now.getDate());
  const [month, setMonth] = useState(now.getMonth());
  const [year, setYear] = useState(now.getFullYear());
  const [times, setTimes] = useState([]);

  // SET members group
  const [bookingGroup, setBookingGroup] = useState(false);
  const [students, setStudents] = useState([]);

  const [focus, setFocus] = useState(false);

  return (
    <Fragment>
      <GeneralNoNav>
        <div className='bg-tutor'>
          {focus ? (
            <div
              className='fixed top-0 left-0 right-0 bottom-0 z-5'
              onClick={() => {
                setFocus(false);
              }}
            ></div>
          ) : (
            ''
          )}
          <div className='container'>
            <div className='flex'>
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
                    <i className='fas fa-star'></i>
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
            {booking ? (
              <div className='w-full flex justify-between'>
                <Calendar
                  instructor={instructor}
                  date={date}
                  setDate={setDate}
                  month={month}
                  setMonth={setMonth}
                  year={year}
                  setYear={setYear}
                  times={times}
                  setTimes={setTimes}
                />
                {/* ------------------------------------------------------------- */}
                <div style={{ width: 54 + '%', height: 100 + '%' }}>
                  {bookingGroup ? (
                    <GroupBooking
                      setBookingGroup={setBookingGroup}
                      students={students}
                      setStudents={setStudents}
                      focus={focus}
                      setFocus={setFocus}
                    />
                  ) : null}
                  <div
                    className={`w-full px-8 py-8 my-2 mx-4 shadow rounded-md bg-white-faded`}
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
                      {date == -1 ? (
                        <div className='text-sm font-quicksand font-bold text-secondary my-1 spacing-sm'>
                          Please select date
                        </div>
                      ) : (
                        <div className='text-sm font-quicksand font-bold text-secondary my-1 spacing-sm'>
                          {date} {monthConverter(month)} {year}
                        </div>
                      )}
                    </div>
                    <div className='px-2 my-4'>
                      <div className='text-sm font-bold font-lato my-2 spacing-sm'>
                        Time
                      </div>
                      {times.length == 0 ? (
                        <div className='text-sm font-quicksand font-bold text-secondary my-1 spacing-sm'>
                          Please select appointment times
                        </div>
                      ) : (
                        <div className='text-sm font-quicksand font-bold text-secondary my-1 spacing-sm'>
                          {timeFormatter(times[0])} -{' '}
                          {timeFormatter(times[times.length - 1] + 1)}
                        </div>
                      )}
                    </div>
                    <div className='px-2 my-4'>
                      <div className='text-sm font-bold font-lato my-2 spacing-sm'>
                        Cost
                      </div>
                      <div className='text-sm font-quicksand font-bold text-secondary my-1 spacing-sm'>
                        {times.length *
                          instructor.price *
                          (students.length + 1)}{' '}
                        THB
                      </div>
                    </div>
                    {bookingGroup ? (
                      ''
                    ) : (
                      <div
                        className={`font-lato font-bold text-md border-navy bg-white rounded-md py-2 my-4 mx-8 flex justify-center pointer text-navy`}
                        onClick={() => {
                          // SET Group Mode
                          setBookingGroup(true);
                        }}
                      >
                        Book with Friends
                      </div>
                    )}
                    <div
                      className={`font-lato font-bold text-md border-navy bg-white rounded-md py-2 mx-8 flex justify-center text-navy ${
                        times.length == 0 ? 'disabled' : 'pointer'
                      }`}
                      onClick={() => {
                        if (times.length == 0) return;
                        // POST  /tutor/student/appointment
                        console.log('id', instructor.id);
                        console.log('startTime', times[0]);
                        console.log('endTime', times[times.length - 1] + 1);
                        console.log('date', `${date}-${month + 1}-${year}`);
                        console.log('price', instructor.price);
                        console.log('members', students);

                        location.reload();
                      }}
                    >
                      Book!
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <Rating reviews={reviews} />
            )}
          </div>
        </div>
        <style jsx>{utils}</style>
      </GeneralNoNav>
    </Fragment>
  );
};

export async function getServerSideProps(ctx) {
  // ID for fetching instructor information
  const id = ctx.query.id;

  // GET /tutor/instructor/info -> id
  const instructor = {
    id,
    name: 'Thanawat Benjachatriroj',
    info: 'Frontend Developer',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac sit suspendisse viverra mattis varius eget sagittis. Lacus aenean dictum suspendisse consequat. Dignissim orci libero malesuada est. Porta id eu quam duis ornare lobortis ridiculus.',
    rating: 4.5,
    ratingCount: 2000,
    times: [
      { date: 1, time: [9, 10, 11, 12, 13, 14, 15, 16] },
      { date: 2, time: [9, 12, 13, 15, 16, 17] },
      { date: 3, time: [11, 12, 15, 16, 17] },
      { date: 4, time: [9, 10, 11, 12, 14, 15, 16] },
      { date: 5, time: [9, 12, 13, 14, 15, 17] },
      { date: 6, time: [9, 10, 11, 12, 15, 16] },
      { date: 7, time: [9, 12, 13, 15, 16, 17] },
      { date: 8, time: [11, 12, 15, 16, 17] },
      { date: 9, time: [9, 10, 11, 12, 14, 15, 16] },
      { date: 10, time: [9, 12, 13, 14, 15, 17] },
      { date: 11, time: [9, 10, 11, 12, 15, 16] },
      { date: 12, time: [9, 12, 13, 15, 16, 17] },
      { date: 13, time: [11, 12, 15, 16, 17] },
      { date: 14, time: [9, 10, 11, 12, 14, 15, 16] },
      { date: 15, time: [9, 12, 13, 14, 15, 17] },
      { date: 16, time: [9, 10, 11, 12, 15, 16, 17] },
      { date: 17, time: [9, 12, 13, 15, 16, 17] },
      { date: 18, time: [11, 12, 15, 16, 17] },
      { date: 19, time: [9, 10, 11, 12, 14, 15, 16] },
      { date: 20, time: [9, 12, 13, 14, 15, 17] },
      { date: 21, time: [9, 10, 11, 12, 15, 16, 17] },
      { date: 22, time: [9, 12, 13, 15, 16, 17] },
      { date: 23, time: [11, 12, 15, 16, 17] },
      { date: 24, time: [9, 10, 11, 12, 14, 15, 16] },
      { date: 25, time: [9, 12, 13, 14, 15, 17] },
      { date: 26, time: [9, 10, 11, 12, 15, 16, 17] },
      { date: 27, time: [9, 12, 13, 15, 16, 17] },
      { date: 28, time: [11, 12, 15, 16, 17] },
      { date: 29, time: [9, 10, 11, 12, 14, 15, 16] },
      { date: 30, time: [9, 12, 13, 14, 15] },
      { date: 31, time: [9, 10, 11, 12, 13, 14, 15, 16] },
    ],
    price: 2000,
  };

  // GET /tutor/appointment/review
  const review = [
    {
      score: 5,
      desc: 'Very good instructor',
      name: 'John Doe',
      date: 20201009,
    },
    {
      score: 2,
      desc: 'I love you, Thx for everything',
      name: 'Mama Bear',
      date: 20201012,
    },
    {
      score: 4,
      desc: 'Nice Restaurant, Good Fooooodddd!!',
      name: 'Bonchon',
      date: 20201130,
    },
    {
      score: 1,
      desc: 'I REALLY NEED BOBA MILK TEA LIKE NOW!',
      name: 'Boba NumbarWann',
      date: 20200924,
    },
  ];
  var sortable = [];
  for (var r in review) {
    sortable.push([r, review[r]]);
  }
  sortable.sort(function (a, b) {
    return a[1].score - b[1].score;
  });
  const highReview = [];
  const lowReview = [];
  const latestReview = [];
  for (let i = 0; i < sortable.length; i++) {
    lowReview.push(sortable[i][1]);
    highReview.push(sortable[sortable.length - i - 1][1]);
  }
  sortable.sort(function (a, b) {
    return a[1].date - b[1].date;
  });
  for (let i = 0; i < sortable.length; i++) {
    latestReview.push(sortable[sortable.length - i - 1][1]);
  }

  const reviews = [highReview, lowReview, latestReview];

  return { props: { instructor, review, reviews } };
}

export default Instructor;
