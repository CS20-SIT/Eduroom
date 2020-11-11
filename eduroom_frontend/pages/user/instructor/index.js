import Nav from '../../../components/user/instructor/Nav';
import React, { Fragment } from 'react';
import Bord from '../../../components/user/instructor/bord';
import Course1 from '../../../components/user/instructor/Course1';
import Course2 from '../../../components/user/instructor/Course2';
import Course3 from '../../../components/user/instructor/Course3';
import GoCreate from '../../../components/user/instructor/GoCreate';
import SideNav from '../../../components/layouts/sidenav/sidenav';

function InstructorProfile() {
  return (
    <Fragment>
      <div>
        <Nav />
        <SideNav />

        <Bord />
        <Course1 />
        <Course2 />
        <Course3 />
        <GoCreate />
      </div>
    </Fragment>
  );
}
export default InstructorProfile;
