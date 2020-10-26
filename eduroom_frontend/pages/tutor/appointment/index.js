import React, { Fragment, useState } from 'react';
import utils from '../../../styles/tutor/utils';
import Header from '../../../components/tutor/main-header';
import GeneralNoNav from '../../../components/template/generalnonav';

import Link from 'next/link';

const Appointment = ({ appointments, approved, rejected, pending }) => {
  const [hoverIns, setHoverIns] = useState(-1);
  const [hoverReview, setHoverReview] = useState(-1);
  return (
    <Fragment>
      <GeneralNoNav>
        <div className='bg-tutor'>
          <div className='container'>
            <Header />
            <div className='text-lg font-bold text-secondary spacing-md'>
              MY APPOINTMENTS
            </div>
            {appointments.map((e, index) => (
              <div key={index}>
                <div
                  className={`px-8 py-4 my-8 shadow bg-white-faded rounded-md flex items-center justify-between animation ${
                    hoverIns == index ? 'bigger' : ''
                  }`}
                  onPointerEnter={() => {
                    setHoverIns(index);
                  }}
                  onPointerLeave={() => {
                    setHoverIns(-1);
                  }}
                >
                  <div className='grid w-full'>
                    <div className='flex'>
                      <div
                        className='rounded-full bg-yellow'
                        style={{ width: 4 + 'rem', height: 4 + 'rem' }}
                      ></div>
                      <div className='my-auto mx-4'>
                        <div className='flex flex-col'>
                          <div className='font-lato font-bold text-xl text-primary'>
                            {e.name}
                          </div>
                          <div className='font-lato font-bold text-md text-secondary'>
                            {e.info}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='flex items-center justify-center text-lg text-secondary font-bold'>
                      {e.date}
                    </div>
                    <div
                      className='flex flex-col justify-center'
                      style={{ alignItems: 'flex-end' }}
                    >
                      <div className='flex'>
                        <span
                          className={`status ${
                            e.isAgree == 'Approved' || e.isAgree == 'Rejected'
                              ? e.isAgree == 'Rejected'
                                ? 'bg-error'
                                : 'bg-navy'
                              : 'bg-yellow'
                          }`}
                        ></span>
                        <div
                          className={`text-md font-bold ${
                            e.isAgree == 'Approved' || e.isAgree == 'Rejected'
                              ? e.isAgree == 'Rejected'
                                ? 'text-error '
                                : 'text-navy '
                              : 'text-yellow '
                          }`}
                        >
                          {e.isAgree}
                        </div>
                      </div>
                      <div className='text-lg text-secondary font-bold my-1'>
                        {e.startTime} - {e.endTime}
                      </div>
                      {e.isAgree == 'Approved' ? (
                        <Link href={`/tutor/appointment/${e.id}`}>
                          <div
                            className={`text-sm px-3 py-1 border rounded-md opacity-50 pointer animation ${
                              hoverReview == index
                                ? 'bg-secondary text-white'
                                : ''
                            }`}
                            onPointerEnter={() => {
                              setHoverReview(index);
                            }}
                            onPointerLeave={() => {
                              setHoverReview(-1);
                            }}
                          >
                            Leave Review
                          </div>
                        </Link>
                      ) : (
                        ''
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <style jsx>{utils}</style>
        <style jsx>{`
          .grid {
            display: grid;
            grid-template-columns: 2.5fr 1fr 1fr;
            gap: 10px;
          }
          .status {
            margin: auto 0.2rem;
            width: 0.5rem;
            height: 0.5rem;
            border-radius: 50%;
          }
        `}</style>
      </GeneralNoNav>
    </Fragment>
  );
};

export async function getStaticProps(context) {
  // GET /tutor/student/appointment
  const appointments = [
    {
      id: 1,
      name: 'Thanawat Benjachatriroj',
      info: 'Frontend Developer',
      date: '15 Oct 2000',
      startTime: '09.00',
      endTime: '10.00',
      isAgree: 'Approved',
    },
    {
      id: 2,
      name: 'Passawat Wetchasart',
      info: 'Web Disigner',
      date: '14 Oct 2000',
      startTime: '09.00',
      endTime: '10.00',
      isAgree: 'Pending',
    },
    {
      id: 3,
      name: 'Thanaphong phatthanaphaisarnsin',
      info: 'Backend Developer',
      date: '13 Oct 2000',
      startTime: '09.00',
      endTime: '10.00',
      isAgree: 'Rejected',
    },
    {
      id: 4,
      name: 'Thanawat Benjachatriroj',
      info: 'Frontend Developer',
      date: '15 Oct 2000',
      startTime: '09.00',
      endTime: '10.00',
      isAgree: 'Rejected',
    },
    {
      id: 5,
      name: 'Thanawat Benjachatriroj',
      info: 'Frontend Developer',
      date: '15 Oct 2000',
      startTime: '09.00',
      endTime: '10.00',
      isAgree: 'Pending',
    },
  ];
  // Categorize ( not implemented yet )
  const approved = appointments.filter((e) => {
    return e.isAgree == 'Approved';
  });
  const rejected = appointments.filter((e) => {
    return e.isAgree == 'Rejected';
  });
  const pending = appointments.filter((e) => {
    return e.isAgree == 'Pending';
  });
  // Sorting Whole Data
  appointments.sort((a, b) => {
    var nameA = a.isAgree.toUpperCase(); // ignore upper and lowercase
    var nameB = b.isAgree.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
  return {
    props: {
      appointments,
      approved,
      rejected,
      pending,
    },
  };
}

export default Appointment;
