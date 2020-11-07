import React, { Fragment } from 'react'
import Link from 'next/link';
import Card from '@material-ui/core/Card';
import Styles from '../../styles/user/wishlistForm.module.css';
import CardContent from '@material-ui/core/CardContent';
const MyCourseForm = (props) => {
    // console.log(props.test);
    const checkComplete=(boolean)=>{
        if(boolean) return 'Completed';
        else return 'Incompleted';
    }
  return (
    <Fragment>
      <div className={Styles.cardContainer}>
      <Card>
      <CardContent>
        <div  className={Styles.cardContainer}>
        <div className={Styles.container}>
          <Link href={`../../course/${props.id}`}>
              <span>
                  <div>Title: {props.title}</div>
                  <div>Status: {checkComplete(props.isCompleted)}</div>
              </span>
          </Link>
        </div>
        </div>
        </CardContent>
        </Card>
        </div>
    </Fragment>
  )
}
export default MyCourseForm