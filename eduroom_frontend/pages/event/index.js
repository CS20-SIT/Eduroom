import React, { Fragment } from 'react'
import GeneralNoNav from '../../components/template/generalnonav';
import EventComp from '../../components/event/createEvent'
import style from '../../styles/event/event'

const Event = () => {
  return (
    <Fragment>
      <GeneralNoNav>
      <div className='BG'>
        <EventComp/>
        </div>
        <style jsx>{style}</style>
      </GeneralNoNav>
    </Fragment>
  )
};
export default Event;