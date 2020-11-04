import React, { Fragment, useState } from 'react';
import utils from '../../../styles/tutor/utils';

import { dayFormatter, timeFormatter } from '../lib/utils';

const AvailabilityEdit = ({
  timeSections,
  setTimeSections,
  cost,
  setCost,
  gridAreaDays,
  gridAreaTimes,
  setTimeSlots,
  timeSlots,
}) => {
  const [hoverSlot, setHoverSlot] = useState(-1);

  const gridSections = ['a', 'b', 'c', 'd', 'e'];
  //   console.log(timeSections);

  return (
    <Fragment>
      <div>
        <div className='text-lg font-bold'>Available Day & Time</div>
        <div className='grid-slots-comp my-2 relative'>
          {gridAreaDays.map((d, i) => (
            <div
              key={i}
              style={{ gridArea: d.toLowerCase(), marginTop: 'auto' }}
              className='text-center py-2'
            >
              {d}
            </div>
          ))}
          {gridAreaTimes.map((t, i) => (
            <div
              key={i}
              style={{
                gridArea: t.id,
                top: -5 + 'px',
                marginLeft: 'auto',
              }}
              className={`text-sm relative px-2 ${i == 7 ? 'last-slot' : ''}`}
            >
              {timeFormatter(t.time)}
            </div>
          ))}
          <div style={{ gridArea: 'x' }}></div>
          {[...Array(40)].map((a, i) => (
            <div
              onClick={() => {
                let timeTmp = [...timeSections];
                if (timeTmp[parseInt(i % 5)].includes(parseInt(i / 5))) {
                  console.log('REMOVED');
                  timeTmp[parseInt(i % 5)].splice(
                    timeTmp[parseInt(i % 5)].indexOf(parseInt(i / 5)),
                    1
                  );
                } else {
                  console.log('ADDED');
                  timeTmp[parseInt(i % 5)].push(parseInt(i / 5));
                }
                timeTmp[parseInt(i % 5)].sort();

                let table = [
                  [[], [], [], []],
                  [[], [], [], []],
                  [[], [], [], []],
                  [[], [], [], []],
                  [[], [], [], []],
                ];
                for (let x = 0; x < 5; x++) {
                  let c = 0;
                  if (timeTmp[x][0] || timeTmp[x][0] == 0)
                    table[x][c].push(timeTmp[x][0]);
                  for (let y = 0; y < timeTmp[x].length - 1; y++) {
                    if (timeTmp[x][y] + 1 != timeTmp[x][y + 1]) {
                      c++;
                    }
                    table[x][c].push(timeTmp[x][y + 1]);
                  }
                }

                console.log(table);
                const gridAreas = [[], [], [], [], []];
                for (let i = 0; i < 40; i++) {
                  gridAreas[parseInt(i / 8)].push('q' + i);
                }
                let tmp = [...gridAreas];
                for (let z = 0; z < 5; z++) {
                  table[z].forEach((x, i) => {
                    x.forEach((y) => {
                      tmp[z][y] = gridSections[z] + i;
                    });
                  });
                }
                console.log(tmp);

                setTimeSections(timeTmp);
                setTimeSlots(tmp);
              }}
              key={i}
              className={` px-4 py-6 shadow relative  ${
                timeSections[parseInt(i % 5)].includes(parseInt(i / 5))
                  ? 'bg-pink minus'
                  : 'bg-yellow-faded plus'
              }`}
            ></div>
          ))}
        </div>
        <div className='flex items-center' style={{ marginTop: '4rem' }}>
          <div className='text-lg font-bold mx-4 '>Price per Hour :</div>
          <input
            value={cost}
            type='number'
            min='0'
            className='border py-1 px-2 input--members'
            onChange={(e) => {
              setCost(e.target.value);
            }}
            style={{ borderRadius: 5 + 'px', width: 16 + '%' }}
          />
          <div className='text-lg font-bold text-secondary py-1 mx-4'>THB</div>
        </div>
      </div>

      <style jsx>{utils}</style>
      <style jsx>{`
        .bg-yellow-faded {
          background-color: rgba(252, 169, 34, 0.2);
        }
        .grid-slots-comp {
          display: grid;
          grid-template-columns: 0.6fr repeat(5, 1fr);
          grid-template-rows: repeat(9, 1fr);
          gap: 0.5rem;
          grid-template-areas:
            'x mon tue wed thu fri'
            'Ta a a a a a'
            'Tb a a a a a'
            'Tc a a a a a'
            'Td a a a a a'
            'Te a a a a a'
            'Tf a a a a a'
            'Tg a a a a a'
            'Th a a a a a';
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
        .removal {
          display: none;
        }
        .minus::before {
          content: '-';
          position: absolute;
          transform: translate(-50%, -50%);
          top: 50%;
          left: 50%;
          font-size: 1rem;
          font-weight: 300;
        }
        .plus::before {
          content: '+';
          position: absolute;
          transform: translate(-50%, -50%);
          top: 50%;
          left: 50%;
          font-size: 0.65rem;
          font-weight: 300;
        }
      `}</style>
    </Fragment>
  );
};

export default AvailabilityEdit;
