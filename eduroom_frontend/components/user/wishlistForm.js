// import React, { Fragment } from 'react'
import Link from 'next/link';
import Card from '@material-ui/core/Card';
import Styles from '../../styles/user/wishlistForm.module.css';
import CardContent from '@material-ui/core/CardContent';

import Image from 'next/image'

import React, { Fragment, useState, useEffect } from 'react'
import utils from '../../styles/course/utils'
import GeneralNoNav from '../../components/template/generalnonav'
import SearchBar from '../../components/course/searchBar'

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

    
// <Fragment>
// <GeneralNoNav>
//   <div className="bg-little-grey">
//     <div className="container">
//       {/* Search bar and Categories select */}
//       <div className="text-center flex my-6">
//         <SearchBar />
//         <select
//           className="font-quicksand font-normal-bold cate-tab bg-white pointer rounded-sss shadow text-grey cateBox"
//           placeholder="category"
//         >
//           <option>Category</option>
//           <option>Development</option>
//           <option>Finance</option>
//           <option>Music</option>
//         </select>
//       </div>

//                 {/* id={item.courseid}
//                 title={item.coursename}
//                 price={item.price}
//                 key={item.courseid}
//                 remove={props.remove}
//                 index={index}
//                 ///
//                 addtime={item.addtime}
//                 picture={item.coursepicture}
//                 ownerF={item.firstname}
//                 ownerL={item.lastname} */}

//       {/* Box of each course */}
//       <div className="text-center my-10">
        //  {/* {courseDes.map((e, index) => ( */}
//           <Link href={`/course/${props.id}`}>
//             <div className="mx-6 my-6 box-1 bg-white inline-block shadow rounded-sm pointer">
//               <div className="w-full h-60">
//                 <img className="pic-1" alt="python" src={`${props.picture}`} width="100%" height="100%"></img>
//               </div>
//               <div className="w-full h-40 font-quicksand">
//                 <div className="text-navy text-lg box-left my-4 mx-4 h-20">{props.title}</div>
//                 <div className="text-secondary text-md box-left mx-4">
//                   {`${props.ownerF}` + ' ' + `${props.ownerL}`}
//                 </div>
//                 <div className="text-navy text-lg box-left my-1 mx-4">$ {props.price}</div>
//               </div>
//             </div>
//           </Link>
        //  {/* ))} */}
//       </div>
//     </div>
//   </div>
//   <style jsx>{utils}</style>
//   <style jsx>{`
//     .cateBox {
//       border: none;
//       outlined: none;
//       padding-left: 15px;
//       font-size: 0.8rem;
//       width: 250px;
//     }
//     .categoryTab {
//       margin-top: 3rem;
//     }
//   `}</style>
// </GeneralNoNav>
// </Fragment>

  )
}
export default WishlistForm