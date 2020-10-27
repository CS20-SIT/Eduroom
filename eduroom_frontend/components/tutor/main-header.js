import React, { Fragment, useState } from 'react';
import utils from '../../styles/tutor/utils';

import GeneralNoNav from '../../components/template/generalnonav';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Header = () => {
  const router = useRouter();
  const ins = '/tutor';
  const [isInstructor, setIsInstructor] = useState(router.pathname === ins);

  return (
    <Fragment>
      <GeneralNoNav>
        <div className='flex' style={{ justifyContent: 'flex-end' }}>
          <Link href='/tutor'>
            <span
              onClick={() => {
                setIsInstructor(true);
              }}
              className={`font-lato font-bold text-md mx-2 px-1 pointer spacing-sm ${
                isInstructor ? 'text-navy' : 'text-secondary'
              }`}
            >
              INSTRUCTORS
            </span>
          </Link>
          <Link href='/tutor/appointment'>
            <span
              onClick={() => {
                setIsInstructor(false);
              }}
              className={`font-lato font-bold text-md mx-2 px-1 pointer spacing-sm ${
                isInstructor ? 'text-secondary' : 'text-navy'
              }`}
            >
              MY APPOINTMENTS
            </span>
          </Link>
        </div>
        <style jsx>{utils}</style>
      </GeneralNoNav>
    </Fragment>
  );
};

export default Header;
