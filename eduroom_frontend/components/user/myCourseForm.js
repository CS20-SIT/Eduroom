// import React, { Fragment } from 'react'
import Link from 'next/link';
import Card from '@material-ui/core/Card';
import Styles from '../../styles/user/wishlistForm.module.css';
import CardContent from '@material-ui/core/CardContent';

///
// import Link from 'next/link';
// import Card from '@material-ui/core/Card';
// import Styles from '../../styles/user/wishlistForm.module.css';
// import CardContent from '@material-ui/core/CardContent';

import Image from 'next/image'

import React, { Fragment, useState, useEffect } from 'react'
import utils from '../../styles/course/utils'
import GeneralNoNav from '../../components/template/generalnonav'
import SearchBar from '../../components/course/searchBar'

// import Image from 'next/image'
const MyCourseForm = (props) => {
    // console.log(props.test);
    const checkComplete=(boolean)=>{
        if(boolean) return 'Completed';
        else return 'Incompleted';
    }
  return (
    // <Fragment>
    //   <div className={Styles.cardContainer}>
    //   <Card>
    //   <CardContent>
    //     <div  className={Styles.cardContainer}>
    //     <div className={Styles.container}>
    //       <Link href={`../../course/${props.id}`}>
    //           <span>
    //               <img src={props.picture} width="200" height="200"/>
    //               <div>Title: {props.title}</div>
    //               <div>Teach By: {props.ownerF} {props.ownerL}</div>
    //               <div>Status: {checkComplete(props.isCompleted)}</div>
    //           </span>
    //       </Link>
    //     </div>
    //     </div>
    //     </CardContent>
    //     </Card>
    //     </div>
    // </Fragment>

    //////////

    <Fragment>
{/* <GeneralNoNav> */}
  {/* <div className="bg-little-grey">
    <div className="container"> */}
      {/* Search bar and Categories select */}
      {/* <div className="text-center flex my-6">
        <SearchBar />
        <select
          className="font-quicksand font-normal-bold cate-tab bg-white pointer rounded-sss shadow text-grey cateBox"
          placeholder="category"
        >
          <option>Category</option>
          <option>Development</option>
          <option>Finance</option>
          <option>Music</option>
        </select>
      </div> */}

                {/* id={item.courseid}
                title={item.coursename}
                key={item.courseid}
                isCompleted={item.isfinished}
                index={index}
                ///
                addtime={item.addtime}
                picture={item.coursepicture}
                ownerF={item.firstname}
                ownerL={item.lastname}
                lastvisit={item.lastvisit} */}
      
      {/* Box of each course */}
      {/* <div className="text-center my-10"> */}
        {/* {courseDes.map((e, index) => ( */}
          {/* <Link href={`/course/${props.id}`}>
            <div className="mx-6 my-6 box-1 bg-white inline-block shadow rounded-sm pointer">
              <div className="w-full h-60">
                <img className="pic-1" alt="python" src={`${props.picture}`} width="100%" height="100%"></img>
              </div>
              <div className="w-full h-40 font-quicksand">
                <div className="text-navy text-lg box-left my-4 mx-4 h-20">{props.title}</div>
                <div className="text-secondary text-md box-left mx-4">
                  {`${props.ownerF}` + ' ' + `${props.ownerL}`}
                </div>
                <div className="text-navy text-lg box-left my-1 mx-4">{checkComplete(props.isCompleted)}</div>
              </div>
            </div>
          </Link> */}
          {/* ))} */}
      {/* </div>
    </div>
  </div>
  <style jsx>{utils}</style>
  <style jsx>{`
    .cateBox {
      border: none;
      outlined: none;
      padding-left: 15px;
      font-size: 0.8rem;
      width: 250px;
    }
    .categoryTab {
      margin-top: 3rem;
    }
  `}</style> */}



      <div className="container">
				<div style={{ display: 'flex' }}>
					<img src={props.picture} alt="course-img" width="150px" height="120px"></img>
					<div style={{ marginLeft: '30px' }}>
						<div style={{ display: 'flex', justifyContent: 'space-between' }}>
							<h2 style={{ margin: '0' }}>{props.title}</h2>
							<div style={{margin: '7px 0 0 0'}}>
								<i className="fas fa-edit icon"></i>
								<i className="fas fa-trash icon"></i>
							</div>
						</div>
						{/* <div className="det">{course.coursedescription}</div> */}
					</div>
				</div>
			</div>
			<style jsx>{`
				.container {
					background: #ffffff;
					box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
					border-radius: 10px;
					padding: 20px 10px;
					margin-bottom: 20px;
				}
				.det {
					color: #858585;
				}
				.icon{
					color: #858585;
					transition: 0.3s;
					padding: 0 7px;
				}
				.icon:hover{
					color: black;
					transition: 0.3s;
					cursor: pointer;
				}
			`}</style>


{/* </GeneralNoNav> */}
</Fragment>
  )
}
export default MyCourseForm