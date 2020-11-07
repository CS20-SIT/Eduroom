import React, { Fragment } from 'react'
import Link from 'next/link';
import Card from '@material-ui/core/Card';
import Styles from '../../styles/user/wishlistForm.module.css';
import CardContent from '@material-ui/core/CardContent';
const WishlistForm = (props) => {
    // console.log(props.test);
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
                  <div>price: {props.price}</div>
              </span>
          </Link>
          <button className={Styles.btn} onClick={()=>{props.remove(props.index)}} >Delete</button>
        </div>
        </div>
        </CardContent>
        </Card>
        </div>
    </Fragment>
  )
}
export default WishlistForm