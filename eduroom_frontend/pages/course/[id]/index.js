import React, { Fragment, useState, useEffect } from 'react'
import utils from '../../../styles/course/utils';
import GeneralNoNav from '../../../components/template/generalnonav';
import Link from 'next/link';

import api from '../../../api'

// const CourseID = ({ courseDes, id }) => {
const CourseID = ({ id }) => {
  useEffect(() => {
    console.log(id)
    const fetchData = async () => {
      let res = await api.post('/api/course/getCourseFromID', { courseID: id })
      console.log(res.data)
      setCourseDes(res.data);
    }
    fetchData()
  }, [])
  const [courseDes, setCourseDes] = useState(null)

  // const [videoSrc,] = useState(courseDes.samplevideo);

  let content = null

  if (courseDes) {
    content = (
      <GeneralNoNav>
        <div className='bg-little-grey '>
        <div className="pt-4"><div className="mt-4 mx-8"><Link href={`/course`}><span className='font-quicksand text-ll text-navy border-navy px-3 py-1 text-lg pointer rounded-md'>Back</span></Link></div></div>
          <div className='container'>
            <div className='my-2'>
              <span className='text-xl text-navy font-quicksand'>{courseDes[0].coursename}</span>
              {/* <span>
                        <button className='text-md text-error font-quicksand bg-white border-red rounded-lg add-cart pointer'>Add to cart</button>
                    </span>
                    <span>
                        <button className='text-md text-white font-quicksand bg-error border-red rounded-lg buy pointer'>Buy</button>
                    </span> */}
              <span>
                <Link href={`/course/${id}/lesson`}><button className='text-md text-white font-quicksand bg-navy border-navy rounded-lg go-study-butt pointer'>Go to study</button></Link>
              </span>
              <span className="share-icon pointer"><img alt="shareIcon" src="https://cdn3.iconfinder.com/data/icons/black-easy/512/538636-share_512x512.png" width="20px" height="20px" ></img></span>
              <div className='text-secondary font-quicksand mb-10'>Let Enjoy Our Course</div>
            </div>
            <div className="my-8" height="500px">
              <div className="inline-block">
                {/* <video className="" width="550" height="400"><source src={courseDes[0].samplevideo} type="video/mp4"></source></video> */}
                <div className="w-full h-60"><img className="pic-2" alt="picOfCourse" src={`${courseDes[0].coursepicture}`} width="100%" height="100%"></img></div>
              </div>
              <div className="inline-block box-des">
                <div className="font-lato text-xl text-navy">Instructor</div>
                <img alt="Instructor Picture" src={courseDes[0].avatar} width="70px" height="70px" className="rounded-full my-4 inline-block"></img>
                {/* https://img.barks.jp/image/review/1000143631/001.jpg */}
                <div className="inline-block position-ab instruc-name text-navy font-lato text-lg">{`${courseDes[0].firstname}` + " " + `${courseDes[0].lastname}`}</div>
                <div className="inline-block position-ab instruc-uni text-secondary font-lato text-md">{courseDes[0].biography}</div>
                <div className="text-secondary font-lato text-md my-1">{"Language : " + `${courseDes[0].language}`}</div>
                <div className="text-secondary font-lato text-md my-1">Certificate : Get by completing entire course</div>
                {/* Certificate : Get by completing entire course {courseDes[0].certpath} */}
                <div className="font-lato text-xl text-navy des-head">Description</div>
                <div className="font-quicksand text-md my-1">{courseDes[0].coursedescription}</div>

              </div>

            </div>

          </div>
        </div>
        <style jsx>{utils}</style>
      </GeneralNoNav>
    )
  }

  return (
    <Fragment>
        {content}
    </Fragment>
  );
}

export async function getServerSideProps(contex) {
  const id = contex.query.id;
  // GET /course/id
  const courseDes = [
    // {
    //   id: 1,
    //   name: 'Learn To Code With Python',
    //   instructor: 'Bill Gates',
    //   price: 30,
    //   src: 'https://i2.wp.com/www.opensourceforu.com/wp-content/uploads/2019/08/PythonTools-Blockchain.jpg?fit=900%2C589&ssl=1',
    //   videoSrc: 'https://www.youtube.com/embed/zNHHBdyMm14',
    // },
    // {
    //   id: 2,
    //   name: 'Learn To Code With C',
    //   instructor: 'Bill Joe',
    //   price: 30,
    //   src: 'https://bs-uploads.toptal.io/blackfish-uploads/blog/article/content/cover_image_file/cover_image/13650/cover-0828_AfterAllTheseYearstheWorldisStillPoweredbyCProgramming_Razvan_Newsletter-2b9ea38294bb08c5aea1f0c1cb06732f.png',
    //   videoSrc: 'https://www.youtube.com/embed/3lQEunpmtRA',
    // },
    // {
    //   id: 3,
    //   name: 'Learn To Code With Java',
    //   instructor: 'Billy Elish',
    //   price: 30,
    //   src: 'https://blog.newrelic.com/wp-content/uploads/java-logo-2.jpg',
    //   videoSrc: 'https://www.youtube.com/embed/Zv8-hrGiGno',
    // },
    // {
    //   id: 4,
    //   name: 'Basic for Python',
    //   instructor: 'Billie Armstrong',
    //   price: 30,
    //   src: 'https://i2.wp.com/www.opensourceforu.com/wp-content/uploads/2019/08/PythonTools-Blockchain.jpg?fit=900%2C589&ssl=1',
    //   videoSrc: '',
    // },
    // {
    //   id: 5,
    //   name: 'Basic for C',
    //   instructor: 'Bill Gates',
    //   price: 30,
    //   src: 'https://bs-uploads.toptal.io/blackfish-uploads/blog/article/content/cover_image_file/cover_image/13650/cover-0828_AfterAllTheseYearstheWorldisStillPoweredbyCProgramming_Razvan_Newsletter-2b9ea38294bb08c5aea1f0c1cb06732f.png',
    //   videoSrc: '',
    // },
    // {
    //   id: 6,
    //   name: 'Basic for Java',
    //   instructor: 'Bill Gates',
    //   price: 30,
    //   src: 'https://blog.newrelic.com/wp-content/uploads/java-logo-2.jpg',
    //   videoSrc: '',
    // },
  ];
  return {
    props: {
      // courseDes,
      id,
    },
  };
}

export default CourseID