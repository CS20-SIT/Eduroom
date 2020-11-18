import React, { Fragment } from 'react'
import WishlistForm from './wishlistForm'
import Styles from '../../styles/user/wishlist.module.css';
const Wishlists = (props) => {
  const list=()=>{
    const x=props.item.map((item,index)=>{
      // console.log(props);
      return <WishlistForm
                // id={item.id}
                // title={item.title}
                // price={item.id}
                // key={item.id}
                // remove={props.remove}
                // index={index}
                /////////////
                user={item.userid}
                id={item.courseid}
                title={item.coursename}
                price={item.price}
                key={item.courseid}
                remove={props.remove}
                index={index}
                ///
                addtime={item.addtime}
                picture={item.coursepicture}
                ownerF={item.firstname}
                ownerL={item.lastname}

                // addtime: "2020-05-02T13:40:01.723Z"
                // courseid: "7709b5f2-6aab-7677-317d-a3c7d3b3a4bf"
                // coursename: "Test17"
                // coursepicture: "/course.png"
                // firstname: "John"
                // lastname: "Crack"
                // price: "534.00"
                // userid: "08e9d239-b3f2-4db8-b29a-da99a314df92"

                ></WishlistForm>
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