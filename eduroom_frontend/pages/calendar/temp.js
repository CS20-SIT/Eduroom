import React, { Fragment, useState } from 'react';
import utils from '../../styles/tutor/utils';

import { monthConverter } from '../../components/tutor/lib/utils';

const Calendar = ({
}) => {
  const now = new Date();
  const [date, setDate] = useState(now.getDate());
  const [month, setMonth] = useState(now.getMonth());
  const [year, setYear] = useState(now.getFullYear());

  // SETUP DATE AND DAY
  const today = {
    date: now.getDate(),
    month: now.getMonth(),
    year: now.getFullYear(),
  };
  var first = new Date(year, month, 1);
  var last = new Date(year, month + 1, 0);
  var firstDate = first.getDate();
  var lastDate = last.getDate();
  var firstDay = first.getDay();
  const size = firstDay + lastDate - firstDate + 1 + 7;

  // CALENDAR
  let calendar = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  for (let i = 7; i < firstDay + 7; i++) {
    calendar[i] = 0;
  }
  for (let i = firstDay + 7; i < size; i++) {
    calendar[i] = i - firstDay + 1 - 7;
  }

  // SET Time Selected
  let timeSelectedTmp = [];

  return (
    <Fragment>
      <div style={{ width: 100 + '%' }} className={`px-4 py-2`}>
        <div className='flex my-2'>
          {month != today.month || year != today.year ? (
            <div
              onClick={() => {
                if (month == 0) {
                  setMonth(11);
                  setYear(year - 1);
                } else {
                  setMonth(month - 1);
                }
                setDate(-1);
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
              setDate(-1);
            }}
            className='px-2 pointer'
          >{`>`}</div>
        </div>
        <div className='calendar my-6'>
          {calendar.map((i, index) => (
            <span
              className={`text-sm font-bold ${
                i < today.date && month == today.month ? 'disabled' : 'pointer'
              }`}
              key={index}
              onClick={() => {
                if (i < today.month && month == today.month) return;
                setDate(i);
              }}
            >
              {index > 6 ? (i > 0 ? i : ' ') : i}
              <span
                className={
                  i == date
                    ? 'selected'
                    : i == today.date && month == today.month
                    ? 'today'
                    : ''
                }
              />
            </span>
          ))}
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
    </Fragment>
  );
};

export default Calendar;
