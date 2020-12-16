import React, { Fragment, useState, useEffect } from 'react';
import utils from '../../styles/course/utils';
import GeneralNoNav from '../../components/template/generalnonav';
import Link from 'next/link';

import api from '../../api'

// const Course = ({ courseDes }) => {
const Course = () => {

  useEffect(() => {
		const fetchData = async () => {
      let res = await api.get('/api/course/getAllCourse')
      console.log(res.data)
      setCourseDes(res.data);
		}
		fetchData()
  }, [])
  
  const [courseDes, setCourseDes] = useState([])

  return (
    <Fragment>
      <GeneralNoNav>
        <div className='bg-little-grey'>
          <div className='container'>

                {/* Categories Name */}
                <div className='text-center my-4'>
                  <Link href={`/course`}><span className='text-lg text-secondary mx-4 font-quicksand pointer'>General</span></Link>
                    <span className='text-lg text-secondary mx-4 font-quicksand pointer'>IT & Software</span>
                    <span className='text-lg text-secondary mx-4 font-quicksand pointer'>Design</span>
                    <span className='text-lg text-secondary mx-4 font-quicksand pointer'>Marketing</span>
                    <span className='text-lg text-secondary mx-4 font-quicksand pointer'>Business</span>
                    <span className='text-lg text-secondary mx-4 font-quicksand pointer'>Other</span>
                </div>

                {/* Search bar and Categories select */}
                <div className='text-center my-6'>
                    <input className='font-quicksand input-tab mx-4 rounded-sss' placeholder="What do you want to learn?"></input>
                    <select className='font-quicksand cate-tab mx-4 pointer rounded-sss' placeholder="Categories">
                        <option>Development</option>
                        <option>Finance</option>
                        <option>Music</option>
                    </select>
                </div>

                {/* Box of each course */}
                <div className='text-center my-10'>
                {courseDes.map((e, index) => (
                  <Link href={`/course/${e.courseid}`}>
                    <div className='mx-6 my-6 box-1 bg-white inline-block shadow rounded-lg pointer'>
                      <div className="w-full h-60"><img className="pic-1" alt="python" src={`${e.coursepicture}`} width="100%" height="100%"></img></div>
                      <div className="w-full h-40 font-quicksand">
                        <div className="text-navy text-lg box-left my-4 mx-4 h-20">{e.coursename}</div>
                        <div className="text-secondary text-md box-left mx-4">{`${e.firstname}` + " " + `${e.lastname}`}</div>
                        <div className="text-navy text-lg box-left my-1 mx-4">$ {e.price}</div>
                      </div>
                    </div>
                  </Link>
                ))}

                    
                </div>
                
          </div>
        </div>
        <style jsx>{utils}</style>
      </GeneralNoNav>
    </Fragment>
  );
};

// export async function getServerSideProps(contex) {
//   // GET /course/review
//   const courseDes = [
//     {
//       id: 1,
//       name: 'Learn To Code With Python',
//       instructor: 'Bill Gates',
//       price: 30,
//       src: 'https://i2.wp.com/www.opensourceforu.com/wp-content/uploads/2019/08/PythonTools-Blockchain.jpg?fit=900%2C589&ssl=1',
//     },
//     {
//       id: 2,
//       name: 'Learn To Code With C',
//       instructor: 'Bill Joe',
//       price: 30,
//       src: 'https://bs-uploads.toptal.io/blackfish-uploads/blog/article/content/cover_image_file/cover_image/13650/cover-0828_AfterAllTheseYearstheWorldisStillPoweredbyCProgramming_Razvan_Newsletter-2b9ea38294bb08c5aea1f0c1cb06732f.png'
//     },
//     {
//       id: 3,
//       name: 'Learn To Code With Java',
//       instructor: 'Billy Elish',
//       price: 30,
//       src: 'https://blog.newrelic.com/wp-content/uploads/java-logo-2.jpg',
//     },
//     {
//       id: 4,
//       name: 'Basic for Python',
//       instructor: 'Billie Armstrong',
//       price: 30,
//       src: 'https://i2.wp.com/www.opensourceforu.com/wp-content/uploads/2019/08/PythonTools-Blockchain.jpg?fit=900%2C589&ssl=1',
//     },
//     {
//       id: 5,
//       name: 'Basic for C',
//       instructor: 'Bill Gates',
//       price: 30,
//       src: 'https://bs-uploads.toptal.io/blackfish-uploads/blog/article/content/cover_image_file/cover_image/13650/cover-0828_AfterAllTheseYearstheWorldisStillPoweredbyCProgramming_Razvan_Newsletter-2b9ea38294bb08c5aea1f0c1cb06732f.png'
//     },
//     {
//       id: 6,
//       name: 'Basic for Java',
//       instructor: 'Bill Gates',
//       price: 30,
//       src: 'https://blog.newrelic.com/wp-content/uploads/java-logo-2.jpg',
//     },
//   ];
//   return {
//     props: {
//       courseDes,
//     },
//   };
// }



export default Course;
// import React, { Fragment, useState, useEffect } from 'react'
// import ProductCourse from '../../components/course/courseStore'
// import ProductPackage from '../../components/package/packageStore'
// import Styles from '../../styles/course/cShop'
// import General from '../../components/template/general'

// const packages = () => {
// 	const [show, setShow] = useState(false)
// 	return (
// 		<Fragment>
// 			<General>
// 				<div>
// 					<h1>Test</h1>
// 				</div>
// 				<div>
// 					<div style={{ margin: '10' }}>
// 						<ProductCourse></ProductCourse>
// 					</div>
// 					<div>
// 						<ProductPackage></ProductPackage>
// 					</div>
// 				</div>
// 			</General>
// 			<style jsx>{Styles}</style>
// 		</Fragment>
// 	)
// }
export default packages
