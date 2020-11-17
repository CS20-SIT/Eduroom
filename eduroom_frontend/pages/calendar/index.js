import React, { Fragment } from 'react'
import GeneralTemplate from '../../components/template/generalnonav';
import CalendarCom from '../../components/calendar/calendar'
import style from '../../styles/calendar/calendar'

const Calendar = () => {
  return (
    <Fragment>
      <GeneralTemplate>
        <div className="BG">
          <CalendarCom />
        </div>
        <style jsx>{style}</style>
      </GeneralTemplate>
    </Fragment>
  )
};
export default Calendar;
