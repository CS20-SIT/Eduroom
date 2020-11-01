import React, { Fragment, useState } from 'react';
import utils from '../../styles/tutor/utils';
import GeneralNoNav from '../../components/template/generalnonav';
import {
  timeFormatter,
  monthConverter,
  dateFormatter,
} from '../../components/tutor/lib/utils';

import Link from 'next/link';

const Instructor = ({ instructor, highReview, lowReview, latestReview }) => {
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

  // SET Date Selected
  const [selected, setSelected] = useState(date.getDate());
  const today = date.getDate();

  // SET Time Selected
  let timeSelectedTmp = [];
  const [timeSelected, setTimeSelected] = useState([]);

  // SET members group
  const [memberMode, setMemberMode] = useState(false);
  const [members, setMembers] = useState([]);
  const [students, setStudents] = useState([]);
  const typingMember = (e) => {
    const key = e.target.value;
    if (key.length == 0) {
      setMembers([]);
      return;
    }
    // setInput(key);
    const filtered = mockup.filter((x) => {
      return (
        x.firstname.toLowerCase().includes(key.toLowerCase()) ||
        x.lastname.toLowerCase().includes(key.toLowerCase())
      );
    });
    setMembers(filtered);
  };
  const [focus, setFocus] = useState(false);
  const [hoverSelection, setHoverSelection] = useState(false);
  const [ratingSection, setRatingSection] = useState(1);

  const renderRating = (r) => {
    console.log(r);
    let stars = [];
    for (let i = 0; i < r; i++) {
      stars.push(<i className='fas fa-star'></i>);
    }
    return stars;
  };

  // GET /tutor/utils/id
  const mockup = [
    {
      id: 1,
      firstname: 'Thanawat',
      lastname: 'Benjachatriroj',
    },
    {
      id: 2,
      firstname: 'Alphav',
      lastname: 'Benjachatriroj',
    },
    {
      id: 3,
      firstname: 'Bravo',
      lastname: 'Benjachatriroj',
    },
    {
      id: 4,
      firstname: 'Charlie',
      lastname: 'Benjachatriroj',
    },
    {
      id: 5,
      firstname: 'Delta',
      lastname: 'Benjachatriroj',
    },
    {
      id: 6,
      firstname: 'Echo',
      lastname: 'Benjachatriroj',
    },
  ];

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
                <div style={{ width: 44 + '%' }} className={`px-4 py-2`}>
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
                          setSelected(-1);
                          setTimeSelected([]);
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
                        setSelected(-1);
                        setTimeSelected([]);
                      }}
                      className='px-2 pointer'
                    >{`>`}</div>
                  </div>
                  <div className='calendar my-6'>
                    {dates.map((i, index) => (
                      <span
                        className={`text-sm font-bold ${
                          i < today && month == date.getMonth()
                            ? 'disabled'
                            : 'pointer'
                        }`}
                        key={index}
                        onClick={() => {
                          console.log(i);
                          console.log(today);
                          console.log(selected);
                          console.log(month == date.getMonth());

                          if (i < today && month == date.getMonth()) return;
                          setSelected(i);
                          setTimeSelected([]);
                        }}
                      >
                        {index > 6 ? (i > 0 ? i : ' ') : i}
                        <span
                          className={
                            i == selected
                              ? 'selected'
                              : i == today && month == date.getMonth()
                              ? 'today'
                              : ''
                          }
                        />
                      </span>
                    ))}
                  </div>
                  <div className='my-4'>
                    <div className='my-4 text-md font-bold text-secondary font-lato'>
                      Available Time
                    </div>
                    {selected == -1 ? (
                      <div className='flex justify-center items-center border-dashed px-4 py-3'>
                        <div className='font-quicksand font-bold text-secondary text-md'>
                          Please select date before select time slots
                        </div>
                      </div>
                    ) : (
                      <div className='grid'>
                        {instructor.times[selected - 1].time.map((e) => (
                          <div
                            onClick={() => {
                              timeSelectedTmp = [...timeSelected];
                              if (timeSelectedTmp[0] - e > 1) {
                                alert('Please select consecutive time slots');
                                return;
                              }
                              if (
                                e -
                                  timeSelectedTmp[timeSelectedTmp.length - 1] >
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
                              timeSelected.includes(e)
                                ? 'time-selected'
                                : 'border'
                            }`}
                          >
                            {timeFormatter(e)} - {timeFormatter(e + 1)}
                          </div>
                        ))}
                      </div>
                    )}
                    <div className='text-error text-md my-4'>
                      * Please Select Consecutive Appointment Time Slots
                    </div>
                  </div>
                </div>
                {/* ------------------------------------------------------------- */}
                <div style={{ width: 54 + '%', height: 100 + '%' }}>
                  {memberMode ? (
                    <div
                      className={`w-full px-8 my-2 py-8 mx-4 shadow rounded-md bg-white-faded relative`}
                    >
                      <div
                        className='text-lg font-bold font-lato absolute top-0 right-0 mx-4 my-2 px-2 py-2 pointer text-secondary'
                        onClick={() => {
                          setMemberMode(false);
                        }}
                      >
                        x
                      </div>
                      <div className='flex relative'>
                        <div className='text-lg font-bold font-lato spacing-md'>
                          Members
                        </div>
                        <div style={{ flexGrow: 1 }} className='my-auto'>
                          <div className='tooltip'>
                            <div>?</div>
                            <div className='tips'>
                              The members are not including yourself
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='relative'>
                        <form className='relative'>
                          <input
                            className='input--members'
                            type='text'
                            id='searchbar'
                            placeholder='Firstname or Lastname'
                            autoComplete='off'
                            onChange={typingMember}
                            onFocus={(e) => {
                              typingMember(e);
                              setFocus(true);
                            }}
                          />

                          <i
                            className='fa fa-search absolute my-3 '
                            style={{
                              marginLeft: -2 + 'rem',
                              color: 'rgba(83, 83, 83, 0.4)',
                            }}
                          ></i>
                        </form>
                        {focus && members.length > 0 ? (
                          <div className='dropdown--list'>
                            {members.map((m, i) => (
                              <div
                                className={`dropdown--item pointer ${
                                  hoverSelection == i
                                    ? 'bg-secondary-faded '
                                    : ''
                                }`}
                                onClick={() => {
                                  setMembers([]);
                                  setFocus(false);
                                  document.getElementById('searchbar').value =
                                    '';
                                  const tmp = [...students];
                                  const check = tmp.findIndex((s) => {
                                    return s.firstname == m.firstname;
                                  });
                                  if (check != -1) return;
                                  tmp.push(m);
                                  setStudents(tmp);
                                }}
                                onMouseEnter={() => {
                                  setHoverSelection(i);
                                }}
                                onMouseLeave={() => {
                                  setHoverSelection(-1);
                                }}
                              >
                                {m.firstname} {m.lastname}
                              </div>
                            ))}
                          </div>
                        ) : (
                          ''
                        )}
                      </div>
                      <div className='flex flex-wrap'>
                        {students.map((s, i) => (
                          <span className='shadow rounded-md px-2 py-1 mx-1 my-1'>
                            <span className='text-md font-bold text-secondary opacity-80'>
                              {s.firstname} {s.lastname}{' '}
                              <span
                                className='font-light px-1 pointer'
                                onClick={() => {
                                  let tmp = [...students];
                                  tmp.splice(i, 1);
                                  setStudents(tmp);
                                }}
                              >
                                x
                              </span>
                            </span>
                          </span>
                        ))}
                      </div>
                    </div>
                  ) : (
                    ''
                  )}
                  <div
                    className={`w-full px-8 py-8 my-2 mx-4 shadow rounded-md bg-white-faded`}
                  >
                    <div className='text-lg font-bold font-lato spacing-md'>
                      BOOK AND PAY
                    </div>
                    {memberMode ? (
                      ''
                    ) : (
                      <div className='text-md font-bold font-lato my-4 spacing-sm'>
                        Your Enrollment
                      </div>
                    )}

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
                        <div className='text-sm font-quicksand font-bold text-secondary my-1 spacing-sm'>
                          {timeFormatter(timeSelected[0])} -{' '}
                          {timeFormatter(
                            timeSelected[timeSelected.length - 1] + 1
                          )}
                        </div>
                      )}
                    </div>
                    <div className='px-2 my-4'>
                      <div className='text-sm font-bold font-lato my-2 spacing-sm'>
                        Cost
                      </div>
                      <div className='text-sm font-quicksand font-bold text-secondary my-1 spacing-sm'>
                        {timeSelected.length *
                          instructor.price *
                          (students.length + 1)}{' '}
                        THB
                      </div>
                    </div>
                    {memberMode ? (
                      ''
                    ) : (
                      <div
                        className={`font-lato font-bold text-md border-navy bg-white rounded-md py-2 my-4 mx-8 flex justify-center pointer text-navy`}
                        onClick={() => {
                          // SET Group Mode
                          setMemberMode(true);
                        }}
                      >
                        Book with Friends
                      </div>
                    )}
                    <div
                      className={`font-lato font-bold text-md border-navy bg-white rounded-md py-2 mx-8 flex justify-center pointer text-navy`}
                      onClick={() => {
                        // POST  /tutor/student/appointment
                        location.reload();
                      }}
                    >
                      Book!
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className='mx-8'>
                <div className='font-bold text-lg '>
                  How Students Rated This Instructor
                </div>
                <div className='flex my-2'>
                  <div
                    className={`text-md font-bold pointer  ${
                      ratingSection == 1
                        ? 'text-navy'
                        : 'text-secondary opacity-50'
                    }`}
                    onClick={() => {
                      setRatingSection(1);
                    }}
                  >
                    Highest Rated
                  </div>
                  <div
                    className={`text-md font-bold pointer  mx-6 ${
                      ratingSection == 2
                        ? 'text-navy'
                        : 'text-secondary opacity-50'
                    }`}
                    onClick={() => {
                      setRatingSection(2);
                    }}
                  >
                    Lowest Rated
                  </div>
                  <div
                    className={`text-md font-bold pointer ${
                      ratingSection == 3
                        ? 'text-navy'
                        : 'text-secondary opacity-50'
                    }`}
                    onClick={() => {
                      setRatingSection(3);
                    }}
                  >
                    Most Recent
                  </div>
                </div>
                {ratingSection == 1 || ratingSection == 2
                  ? ratingSection == 1
                    ? highReview.map((r) => (
                        <div className='py-4 px-8 my-6 rounded-sm shadow w-full'>
                          <div className='flex'>
                            <div className='profile--review'></div>
                            <div className='mx-4'>
                              <div className='font-bold text-lg'>{r.name}</div>
                              <div className='font-bold text-lg'>
                                <div className='flex text-yellow my-1 text-md items-center'>
                                  {renderRating(r.score)}
                                  <span className='text-secondary opacity-50 text-small font-normal text-md mx-2'>
                                    ({dateFormatter(r.date)})
                                  </span>
                                </div>
                              </div>
                              <div className='font-bold text-md text-secondary'>
                                {r.desc}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
                    : lowReview.map((r) => (
                        <div className='py-4 px-8 my-6 rounded-sm shadow w-full'>
                          <div className='flex'>
                            <div className='profile--review'></div>
                            <div className='mx-4'>
                              <div className='font-bold text-lg'>{r.name}</div>
                              <div className='font-bold text-lg'>
                                <div className='flex text-yellow my-1 text-md items-center'>
                                  {renderRating(r.score)}
                                  <span className='text-secondary opacity-50 text-small font-normal text-md mx-2'>
                                    ({dateFormatter(r.date)})
                                  </span>
                                </div>
                              </div>
                              <div className='font-bold text-md text-secondary'>
                                {r.desc}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
                  : latestReview.map((r) => (
                      <div className='py-4 px-8 my-6 rounded-sm shadow w-full'>
                        <div className='flex'>
                          <div className='profile--review'></div>
                          <div className='mx-4'>
                            <div className='font-bold text-lg'>{r.name}</div>
                            <div className='font-bold text-lg'>
                              <div className='flex text-yellow my-1 text-md items-center'>
                                {renderRating(r.score)}
                                <span className='text-secondary opacity-50 text-small font-normal text-md mx-2'>
                                  ({dateFormatter(r.date)})
                                </span>
                              </div>
                            </div>
                            <div className='font-bold text-md text-secondary'>
                              {r.desc}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
              </div>
            )}
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
          .profile--review {
            width: 4rem;
            height: 4rem;
            border-radius: 50%;
            background-color: lightpink;
            opacity: 0.4;
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
  for (let i = 0; i < sortable.length; i++) {
    lowReview.push(sortable[i][1]);
    highReview.push(sortable[sortable.length - i - 1][1]);
  }

  const latestReview = [];
  sortable.sort(function (a, b) {
    return a[1].date - b[1].date;
  });
  for (let i = 0; i < sortable.length; i++) {
    latestReview.push(sortable[sortable.length - i - 1][1]);
  }

  return { props: { instructor, review, highReview, lowReview, latestReview } };
}

export default Instructor;
