import React,{Fragment} from 'react'
import utils from '../../../styles/course/utils';
import GeneralNoNav from '../../../components/template/generalnonav';
import Link from 'next/link';
const CourseIDReviews = () => {
    return (
    <Fragment>
        <GeneralNoNav>
        <div className='bg-tutor '>
            <Link href={`/course`}><div className='text-primary text-lg font-quicksand py-8 px-8 pointer'>Back</div></Link>
            <div className='container'>
                <div className='my-2'>
                    <span className='text-xl text-navy font-quicksand'>Learn To Code With Python</span>
                    <span>
                        <button className='text-md text-error font-quicksand bg-white border-red rounded-lg add-cart pointer'>Add to cart</button>
                    </span>
                    <span>
                        <button className='text-md text-white font-quicksand bg-error border-red rounded-lg buy pointer'>Buy</button>
                    </span>
                    <span className="share-icon pointer"><img alt="shareIcon" src="https://cdn3.iconfinder.com/data/icons/black-easy/512/538636-share_512x512.png" width="20px" height="20px" ></img></span>
                    <div className='text-secondary font-quicksand mb-10'>Let Enjoy Our Course</div>
                </div>
                
            </div>
        </div>
        <style jsx>{utils}</style>
      </GeneralNoNav>
    </Fragment>
    );
}
export default CourseIDReviews