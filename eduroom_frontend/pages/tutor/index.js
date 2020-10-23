import React, { Fragment } from 'react';
import utils from '../../styles/tutor/utils';

const Tutor = ({ instructors }) => {
  return (
    <Fragment>
      <div className='container'>
        <div className='flex' style={{ justifyContent: 'flex-end' }}>
          <span className='font-lato font-bold text-md text-navy mx-1 px-1 pointer'>
            Instructors
          </span>
          <span className='font-lato font-bold text-md text-navy mx-1 px-1 pointer'>
            My Appointments
          </span>
        </div>
        <div>
          <div className='text-lg font-bold text-secondary letter-spacing'>
            INSTRUCTORS
          </div>
        </div>
        {instructors.map((e) => (
          <div>
            <div className='px-8 py-4 my-8 shadow rounded-md flex pointer'>
              <div
                className='rounded-full bg-yellow'
                style={{ width: 4 + 'rem', height: 4 + 'rem' }}
              ></div>
              <div className='my-auto mx-4'>
                <div className='flex'>
                  <div className='font-lato font-bold text-xl text-primary'>
                    {' '}
                    {e.name}
                  </div>
                  <div className='mx-2 flex items-center text-yellow'>
                    <i class='fas fa-star'></i>
                    <div className='text-sm mx-1 text-yellow'>{e.rating}</div>
                    <div className='text-sm text-secondary'>
                      (
                      {e.ratingCount > 1000
                        ? e.ratingCount / 1000 + 'k'
                        : e.ratingCount}
                      )
                    </div>
                  </div>
                </div>
                <div className='font-lato font-bold text-md text-secondary'>
                  {' '}
                  {e.info}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <style jsx>{utils}</style>
    </Fragment>
  );
};

export async function getStaticProps(context) {
  const instructors = [
    {
      instructorID: 1,
      name: 'Thanawat Benjachatriroj',
      info: 'Frontend Developer',
      rating: 4.5,
      ratingCount: 2000,
    },
    {
      instructorID: 2,
      name: 'Passawat Wetchasart',
      info: 'Web Disigner',
      rating: 3.7,
      ratingCount: 1800,
    },
    {
      instructorID: 3,
      name: 'Thanaphong phatthanaphaisarnsin',
      info: 'Backend Developer',
      rating: 3.5,
      ratingCount: 1200,
    },
  ];
  return {
    props: {
      instructors,
    },
  };
}

export default Tutor;
