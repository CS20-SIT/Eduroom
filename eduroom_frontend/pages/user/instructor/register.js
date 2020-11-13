import React, { Fragment, useState, useEffect } from 'react';
import General from '../../../components/template/general';
import api from '../../../api';
import Register from '../../../components/user/instructor/Register';
import WaitingApproved from '../../../components/user/instructor/WaitingApproved';
import AlreadyBeInstructor from '../../../components/user/instructor/AlreadyBeInstructor';

const InstructorRegister = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const res = await api.get('/api/instructor/profile');
      setUser(res.data);
    };
    fetchData();
  });
  const renderPage = () => {
    if (!user) return null;
    if (user.role === 'instructor') {
      if (user.isverified) {
        return <AlreadyBeInstructor />;
      } else {
        return <WaitingApproved />;
      }
    } else {
      return <Register />;
    }
  };
  return (
    <Fragment>
      <General>{renderPage()}</General>
    </Fragment>
  );
};
export default InstructorRegister;
