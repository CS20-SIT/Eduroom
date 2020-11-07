import React, { Fragment } from 'react'
import Link from 'next/link'
import Card from '@material-ui/core/Card'
import style from '../../styles/user/wishlistForm'
import CardContent from '@material-ui/core/CardContent'
const MyCourseForm = (props) => {
  // console.log(props.test);
  const checkComplete = (boolean) => {
    if (boolean) return 'Completed'
    else return 'Incompleted'
  }
  return (
    <Fragment>
      <div className={style.cardContainer}>
      <Card>
      <CardContent>
        <div  className={style.cardContainer}>
        <div className={style.container}>
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
      <style jsx>{style}</style>
    </Fragment>
  )
}
export default MyCourseForm
