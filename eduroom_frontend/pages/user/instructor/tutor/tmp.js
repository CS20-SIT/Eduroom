import React, { Fragment, useState } from 'react';
import utils from '../../../../styles/tutor/utils';

import {
  dayFormatter,
  timeFormatter,
} from '../../../../components/tutor/lib/utils';

import GeneralNoNav from '../../../../components/template/generalnonav';
const Availability = ({ availabilities, price }) => {
  const gridAreas = [[], [], [], [], []];

  const gridSections = ['a', 'b', 'c', 'd', 'e'];

  for (let i = 0; i < 40; i++) {
    gridAreas[parseInt(i / 8)].push('q' + i);
  }

  const gridAreaDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
  const gridAreaTimes = [
    { id: 'Ta', time: 9 },
    { id: 'Tb', time: 10 },
    { id: 'Tc', time: 11 },
    { id: 'Td', time: 12 },
    { id: 'Te', time: 13 },
    { id: 'Tf', time: 14 },
    { id: 'Tg', time: 15 },
    { id: 'Th', time: 16 },
  ];

  const [timeSlots, setTimeSlots] = useState(gridAreas);

  const [timeSections, setTimeSections] = useState([
    [0, 1, 2, 3, 5, 6],
    [],
    [0, 2, 3, 4, 6],
    [],
    [],
  ]);

  const [timeTable, setTimeTable] = useState([
    [[], [], [], []],
    [[], [], [], []],
    [[], [], [], []],
    [[], [], [], []],
    [[], [], [], []],
  ]);

  return (
    <Fragment>
      <GeneralNoNav>
        <div className='bg-tutor'>
          <div className='container'>
            <div className='grid-slots my-8 relative'>
              {gridAreaDays.map((d, i) => (
                <div key={i} style={{ gridArea: d.toLowerCase() }}>
                  {d}
                </div>
              ))}
              {gridAreaTimes.map((t, i) => (
                <div key={i} style={{ gridArea: t.id }}>
                  {timeFormatter(t.time)}
                </div>
              ))}
              {[...Array(40)].map((a, i) => (
                <div
                  key={i}
                  className={` px-4 py-6 pointer ${
                    timeSlots[parseInt(i / 8)].includes('q' + i)
                      ? 'bg-yellow-faded'
                      : 'removal'
                  }`}
                  style={{ gridArea: 'q' + i }}
                  onClick={() => {
                    let tmp = [...timeSections];

                    if (tmp[parseInt(i / 8)].includes(parseInt(i % 8)))
                      tmp[parseInt(i / 8)].splice(
                        tmp[parseInt(i / 8)].indexOf(parseInt(i % 8)),
                        1
                      );
                    else tmp[parseInt(i / 8)].push(parseInt(i % 8));

                    tmp[parseInt(i / 8)].sort();
                    setTimeSections(tmp);
                    let table = [
                      [[], [], [], []],
                      [[], [], [], []],
                      [[], [], [], []],
                      [[], [], [], []],
                      [[], [], [], []],
                    ];
                    for (let x = 0; x < 5; x++) {
                      let c = 0;
                      if (tmp[x][0] || tmp[x][0] == 0)
                        table[x][c].push(tmp[x][0]);
                      for (let y = 0; y < tmp[x].length - 1; y++) {
                        if (tmp[x][y] + 1 != tmp[x][y + 1]) {
                          c++;
                        }
                        table[x][c].push(tmp[x][y + 1]);
                      }
                    }
                    setTimeTable(table);
                    tmp = [...timeSlots];
                    for (let z = 0; z < 5; z++) {
                      table[z].forEach((x, i) => {
                        x.forEach((y) => {
                          console.log(x, y, i);

                          tmp[z][y] = gridSections[z] + i;
                        });
                      });
                    }
                    setTimeSlots(tmp);
                  }}
                ></div>
              ))}

              {[...Array(20)].map((e, i) => (
                <div
                  style={{
                    gridArea:
                      gridSections[parseInt(i % 5)] + '' + parseInt(i % 4),
                  }}
                  className='bg-pink'
                ></div>
              ))}
            </div>
          </div>
        </div>

        <style jsx>{utils}</style>
        <style jsx>{`
          .bg-yellow-faded {
            background-color: rgba(252, 169, 34, 0.2);
          }
          .grid-slots {
            display: grid;
            grid-template-columns: 0.6fr repeat(5, 1fr);
            grid-template-rows: repeat(9, 1fr);
            gap: 0.5rem;
            grid-template-areas:
              'x mon tue wed thu fri'
              'Ta ${timeSlots[0][0]} ${timeSlots[1][0]} ${timeSlots[2][0]} ${timeSlots[3][0]} ${timeSlots[4][0]}'
              'Tb ${timeSlots[0][1]} ${timeSlots[1][1]} ${timeSlots[2][1]} ${timeSlots[3][1]} ${timeSlots[4][1]}'
              'Tc ${timeSlots[0][2]} ${timeSlots[1][2]} ${timeSlots[2][2]} ${timeSlots[3][2]} ${timeSlots[4][2]}'
              'Td ${timeSlots[0][3]} ${timeSlots[1][3]} ${timeSlots[2][3]} ${timeSlots[3][3]} ${timeSlots[4][3]}'
              'Te ${timeSlots[0][4]} ${timeSlots[1][4]} ${timeSlots[2][4]} ${timeSlots[3][4]} ${timeSlots[4][4]}'
              'Tf ${timeSlots[0][5]} ${timeSlots[1][5]} ${timeSlots[2][5]} ${timeSlots[3][5]} ${timeSlots[4][5]}'
              'Tg ${timeSlots[0][6]} ${timeSlots[1][6]} ${timeSlots[2][6]} ${timeSlots[3][6]} ${timeSlots[4][6]}'
              'Th ${timeSlots[0][7]} ${timeSlots[1][7]} ${timeSlots[2][7]} ${timeSlots[3][7]} ${timeSlots[4][7]}';
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
        `}</style>
      </GeneralNoNav>
    </Fragment>
  );
};

export async function getServerSideProps(ctx) {
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
