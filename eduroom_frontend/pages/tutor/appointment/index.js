import React, { Fragment, useState } from 'react';
import utils from '../../../styles/tutor/utils';
import Header from '../../../components/tutor/main-header';
import GeneralNoNav from '../../../components/template/generalnonav';

import Link from 'next/link';

const Appointment = ({ appointments, approved, rejected, pending }) => {
  const [hoverIns, setHoverIns] = useState(-1);
  const [hoverReview, setHoverReview] = useState(-1);

  const [desc, setDesc] = useState(null);

  const [reviewModal, setReviewModal] = useState(-1);

  const [starHover, setStarHover] = useState(-1);

  return (
    <Fragment>
      <GeneralNoNav>
        {reviewModal >= 0 ? (
          <div className='modal-bg'>
            <div className='modal-container bg-pink'>
              <div
                className='modal-close'
                onClick={() => {
                  setReviewModal(-1);
                }}
              >
                x
              </div>
              <div className='text-xl font-bold'>Share Your Feedback</div>
              <div className='text-lg font-bold text-secondary my-4'>
                Rate your Instructor
              </div>
              <div className='my-2'>
                <div className='flex'>
                  {[...Array(5)].map((s, i) => (
                    <div
                      className='relative mx-1 pointer'
                      onMouseEnter={() => {
                        setStarHover(i);
                      }}
                    >
                      {i > starHover ? (
                        <i
                          className='fas fa-star star-in absolute text-white'
                          style={{ margin: '0.25rem' }}
                        ></i>
                      ) : (
                        ''
                      )}
                      <i className='fas fa-star star-out text-yellow'></i>
                    </div>
                  ))}
                </div>
              </div>
              <textarea
                cols='50'
                rows='10'
                placeholder='How is your experience'
                style={{ resize: 'none' }}
                className='outline-none my-4 rounded-sm px-4 py-4 text-md'
                onChange={(e) => {
                  setDesc(e.target.value);
                }}
              ></textarea>
              <div
                className='px-8 py-3 rounded-sm bg-navy text-md font-bold text-white pointer'
                onClick={() => {
                  // POST /tutor/appointment/review
                  console.log(starHover + 1);
                  console.log(desc);
                  // Reload
                  location.reload();
                }}
              >
                Submit
              </div>
            </div>
          </div>
        ) : (
          ''
        )}
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
                          onClick={() => {
                            console.log(e.id);

                            setReviewModal(e.id);
                          }}
                        >
                          Leave Review
                        </div>
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
          .star-out {
            font-size: 2.5rem;
          }
          .star-in {
            font-size: 2rem;
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
