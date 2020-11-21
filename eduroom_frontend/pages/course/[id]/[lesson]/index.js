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
    const [secBG, setSecBG] = useState(0);
    const [part,setPart] = useState(0);
    var secNow = 0, partNow = 0;
    const [srcc,setSrc] = useState("https://www.youtube.com/embed/mWU6_86B10c");
    // Set srcc from secBG part
    const [partType,setPartType] = useState(1);
    const [questionNow,setQuestionNow] = useState(0);

    const checkIcon = (type) => {
        if(type == 1){
            return "https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_play-512.png";
        }
        else if(type == 2){
            return "https://cdn0.iconfinder.com/data/icons/very-basic-android-l-lollipop-icon-pack/24/document-512.png";
        }
        else if(type == 3){
            return "https://cdn0.iconfinder.com/data/icons/math-business-icon-set/93/1_9-512.png";
        }
    }
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

                    {/* Title */}
                    <div className='my-2'>
                        <span className='text-xl text-navy font-quicksand'>{courseDes[id-1].name}</span>
                        <span className="share-icon pointer"><img alt="shareIcon" src="https://cdn3.iconfinder.com/data/icons/black-easy/512/538636-share_512x512.png" width="20px" height="20px" ></img></span>
                        <div className='text-secondary font-quicksand mb-10 my-2'>{"Section "+`${courseDes[id-1].section[secBG].id}`+" : " + `${courseDes[id-1].section[secNow].name}` + "  |  Part " + `${courseDes[id-1].section[secBG].part[part].id}` + " : " + `${courseDes[id-1].section[secBG].part[part].name}`}</div>
                    </div>
                    {/* Title */}


                    <div className="my-8" height="500px">

                        {/* Videos / Materials / Quiz */}
                        <div className={`${partType == 1 ? "inline-block":"hidden"}`}>
                            <iframe className="" width="700" height="450" src={srcc}></iframe>
                        </div>
                        <div className={`${partType == 2 ? "inline-block":"hidden"}`}>
                            <div onClick={() => {
                                downloadItem('http://rathcenter.com/Sheet/Logic.pdf');
                            }}>Download</div>
                        </div>
                        <div className={`${partType == 3 ? "inline-block":"hidden"}`}>
                            {courseDes[id-1].section[secBG].part[part].questionNum.map((q, qNum) => (
                                // <div className={`${questionNow == qNum ? '':"hidden"}`}>
                                <div className="">
                                    <div className="font-quicksand text-xxl text-navy font-bold ml-30">{q.question}</div>
                                    <div className="my-4 text-center mt-10 ml-20">
                                        {q.choice.map((c)=>(
                                            <div className="text-grey my-4 py-8 px-12 pointer rounded-sm bg-white shadow hover-navy">{c}</div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Videos / Materials / Quiz */}

                        {/* Course Content Box */}
                        <div className="course-box bg-white inline-block">
                            <div className="font-lato text-navy text-lg mt-10 mx-8 border-bottom-grey course-content">COURSE CONTENT</div>
                            
                            {/* Map Section */}
                            <div>
                            {courseDes[id-1].section.map((e, index) => (
                                <div>
                                    <div className="section-box py-2 px-6 pointer text-lg font-quicksand" onClick={()=>{
                                        if(sec == index){
                                            setSec(-1);
                                        }
                                        else{
                                            setSec(index);
                                            // secNow = index;
                                            // console.log(secNow+" "+part);
                                        }
                                    }}>
                                        <div className="font-normal my-1">{"Section "+`${e.id}`+" : " + `${e.name}`}</div>
                                        <div className="font-light text-ll text-grey">{`${e.time}`+" mins."}</div>
                                        
                                    </div>
                                    
                                    <div className={`${sec == index ? '':"hidden"}`}>
                                        {e.part.map((ee, indexx) => (
                                            <div className={`${secBG == index&&part == indexx ? "py-4 mx-4 selectPart":"py-4 mx-4"}`}>
                                                <div className="inline-block justify-icon position-ab">
                                                    <img width="24px" src={checkIcon(ee.type)}/>
                                                </div>
                                                <div className="font-quicksand px-2 text-ll pointer font-normal-bold inline-block part-word" onClick={()=>{
                                                    setSrc(ee.src);
                                                    setSecBG(index);
                                                    setPart(indexx);
                                                    setPartType(ee.type);
                                                    // console.log(index+" "+indexx);
                                                }}>{"Part " + `${ee.id}` + ": " + `${ee.name}`}</div>
                                            </div>
                                        ))}
                                        
                                    </div>
                                </div>
                            ))}
                            </div>
                            {/* Map Section */}

                        </div>
                        {/* Course Content Box */}
                        
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
                        type: 1,
                        src: 'https://www.youtube.com/embed/6S58yvva978',
                        questionNum: [],
                    },
                    {
                        id: 2,
                        name: 'Material',
                        type: 2,
                        src: 'resource.pdf',
                        questionNum: [],
                    },
                    {
                        id: 3,
                        name: 'Pretest',
                        type: 3,
                        src: '',
                        questionNum: [
                            {
                                question: "What is Python?",
                                choice: ["Snake", "Computer Language", "Bamboo", "Thonpy"],
                                answer: 1,
                            },
                            {
                                question: "Who Kill Rama VIII?",
                                choice: ["IX", "Prede", "Prayut", "Prawit"],
                                answer: 0,
                            },
                        ]
                    }
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
                        type: 1,
                        src: 'https://www.youtube.com/embed/5Y-MghiDmQ4',
                        questionNum: [],
                    },
                    {
                        id: 2,
                        name: 'Very basic',
                        type: 1,
                        src: 'https://www.youtube.com/embed/hQzbePDFO9I',
                        questionNum: [],
                    },
                    {
                        id: 3,
                        name: 'Fucking basic',
                        type: 1,
                        src: 'https://www.youtube.com/embed/CWXQ031jDe8',
                        questionNum: [],
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
                        type: 1,
                        src: 'https://www.youtube.com/embed/QHM3RTMctJU',
                        questionNum: [],
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
                        type: 1,
                        src: 'https://www.youtube.com/embed/AGnECmJFA9U',
                        questionNum: [],
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