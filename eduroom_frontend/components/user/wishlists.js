import React, { Fragment } from 'react'
import WishlistForm from './wishlistForm'
import Styles from '../../styles/user/wishlist.module.css';
const Wishlists = (props) => {
  const list=()=>{
    const x=props.item.map((item,index)=>{
      return <WishlistForm
                id={item.id}
                title={item.title}
                price={item.id}
                key={item.id}
                remove={props.remove}
                index={index}></WishlistForm>
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
export default Wishlists