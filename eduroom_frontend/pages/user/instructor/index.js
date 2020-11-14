import General from '../../../components/template/general';
import React, { Fragment } from 'react';
import Courses from '../../../components/user/instructor/Courses';

const InstructorProfile = () => {
  return (
    <Fragment>
      <General>
        <div className="container">
          <h1>Hello</h1>
        </div>
      </General>
      <style jsx>{`
        .container {
          padding: 0 50px;
        }
      `}</style>
    </Fragment>
  );
};
export default InstructorProfile;
