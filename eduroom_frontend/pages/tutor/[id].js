import React, { Fragment, useState } from 'react';
import utils from '../../styles/tutor/utils';
import GeneralNoNav from '../../components/template/generalnonav';
import {
  timeFormatter,
  monthConverter,
} from '../../components/tutor/lib/utils';

import Link from 'next/link';

import Calendar from '../../components/tutor/booking/calendar';
import Rating from '../../components/tutor/booking/rating';
import GroupBooking from '../../components/tutor/booking/group-booking';
import InstructorInfo from '../../components/tutor/booking/instructor-info';
import BookingSection from '../../components/tutor/booking/booking-section';
import BookingInfo from '../../components/tutor/booking/booking-info';
import BackgroundDrop from '../../components/tutor/booking/background-drop';

const Instructor = ({ instructor, reviews }) => {
  // console.log('instructorID', instructor.id);

  // BOOKING MODE SELECTION
  const [booking, setBooking] = useState(0);

  // DATE & TIME SELECTION
  const now = new Date();
  const [date, setDate] = useState(now.getDate());
  const [month, setMonth] = useState(now.getMonth());
  const [year, setYear] = useState(now.getFullYear());
  const [times, setTimes] = useState([]);

  // SET members group
  const [bookingGroup, setBookingGroup] = useState(false);
  const [students, setStudents] = useState([]);

  // SET Focus for background-dropdown-list
  const [focus, setFocus] = useState(false);

  return (
    <Fragment>
      <GeneralNoNav>
        <div className='bg-tutor'>
          <BackgroundDrop focus={focus} setFocus={setFocus} />
          <div className='container'>
            <InstructorInfo instructor={instructor} />
            <BookingSection booking={booking} setBooking={setBooking} />
            {booking == 0 ? (
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
                  <BookingInfo
                    instructor={instructor}
                    date={date}
                    month={month}
                    year={year}
                    times={times}
                    students={students}
                    bookingGroup={bookingGroup}
                    setBookingGroup={setBookingGroup}
                  />
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
      { date: 2, time: [9, 12, 13, 15, 16] },
      { date: 3, time: [11, 12, 15, 16] },
      { date: 4, time: [9, 10, 11, 12, 14, 15, 16] },
      { date: 5, time: [9, 12, 13, 14, 15] },
      { date: 6, time: [9, 10, 11, 12, 15, 16] },
      { date: 7, time: [9, 12, 13, 15, 16] },
      { date: 8, time: [11, 12, 15, 16] },
      { date: 9, time: [9, 10, 11, 12, 14, 15, 16] },
      { date: 10, time: [9, 12, 13, 14, 15] },
      { date: 11, time: [9, 10, 11, 12, 15, 16] },
      { date: 12, time: [9, 12, 13, 15, 16] },
      { date: 13, time: [11, 12, 15, 16] },
      { date: 14, time: [9, 10, 11, 12, 14, 15, 16] },
      { date: 15, time: [9, 12, 13, 14, 15] },
      { date: 16, time: [9, 10, 11, 12, 15, 16] },
      { date: 17, time: [9, 12, 13, 15, 16] },
      { date: 18, time: [11, 12, 15, 16] },
      { date: 19, time: [9, 10, 11, 12, 14, 15, 16] },
      { date: 20, time: [9, 12, 13, 14, 15] },
      { date: 21, time: [9, 10, 11, 12, 15, 16] },
      { date: 22, time: [9, 12, 13, 15, 16] },
      { date: 23, time: [11, 12, 15, 16] },
      { date: 24, time: [9, 10, 11, 12, 14, 15, 16] },
      { date: 25, time: [9, 12, 13, 14, 15] },
      { date: 26, time: [9, 10, 11, 12, 15, 16] },
      { date: 27, time: [9, 12, 13, 15, 16] },
      { date: 28, time: [11, 12, 15, 16] },
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
