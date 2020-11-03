import React, { Fragment, useState } from 'react';
import utils from '../../../styles/tutor/utils';

import CSSTransition from 'react-transition-group/CSSTransition';

import { timeFormatter, monthConverter } from '../lib/utils';

const Appointment = ({ AID, setAID, appointment }) => {
  return (
    <Fragment>
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
                  console.log(true);
                  location.reload();
                }}
              >
                Approve
              </div>
              <div
                style={{ width: '10rem' }}
                className='pointer text-center font-quicksand py-2 border-secondary text-secondary bg-white-faded rounded-md'
                onClick={() => {
                  // POST /tutor/instructor/appointment -> false
                  console.log(false);
                  location.reload();
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

      <style jsx>{utils}</style>
      <style jsx>{`
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
    </Fragment>
  );
};
export default Appointment;
