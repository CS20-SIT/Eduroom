import React, { Fragment } from 'react';
import { useRouter } from 'next/router';
import style from '../../styles/landing/content'
import Image from 'next/image'
const CouponShopJa = () => {
  const router = useRouter();
  return (
    <Fragment>
      <div className="landing">
        <div className="landing-content">
          <div className="landing-header">
            SURPRISE with  <br />
            <span style={{ fontSize: '1.3em' }}>PROMOTION</span>
          </div>
          <div className="landing-description">
            Special thanks to SO FAR SO GOOD Prophet <br />
            We love SDG Development and Integrated Project
          </div>
          <button
            className="landing-button"
            onClick={() => router.push('/universityemail')}
          >
            <a className="landing-button-text">Get University Discount</a>
          </button>
        </div>
        <Image
          className="landing-img"
          alt="landing-img"
          src="/images/landing_img.svg"
          width="600"
          height="525"
        />
      </div>
      <style jsx>
        {style}
      </style>
    </Fragment>
  );
};
export default CouponShopJa;
