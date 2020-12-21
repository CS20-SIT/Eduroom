import React, { Fragment } from 'react';
import { useRouter } from 'next/router';
import style from '../../styles/landing/content';

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
            Online Learning platform let you learn<br/>
            new things and Coding grader for <br/>
            practicing coding skills !
          </div>
          <button
            className="landing-button"
            id="get-start-btn"
            onClick={() => router.push('/login')}
          >
            <a className="landing-button-text">GET STARTED</a>
          </button>
        </div>
      </div>
      <style jsx>{style}</style>
    </Fragment>
  );
};
export default Content;
