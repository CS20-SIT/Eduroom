import React, { Fragment } from 'react'
import GeneralTemplate from '../../components/template/general';
import CalendarCom from '../../components/calendar/calendar'
import style from '../../styles/calendar/calendar'
import Image from 'next/image'

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
