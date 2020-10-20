import React, { Fragment } from 'react';
import { useRouter } from 'next/router';
import style from '../../styles/landing/content'
const Content = () => {
  const router = useRouter();
  return (
    <Fragment>
      <div className="landing">
        <div className="landing-content">
          <div className="landing-header">
            WELCOME TO <br />
            <span style={{ fontSize: '1.3em' }}>EDUROOM</span>
          </div>
          <div className="landing-description">
            Neque porro quisquam est qui dolorem <br />
            ipsum quia dolor sit amet, consectetur, adipisci
          </div>
          <button
            className="landing-button"
            onClick={() => router.push('/login')}
          >
            <a className="landing-button-text">GET STARTED</a>
          </button>
        </div>
        <img
          className="landing-img"
          alt="landing-img"
          src="/images/landing_img.svg"
        />
      </div>
      <style jsx>
        {style}
      </style>
    </Fragment>
  );
};
export default Content;
