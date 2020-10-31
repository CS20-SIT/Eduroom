import React, { Fragment } from 'react'
import MyCourseForm from './myCourseForm'
import Styles from '../../styles/user/wishlist.module.css';
const MyCourses = (props) => {
  const list=()=>{
    const x=props.item.map((item,index)=>{
      return <MyCourseForm
                id={item.id}
                title={item.title}
                key={item.id}
                isCompleted={item.completed}
                index={index}></MyCourseForm>
    });
    return x;
  }
  return (
    <Fragment>
      <div className={Styles.div}>
        {list()}
        </div>
    </Fragment>
  )
}
export default MyCourses