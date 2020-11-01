import React, { Fragment } from 'react';
import { useRouter } from 'next/router';
import style from '../../../styles/graderCreate/glanding'


import Image from 'next/image'
const Content = () => {
  const router = useRouter();
  return (
    <Fragment>
      <div className="landing">
        <div className="landing-content">
          <div className="landing-header">
            WELCOME BACK! <br />
            <span style={{ fontSize: '1.0em' ,'font-weight': '500'}}>TO EDUROOM GRADER</span>
          </div>
          <div className="landing-description">
            Neque porro quisquam est qui dolorem <br />
            ipsum quia dolor sit amet, consectetur, adipisci
          </div>
          <button
            className="landing-button"
            onClick={() => router.push('/admin/grader/announcement')}
          >
            <a className="landing-button-text">START MANAGE</a>
          </button>
        </div>
        <Image
          className="landing-img"
          alt="landing-img"
          src="/images/graderCreate/landing.svg"
          width="800"
          height="600"
        />
      </div>
      <style jsx>
        {style}
      </style>
    </Fragment>
  );
};
export default Content;
