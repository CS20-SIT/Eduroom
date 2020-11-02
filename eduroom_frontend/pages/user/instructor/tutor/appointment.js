import React, { Fragment, useState } from 'react';
import utils from '../../../../styles/tutor/utils';

import CSSTransition from 'react-transition-group/CSSTransition';

import {
  timeFormatter,
  monthConverter,
} from '../../../../components/tutor/lib/utils';

import GeneralNoNav from '../../../../components/template/generalnonav';
const Appointment = ({ appointments }) => {
  //   console.log(appointments[0]);

  const renderIcon = () => {
    return <i class='fa fa-chevron-left'></i>;
  };

  const [requestMode, setRequestMode] = useState(0);
  const [AID, setAID] = useState(-1);

  const dummy = {
    appointmentID: 0,
    id: 0,
    name: '',
    members: [{ id: 0, name: '' }],
    startTime: 0,
    endTime: 0,
    date: [0, 0, 0],
    status: '',
  };
  const [appointment, setAppointment] = useState(dummy);
  return (
    <Fragment>
      <GeneralNoNav>
        <CSSTransition
          mountOnEnter
          unmountOnExit
          in={AID > 0}
          timeout={{ enter: 300, exit: 300 }}
          classNames={{ enterActive: 'fade-in', exitActive: 'fade-out' }}
        >
          <div
            className='modal-bg'
            onClick={() => {
              setAID(-1);
            }}
          ></div>
        </CSSTransition>
        <CSSTransition
          mountOnEnter
          unmountOnExit
          in={AID > 0}
          timeout={{ enter: 1000, exit: 1000 }}
          classNames={{ enterActive: 'slide-in', exitActive: 'slide-out' }}
        >
          <div className='modal-container' onClick={() => {}}>
            <div className='profile--app  my-2'></div>
            <div className='text-lg font-bold my-2'>{appointment.name}</div>
            <div className='flex flex-col my-2 w-full'>
              <div className='my-2 text-lg font-bold'>Date</div>
              <div className='mx-2 my-1 text-md font-bold text-secondary'>
                {appointment.date[0]} {monthConverter(appointment.date[1] - 1)}{' '}
                {appointment.date[2]}
              </div>
            </div>
            <div className='flex flex-col my-2 w-full'>
              <div className='my-2 text-lg font-bold'>Time</div>
              <div className='mx-2 my-1 text-md font-bold text-secondary'>
                {timeFormatter(appointment.startTime) + ' '}-
                {' ' + timeFormatter(appointment.endTime)}
              </div>
            </div>
            <div className='flex flex-col my-2 w-full'>
              <div className='my-2 text-lg font-bold'>Members</div>
              {appointment.members.map((m) => (
                <div className='flex'>
                  <div className='profile--inside my-2'></div>
                  <div className='mx-4 my-auto text-md font-bold text-secondary'>
                    {m.name}
                  </div>
                </div>
              ))}
            </div>
            <div className='my-auto'></div>
            {appointment.status == 'Pending' ? (
              <div>
                <div
                  style={{ width: '10rem', backgroundColor: '#EB7DB1' }}
                  className='pointer text-center font-quicksand text-white py-2 rounded-md my-4'
                  onClick={() => {
                    // POST /tutor/instructor/appointment -> true
                    location.reload();
                    console.log(true);
                  }}
                >
                  Approve
                </div>
                <div
                  style={{ width: '10rem' }}
                  className='pointer text-center font-quicksand py-2 border-secondary text-secondary bg-white-faded rounded-md'
                  onClick={() => {
                    // POST /tutor/instructor/appointment -> false
                    location.reload();
                    console.log(false);
                  }}
                >
                  Reject
                </div>
              </div>
            ) : appointment.status == 'Rejected' ? (
              <div
                className={`font-bold text-md my-auto font-quicksand text-error my-4`}
              >
                {appointment.status}
              </div>
            ) : (
              <div
                className={`font-bold text-md my-auto font-quicksand text-navy my-4`}
              >
                {appointment.status}
              </div>
            )}
          </div>
        </CSSTransition>

        <div className='bg-tutor'>
          <div className='container'>
            <div className='font-bold text-secondary  text-xl'>
              Latest Request
            </div>
            <div className='flex my-6 '>
              <div
                className={`border-secondary text-secondary rounded-md py-1 text-center mx-4 text-md pointer ${
                  requestMode == 0 ? 'bg-navy text-white' : 'bg-white-faded'
                }`}
                style={{ width: '7rem' }}
                onClick={() => {
                  setRequestMode(0);
                }}
              >
                All
              </div>
              <div
                className={`border-secondary text-secondary rounded-md py-1 text-center mx-4 text-md pointer ${
                  requestMode == 1 ? 'bg-navy text-white' : 'bg-white-faded'
                }`}
                style={{ width: '7rem' }}
                onClick={() => {
                  setRequestMode(1);
                }}
              >
                Pending
              </div>
              <div
                className={`border-secondary text-secondary rounded-md py-1 text-center mx-4 text-md pointer ${
                  requestMode == 2 ? 'bg-navy text-white' : 'bg-white-faded'
                }`}
                style={{ width: '7rem' }}
                onClick={() => {
                  setRequestMode(2);
                }}
              >
                Approved
              </div>
              <div
                className={`border-secondary text-secondary rounded-md py-1 text-center mx-4 text-md pointer ${
                  requestMode == 3 ? 'bg-navy text-white' : 'bg-white-faded'
                }`}
                style={{ width: '7rem' }}
                onClick={() => {
                  setRequestMode(3);
                }}
              >
                Rejected
              </div>
            </div>
            <div className='grid-container-header'>
              <div className='font-quicksand text-md font-bold text-secondary'>
                Request By
              </div>
              <div className='font-quicksand text-md font-bold text-secondary'>
                Date
              </div>
              <div className='font-quicksand text-md font-bold text-secondary'>
                Time
              </div>
              <div className='font-quicksand text-md font-bold text-secondary'>
                Status
              </div>
              <div className='font-quicksand text-md font-bold text-secondary'>
                Action
              </div>
            </div>
            {appointments[requestMode].map((a, i) => (
              <div className='grid-container-body bg-white-faded shadow rounded-sm'>
                <div className='font-bold text-lg'>
                  {a.name}{' '}
                  {a.members.length > 0 ? (
                    <span className='mx-2 text-md text-secondary'>
                      {' '}
                      + {a.members.length}
                    </span>
                  ) : (
                    ''
                  )}
                </div>
                <div className='font-bold text-md text-secondary my-auto font-quicksand'>
                  {a.date[0]} {monthConverter(a.date[1] - 1).substring(0, 3)}{' '}
                  {a.date[2]}
                </div>
                <div className='font-bold text-md text-secondary my-auto font-quicksand'>
                  {timeFormatter(a.startTime)}-{timeFormatter(a.endTime)}
                </div>
                <div
                  className={`font-bold text-md my-auto font-quicksand ${
                    a.status == 'Approved'
                      ? 'text-navy'
                      : a.status == 'Pending'
                      ? 'text-yellow'
                      : 'text-error'
                  }`}
                >
                  {a.status}
                </div>
                <div
                  className='font-bold text-md text-secondary my-auto font-quicksand px-4 pointer'
                  onClick={() => {
                    // console.log(a);
                    // console.log(appointments[0]);
                    setAID(a.appointmentID);
                    const app = appointments[0].filter((x) => {
                      return x.appointmentID == a.appointmentID;
                    });
                    console.log(...app);
                    setAppointment(...app);
                  }}
                >
                  {renderIcon()}
                </div>
              </div>
            ))}
          </div>
        </div>
        <style jsx>{utils}</style>
        <style jsx>{`
          .grid-container-header {
            width: 100%;
            display: grid;
            grid-template-columns: 2.5fr 1.25fr 1.75fr 1.25fr 0.5fr;
            padding: 0.1rem 2rem;
          }
          .grid-container-body {
            width: 100%;
            display: grid;
            grid-template-columns: 2.5fr 1.25fr 1.75fr 1.25fr 0.5fr;
            padding: 2rem;
            margin: 1rem 0;
          }
          .modal-bg {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(255, 255, 255, 0.4);
            z-index: 9000;
            padding: 1.5rem;
          }
          .modal-container {
            z-index: 9999;
            height: 95%;
            width: 30%;
            position: fixed;
            top: 0;
            right: 0;
            bottom: 0;
            margin: auto 1rem;
            background-color: #ffffff;
            box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
            border-radius: 20px;
            padding: 2rem 5rem;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .profile--app {
            width: 4rem;
            height: 4rem;
            border-radius: 50%;
            background-color: lightpink;
            opacity: 0.4;
          }
          .profile--inside {
            width: 2rem;
            height: 2rem;
            border-radius: 50%;
            background-color: lightpink;
            opacity: 0.4;
          }
          .slide {
            transform: translateX(110%);
          }
          .fade-in {
            animation: fade-in 0.3s forwards;
          }
          .fade-out {
            animation: fade-out 0.3s forwards;
          }
          @keyframes fade-in {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }
          @keyframes fade-out {
            0% {
              opacity: 1;
            }
            100% {
              opacity: 0;
            }
          }
          .slide-in {
            animation: slide-in 0.6s ease-in-out forwards;
          }
          .slide-out {
            animation: slide-out 0.6s ease-in-out forwards;
          }
          @keyframes slide-in {
            0% {
              transform: translateX(100%);
            }
            100% {
              transform: translateX(0%);
            }
          }
          @keyframes slide-out {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(110%);
            }
          }
        `}</style>
      </GeneralNoNav>
    </Fragment>
  );
};

export async function getServerSideProps(ctx) {
  // GET /tutor/instructor/appointment
  const appointment = [
    {
      appointmentID: 1,
      id: 1,
      name: 'Thanawat Benjachatriroj',
      members: [
        { id: 2, name: 'John Doe' },
        { id: 3, name: 'Mama Bear' },
        { id: 4, name: 'Barry Allen' },
      ],
      startTime: 9,
      endTime: 11,
      date: [15, 10, 2020],
      status: 'Pending',
    },
    {
      appointmentID: 2,
      id: 2,
      name: 'John Doe',
      members: [{ id: 1, name: 'King Shark' }],
      startTime: 15,
      endTime: 16,
      date: [18, 10, 2020],
      status: 'Pending',
    },
    {
      appointmentID: 3,
      id: 3,
      name: 'Thanawat Benjachatriroj',
      members: [
        { id: 2, name: 'John Doe' },
        { id: 3, name: 'Mama Bear' },
      ],
      startTime: 11,
      endTime: 12,
      date: [16, 10, 2020],
      status: 'Pending',
    },
    {
      appointmentID: 4,
      id: 3,
      name: 'Thanawat Benjachatriroj',
      members: [],
      startTime: 11,
      endTime: 12,
      date: [16, 10, 2020],
      status: 'Approved',
    },
    {
      appointmentID: 5,
      id: 1,
      name: 'Thanawat Benjachatriroj',
      members: [
        { id: 2, name: 'John Doe' },
        { id: 3, name: 'Mama Bear' },
        { id: 4, name: 'Barry Allen' },
      ],
      startTime: 9,
      endTime: 11,
      date: [17, 10, 2020],
      status: 'Rejected',
    },
  ];
  const approved = appointment.filter((e) => {
    return e.status == 'Approved';
  });
  const rejected = appointment.filter((e) => {
    return e.status == 'Rejected';
  });
  const pending = appointment.filter((e) => {
    return e.status == 'Pending';
  });

  const appointments = [appointment, pending, approved, rejected];

  return {
    props: {
      appointments,
    },
  };
}
export default Appointment;
