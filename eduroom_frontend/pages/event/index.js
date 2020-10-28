import React, { Fragment } from 'react'
import GeneralNonav from '../../components/template/generalnonav'; 
import EventComp from '../../components/event/createEvent'
const Event = () => {
  return (
    <Fragment>
      <GeneralNonav>
        <EventComp/>
      </GeneralNonav>
    </Fragment>
  )
};
export default Event;