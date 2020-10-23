import React, { Fragment } from 'react'
import Link from 'next/link';
const WishlistForm = (props) => {
    // console.log(props.test);
  return (
    <Fragment>
        <Link href={'../../course/'+props.id}>
            <span>
                <div>Title: {props.title}</div>
                <div>price: {props.price}</div>
            </span>
        </Link>
        <button onClick={()=>{props.remove(props.index)}} >Delete</button>
        <br></br>
    </Fragment>
  )
}
export default WishlistForm