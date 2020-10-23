import React, { Fragment } from 'react';
import utils from '../../styles/tutor/utils';

const Tutor = ({ instructors }) => {
  return (
    <Fragment>
      <div className='container'>
        <div className='flex'>
          <span className='font-lato font-bold text-md text-navy mx-1 px-1'>
            Instructors
          </span>
          <span className='font-lato font-bold text-md text-navy mx-1 px-1'>
            My Appointments
          </span>
        </div>
        {instructors.map((e) => (
          <div>
            <div className='px-2 py-1 mx-2 my-2 shadow rounded-md flex'>
              <div
                className='rounded-full bg-navy'
                style={{ width: 4 + 'rem', height: 4 + 'rem' }}
              ></div>
              <div className='my-auto mx-1'>
                <div className='font-lato font-bold text-xl text-primary'>
                  {' '}
                  {e.name}
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
