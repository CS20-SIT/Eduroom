import React,{Fragment} from 'react'
import utils from '../../../styles/course/utils';
import GeneralNoNav from '../../../components/template/generalnonav';
import Link from 'next/link';
const CourseID = ({ courseDes, id }) => {
    return (
    <Fragment>
        <GeneralNoNav>
        <div className='bg-tutor '>
            <Link href={`/course`}><span className='text-primary text-lg font-quicksand py-8 px-8 pointer'>Back</span></Link>
            <div className='container'>
                <div className='my-2'>
                    <span className='text-xl text-navy font-quicksand'>{courseDes[id-1].name}</span>
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
                        <iframe className="" width="550" height="400" src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
                    </div>
                    <div className="inline-block box-des">
                        <div className="font-lato text-xl text-navy">Instructor</div>
                        <img alt="Instructor Picture" src="https://img.barks.jp/image/review/1000143631/001.jpg" width="70px" height="70px" className="rounded-full my-4 inline-block"></img>
                        <div className="inline-block position-ab instruc-name text-navy font-lato text-lg">Paul Jason Klein</div>
                        <div className="inline-block position-ab instruc-uni text-secondary font-lato text-md">Professor Hogward University</div>
                        <div className="text-secondary font-lato text-md my-1">Language : English, Italy, France</div>
                        <div className="text-secondary font-lato text-md my-1">Certificate : Get by completing entire course</div>
                        <div className="font-lato text-xl text-navy des-head">Description</div>
                        <div className="font-quicksand text-md my-1">. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
                        
                    </div>
                    
                </div>
                
            </div>
        </div>
        <style jsx>{utils}</style>
      </GeneralNoNav>
    </Fragment>
    );
}

export async function getServerSideProps(contex) {
    const id = contex.query.id;
    // GET /course/id
    const courseDes = [
      {
        id: 1,
        name: 'Learn To Code With Python',
        instructor: 'Bill Gates',
        price: 30,
        src: 'https://i2.wp.com/www.opensourceforu.com/wp-content/uploads/2019/08/PythonTools-Blockchain.jpg?fit=900%2C589&ssl=1',
      },
      {
        id: 2,
        name: 'Learn To Code With C',
        instructor: 'Bill Joe',
        price: 30,
        src: 'https://bs-uploads.toptal.io/blackfish-uploads/blog/article/content/cover_image_file/cover_image/13650/cover-0828_AfterAllTheseYearstheWorldisStillPoweredbyCProgramming_Razvan_Newsletter-2b9ea38294bb08c5aea1f0c1cb06732f.png'
      },
      {
        id: 3,
        name: 'Learn To Code With Java',
        instructor: 'Billy Elish',
        price: 30,
        src: 'https://blog.newrelic.com/wp-content/uploads/java-logo-2.jpg',
      },
      {
        id: 4,
        name: 'Basic for Python',
        instructor: 'Billie Armstrong',
        price: 30,
        src: 'https://i2.wp.com/www.opensourceforu.com/wp-content/uploads/2019/08/PythonTools-Blockchain.jpg?fit=900%2C589&ssl=1',
      },
      {
        id: 5,
        name: 'Basic for C',
        instructor: 'Bill Gates',
        price: 30,
        src: 'https://bs-uploads.toptal.io/blackfish-uploads/blog/article/content/cover_image_file/cover_image/13650/cover-0828_AfterAllTheseYearstheWorldisStillPoweredbyCProgramming_Razvan_Newsletter-2b9ea38294bb08c5aea1f0c1cb06732f.png'
      },
      {
        id: 6,
        name: 'Basic for Java',
        instructor: 'Bill Gates',
        price: 30,
        src: 'https://blog.newrelic.com/wp-content/uploads/java-logo-2.jpg',
      },
    ];
    return {
      props: {
        courseDes,
        id,
      },
    };
  }

export default CourseID