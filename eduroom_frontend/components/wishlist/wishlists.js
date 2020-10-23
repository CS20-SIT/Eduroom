import React, { Fragment } from 'react'
import WishlistForm from './wishlistForm' 
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
      {list()}
    </Fragment>
  )
}
export default Wishlists