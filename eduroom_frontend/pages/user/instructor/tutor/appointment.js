import React, { Fragment, useState } from 'react';
import utils from '../../../../styles/tutor/utils';

import CSSTransition from 'react-transition-group/CSSTransition';

import GeneralNoNav from '../../../../components/template/generalnonav';

import AppointmentList from '../../../../components/tutor/instructor-appointment/appointment-list';
import AppointmentInfo from '../../../../components/tutor/instructor-appointment/appointment-info';
import RequestMode from '../../../../components/tutor/instructor-appointment/request-mode';
import TableHeader from '../../../../components/tutor/instructor-appointment/table-header';

const Appointment = ({ appointments }) => {
  //   console.log(appointments[0]);

  const renderIcon = () => {
    return <i class='fa fa-chevron-left'></i>;
  };

  const [requestMode, setRequestMode] = useState(0);
  const [AID, setAID] = useState(-1);

  const dummy = {
    appointmentID: 0,
    id: 0,
    name: '',
    members: [{ id: 0, name: '' }],
    startTime: 0,
    endTime: 0,
    date: [0, 0, 0],
    status: '',
  };
  const [appointment, setAppointment] = useState(dummy);
  return (
    <Fragment>
      <GeneralNoNav>
        <AppointmentInfo AID={AID} setAID={setAID} appointment={appointment} />

        <div className='bg-tutor'>
          <div className='container'>
            <RequestMode
              requestMode={requestMode}
              setRequestMode={setRequestMode}
            />
            <TableHeader />
            <AppointmentList
              appointments={appointments}
              requestMode={requestMode}
              setAppointment={setAppointment}
              setAID={setAID}
              renderIcon={renderIcon}
            />
          </div>
        </div>
        <style jsx>{utils}</style>
        <style jsx>{``}</style>
      </GeneralNoNav>
    </Fragment>
  );
};

export async function getServerSideProps(ctx) {
  // GET /tutor/instructor/appointment
  const appointment = [
    {
      appointmentID: 1,
      id: 1,
      name: 'Thanawat Benjachatriroj',
      members: [
        { id: 2, name: 'John Doe' },
        { id: 3, name: 'Mama Bear' },
        { id: 4, name: 'Barry Allen' },
      ],
      startTime: 9,
      endTime: 11,
      date: [15, 10, 2020],
      status: 'Pending',
    },
    {
      appointmentID: 2,
      id: 2,
      name: 'John Doe',
      members: [{ id: 1, name: 'King Shark' }],
      startTime: 15,
      endTime: 16,
      date: [18, 10, 2020],
      status: 'Pending',
    },
    {
      appointmentID: 3,
      id: 3,
      name: 'Thanawat Benjachatriroj',
      members: [
        { id: 2, name: 'John Doe' },
        { id: 3, name: 'Mama Bear' },
      ],
      startTime: 11,
      endTime: 12,
      date: [16, 10, 2020],
      status: 'Pending',
    },
    {
      appointmentID: 4,
      id: 3,
      name: 'Thanawat Benjachatriroj',
      members: [],
      startTime: 11,
      endTime: 12,
      date: [16, 10, 2020],
      status: 'Approved',
    },
    {
      appointmentID: 5,
      id: 1,
      name: 'Thanawat Benjachatriroj',
      members: [
        { id: 2, name: 'John Doe' },
        { id: 3, name: 'Mama Bear' },
        { id: 4, name: 'Barry Allen' },
      ],
      startTime: 9,
      endTime: 11,
      date: [17, 10, 2020],
      status: 'Rejected',
    },
  ];
  const approved = appointment.filter((e) => {
    return e.status == 'Approved';
  });
  const rejected = appointment.filter((e) => {
    return e.status == 'Rejected';
  });
  const pending = appointment.filter((e) => {
    return e.status == 'Pending';
  });

  const appointments = [appointment, pending, approved, rejected];

  return {
    props: {
      appointments,
    },
  };
}
export default Appointment;
