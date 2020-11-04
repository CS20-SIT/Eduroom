import React, { Fragment, useState } from 'react';
import utils from '../../../styles/tutor/utils';

import { dateFormatter } from '../lib/utils';

const Rating = ({ reviews }) => {
  const ratingHead = ['Highest Rated', 'Lowest Rated', 'Most Recent'];
  const [ratingSection, setRatingSection] = useState(0);

  const renderRating = (r) => {
    let stars = [];
    for (let i = 0; i < r; i++) {
      stars.push(<i className='fas fa-star'></i>);
    }
    return stars;
  };

  return (
    <Fragment>
      <div className='mx-8'>
        <div className='font-bold text-lg '>
          How Students Rated This Instructor
        </div>
        <div className='flex my-2'>
          {ratingHead.map((r, i) => (
            <div
              className={`text-md font-bold pointer  ${
                ratingSection == i ? 'text-navy' : 'text-secondary opacity-50 '
              } ${i == 1 ? 'mx-6' : ''}`}
              onClick={() => {
                setRatingSection(i);
              }}
            >
              {r}
            </div>
          ))}
        </div>
        {reviews[ratingSection].map((r) => (
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
                <div className='font-bold text-md text-secondary'>{r.desc}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <style jsx>{utils}</style>
      <style jsx>{`
        .profile--review {
          width: 4rem;
          height: 4rem;
          border-radius: 50%;
          background-color: lightpink;
          opacity: 0.4;
        }
      `}</style>
    </Fragment>
  );
};

export default Rating;
