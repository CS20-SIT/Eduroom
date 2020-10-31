import React, { Fragment } from 'react'
import WishlistForm from './wishlistForm'
import styles from '../../styles/user/wishlist'
const Wishlists = (props) => {
  const list = () => {
    const x = props.item.map((item, index) => {
      return (
        <WishlistForm
          id={item.id}
          title={item.title}
          price={item.id}
          key={item.id}
          remove={props.remove}
          index={index}
        ></WishlistForm>
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
export default Wishlists
