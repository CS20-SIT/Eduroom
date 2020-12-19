import React, { Fragment } from 'react'
import Link from 'next/link';
import Card from '@material-ui/core/Card';
import Styles from '../../styles/user/wishlistForm.module.css';
import CardContent from '@material-ui/core/CardContent';

import Image from 'next/image'

const WishlistForm = (props) => {
  // console.log(props); props.user,
  return (
    <Fragment>
      <div className={Styles.cardContainer}>
      <Card>
      <CardContent>
        <div  className={Styles.cardContainer}>
        <div className={Styles.container}>
          <Link href={`../../course/${props.id}`}>
              <span>
                  <img src={props.picture} width="200" height="200"></img>
                  <div>Title: {props.title}</div>
                  <div>Teach By: {props.ownerF} {props.ownerL}</div>
                  <div>price: {props.price}</div>
              </span>
          </Link>
          <button className={Styles.btn} onClick={()=>{props.remove(props.id)}} >Delete</button>
        </div>
        </div>
        </CardContent>
        </Card>
        </div>
    </Fragment>
  )
}
export default WishlistForm