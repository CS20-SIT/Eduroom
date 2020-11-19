import React, { Fragment, useState } from 'react';
import utils from '../../../../styles/course/utils';
import GeneralNoNav from '../../../../components/template/generalnonav';
import Link from 'next/link';

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const CourseIDLesson = ({ courseDes, id }) => {

    const [sec,setSec] = useState(0); 
    var secNow = 0, partNow = 0;
    const [srcc,setSrc] = useState("https://www.youtube.com/embed/jveH6adL5DY");

    const testLog = (x) => {
        console.log(x)
    }
    const downloadItem = async (video) =>  {

          console.log('loading file..')
          const a = document.createElement('a')
          a.href = toDataURL(video)
          a.download = 'documents.pdf'
          document.body.appendChild(a)
          a.click()
          document.body.removeChild(a)



      }

      const toDataURL= async (url) => {
        return fetch(url)
          .then(response => {
            return response.blob()
          })
          .then(blob => {
            return URL.createObjectURL(blob)
          })
      }
    
    
    return (
        <Fragment>
            <GeneralNoNav>
            <div className='bg-little-grey '>
                <Link href={`/course/${id}`}><span className='text-primary text-lg py-8 px-8 pointer'>Back</span></Link>
                <div className='container-2'>
                    <div className='my-2'>
                        <span className='text-xl text-navy font-quicksand'>{courseDes[id-1].name}</span>
                        {/* <span>
                            <button className='text-md text-error font-quicksand bg-white border-red rounded-lg add-cart pointer'>Add to cart</button>
                        </span>
                        <span>
                            <button className='text-md text-white font-quicksand bg-error border-red rounded-lg buy pointer'>Buy</button>
                        </span> */}
                        <span className="share-icon pointer"><img alt="shareIcon" src="https://cdn3.iconfinder.com/data/icons/black-easy/512/538636-share_512x512.png" width="20px" height="20px" ></img></span>
                        <div className='text-secondary font-quicksand mb-10'>{"Section "+`${courseDes[id-1].section[secNow].id}`+" : " + `${courseDes[id-1].section[secNow].name}`}</div>
                    </div>
                    <div className="my-8" height="500px">
                        <div className="inline-block">
                            <iframe className="" width="700" height="450" src={srcc}></iframe>
                        </div>
                        <div className="course-box bg-white inline-block">
                            <div className="font-lato text-navy text-lg mt-10 mx-8 border-bottom-grey course-content">COURSE CONTENT</div>
                            <div>
                            {courseDes[id-1].section.map((e, index) => (
                                <div>
                                    <div className="section-box py-2 px-6 pointer text-lg font-quicksand" onClick={()=>{
                                        if(sec == index){
                                            setSec(-1);
                                        }
                                        else{
                                            setSec(index);
                                        }
                                        
                                        
                                    }}>
                                        <div className="font-normal my-1">{"Section "+`${e.id}`+" : " + `${e.name}`}</div>
                                        <div className="font-light text-ll text-grey">{`${e.time}`+" mins."}</div>
                                        
                                    </div>
                                    
                                    <div className={`${sec == index ? '':"hidden"}`}>
                                        {e.part.map((ee, indexx) => (
                                            <div className="my-6 mx-4">
                                                <div className="inline-block justify-icon position-ab">
                                                <img width="30px" src="https://cdn2.iconfinder.com/data/icons/ui-basic-glyph/512/UI_Basic_GLYPH-110-512.png"/>
                                                </div>
                                                <div className="font-quicksand px-2 text-ll pointer font-normal-bold inline-block part-word" onClick={()=>{
                                                    setSrc(ee.src);
                                                }}>{"Part " + `${ee.id}` + ": " + `${ee.name}`}</div>
                                            </div>
                                        ))}
                                        
                                    </div>
                                    {/* <div onClick={() => {
                                        downloadItem('http://rathcenter.com/Sheet/Logic.pdf');
                                    }}>Download</div> */}
                                </div>
                            ))}
                            </div>
                        </div>
                        <div>
                        
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
    
    // GET /course/id/lesson
    const courseDes = [
    {
        id: 1,
        name: 'Learn To Code With Python',
        section: [
            {
                id: 1,
                name: 'Before start',
                time: 3,
                part: [
                    {
                        id: 1,
                        name: 'Preview of course',
                        src: 'https://www.youtube.com/embed/6S58yvva978',
                    },
                ]
            },
            {
                id: 2,
                name: 'Basic of python',
                time: 12,
                part: [
                    {
                        id: 1,
                        name: 'Basic',
                        src: 'https://www.youtube.com/embed/5Y-MghiDmQ4',
                    },
                    {
                        id: 2,
                        name: 'Very basic',
                        src: 'https://www.youtube.com/embed/5Y-MghiDmQ4',
                    },
                    {
                        id: 3,
                        name: 'Fucking basic',
                        src: 'https://www.youtube.com/embed/5Y-MghiDmQ4',
                    },
                ]
            },
            {
                id: 3,
                name: 'Datatype of value',
                time: 10,
                part: [
                    {
                        id: 1,
                        name: 'Datatype',
                        src: 'https://www.youtube.com/embed/KrToaEvDzdk"',
                    },
                ]
            },
            {
                id: 4,
                name: 'Syntax & Error',
                time: 18,
                part: [
                    {
                        id: 1,
                        name: 'Syntax',
                        src: 'https://www.youtube.com/embed/AGnECmJFA9U',
                    },
                ]
            },
        ]
    },
      {
        id: 2,
        name: 'Learn To Code With C',
        time: 34,
        section: [
            {
                id: 1,
                name: 'Let`s start',
                part: [
                    {
                        id: 1,
                        name: 'Preview of course',
                        src: 'https://www.youtube.com/embed/6S58yvva978',
                    },
                ]
            },
            {
                id: 2,
                name: 'Basic of python',
                part: [
                    {
                        id: 1,
                        name: 'Basic',
                        src: 'https://www.youtube.com/embed/5Y-MghiDmQ4',
                    },
                ]
            },
            {
                id: 3,
                name: 'Datatype of value',
                part: [
                    {
                        id: 1,
                        name: 'Datatype',
                        src: 'https://www.youtube.com/embed/KrToaEvDzdk"',
                    },
                ]
            },
            {
                id: 4,
                name: 'Syntax & Error',
                part: [
                    {
                        id: 1,
                        name: 'Syntax',
                        src: 'https://www.youtube.com/embed/AGnECmJFA9U',
                    },
                ]
            },
        ],
    },
    //   {
    //     id: 3,
    //     name: 'Learn To Code With Java',
    //     instructor: 'Bill Gates',
    //     price: 30,
    //     src: 'https://blog.newrelic.com/wp-content/uploads/java-logo-2.jpg',
    //   },
    //   {
    //     id: 4,
    //     name: 'Basic for Python',
    //     instructor: 'Bill Gates',
    //     price: 30,
    //     src: 'https://i2.wp.com/www.opensourceforu.com/wp-content/uploads/2019/08/PythonTools-Blockchain.jpg?fit=900%2C589&ssl=1',
    //   },
    //   {
    //     id: 5,
    //     name: 'Basic for C',
    //     instructor: 'Bill Gates',
    //     price: 30,
    //     src: 'https://bs-uploads.toptal.io/blackfish-uploads/blog/article/content/cover_image_file/cover_image/13650/cover-0828_AfterAllTheseYearstheWorldisStillPoweredbyCProgramming_Razvan_Newsletter-2b9ea38294bb08c5aea1f0c1cb06732f.png'
    //   },
    //   {
    //     id: 6,
    //     name: 'Basic for Java',
    //     instructor: 'Bill Gates',
    //     price: 30,
    //     src: 'https://blog.newrelic.com/wp-content/uploads/java-logo-2.jpg',
    //   },
    
    ];
    
    return {
      props: {
        courseDes,
        id,
      },
    };
}






  


export default CourseIDLesson