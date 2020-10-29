import React, { Fragment } from 'react'
import General from '../../components/template/general'; 
import EventComp from '../../components/event/createEvent'
const Event = () => {
  return (
    <Fragment>
      <General>
        <EventComp/>
      </General>
    </Fragment>
  )
};
export default Event;