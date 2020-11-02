import React, { Fragment } from 'react'
import MyCourseForm from './myCourseForm'
import style from '../../styles/user/wishlist'
const MyCourses = (props) => {
  const list = () => {
    const x = props.item.map((item, index) => {
      return (
        <MyCourseForm
          id={item.id}
          title={item.title}
          key={item.id}
          isCompleted={item.completed}
          index={index}
        ></MyCourseForm>
      )
    })
    return x
  }
  return (
    <Fragment>
      <div className="div">{list()}</div>
      <style jsx>{style}</style>
    </Fragment>
  )
}
export default MyCourses
