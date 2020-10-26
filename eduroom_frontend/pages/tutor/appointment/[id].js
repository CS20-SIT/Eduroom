import React, { Fragment, useState } from 'react';
import utils from '../../../styles/tutor/utils';
import GeneralNoNav from '../../../components/template/generalnonav';

import Link from 'next/link';

const Appointment = () => {
  return (
    <Fragment>
      <GeneralNoNav>
        <div className='bg-tutor'>
          <div className='container'>Rating Page</div>
        </div>
        <style jsx>{utils}</style>
      </GeneralNoNav>
    </Fragment>
  );
};

export async function getStaticPaths() {
  // Get every possible [id]
  const paths = [
    { params: { id: '1' } },
    { params: { id: '2' } },
    { params: { id: '3' } },
    { params: { id: '4' } },
    { params: { id: '5' } },
  ];

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const id = params.id;
  return {
    props: {},
  };
}

export default Appointment;
