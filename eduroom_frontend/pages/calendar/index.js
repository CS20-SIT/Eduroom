import React, { Fragment } from 'react'
import GeneralTemplate from '../../components/template/generalnonav'; 
import CalendarCom from '../../components/calendar/calendar'
const Calendar = () => {
  return (
    <Fragment>
      <GeneralTemplate>
        <CalendarCom />
      </GeneralTemplate>
    </Fragment>
  )
};
export default Calendar;
