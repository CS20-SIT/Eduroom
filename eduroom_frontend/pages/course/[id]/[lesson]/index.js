import React, { Fragment, useState, useEffect } from 'react';
import utils from '../../../../styles/course/utils';
import GeneralNoNav from '../../../../components/template/generalnonav';
import Link from 'next/link';

import api from '../../../../api'

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { ContentFlag } from 'material-ui/svg-icons';

// const CourseIDLesson = ({ courseDes, id }) => {
const CourseIDLesson = ({ id }) => {

    useEffect(() => {
        console.log(id)
        const fetchData = async () => {
            try{
                let res = await api.post('/api/course/getCourseSectionPart', { courseID: id })
                console.log(res.data)
                setCourseDes(res.data);

            } catch(err){
                console.log(err.message);
            }
        }
        fetchData()
    }, [])
    const [courseDes, setCourseDes] = useState(null)

    

    

    const [sec,setSec] = useState(0); 
    const [secBG, setSecBG] = useState(0);
    const [part,setPart] = useState(0);
    var secNow = 0, partNow = 0;
    console.log(courseDes);
    const [srcc,setSrc] = useState('');
    
    // courseDes.section[secBG].part[part].src
    // Set srcc from secBG part

    const [partType,setPartType] = useState(1);
    // const [questionNow,setQuestionNow] = useState(0);
    // const [choiceNow,setChoiceNow] = useState([]);
    // const [ansChoice,setAnsChoice] = useState([]);
    const [submitValid,setSubmitValid] = useState(0);
    let [styleOfChoice,setStyleOfChoice] = useState({});
    // let [submitYet,setSubmitYet] = useState(0);

    
    // Green text-grey my-4 py-8 pointer rounded-sm bg-white shadow text-center choice-size border-green
    const greenBox = "text-white my-4 py-8 rounded-sm bg-green shadow text-center choice-size border-green-2";

    // Blue text-grey my-4 py-8 pointer rounded-sm bg-white shadow hover-anti-navy text-center choice-size
    const blueBox = "text-grey my-4 py-8 pointer rounded-sm bg-white shadow hover-anti-navy text-center choice-size";
    
    // Red  text-grey my-4 py-8 pointer rounded-sm bg-white shadow text-center choice-size border-red
    const redBox = "text-white my-4 py-8 rounded-sm bg-red shadow text-center choice-size border-red-2";
    
    // White text-grey my-4 py-8 pointer rounded-sm bg-white shadow hover-navy text-center choice-size
    const whiteBox = "text-grey my-4 py-8 pointer rounded-sm bg-white shadow hover-navy text-center choice-size";

    // White don't have border
    const whiteAntiBorderBox = "text-grey my-4 py-8 rounded-sm bg-white shadow  text-center choice-size border-white-2";


    const changeChoiceAndCheckSubmit = (qNum) => {
        if(courseDes.section[secBG].submitYet == 1) return
        const courseDesTemp = courseDes;
        
        courseDesTemp.section[secBG].choiceNow[courseDesTemp.section[secBG].questionNow] = qNum; 
        console.log(qNum+" "+courseDesTemp.section[secBG].choiceNow[courseDesTemp.section[secBG].questionNow])
        // const arr = [...courseDes.section[secBG].choiceNow];
        // arr[courseDes.section[secBG].questionNow] = qNum;
        // courseDes.section[secBG].choiceNow = arr;
        // setChoiceNow(arr);

        var count = 0;
        for(var i = 0; i < courseDes.section[secBG].choiceNow.length; i++){
            // console.log("arr[] "+arr[i]);
            if(courseDes.section[secBG].choiceNow[i] != -1){
                count++;
            }
        }
        if(count == courseDes.section[secBG].choiceNow.length){
            courseDesTemp.section[secBG].submitValid = 1;
            
            // setSubmitValid(1);
        }
        setCourseDes(courseDesTemp);
        if(submitValid == 0){
            setSubmitValid(-1);
        }
        else{
            setSubmitValid(0);
        }
        
        // console.log(count +" "+arr.length);
        console.log(courseDes);
    }

    const setAnsChoiceFunc = (qN) => {
        const arr=[];
        for(var i = 0; i < qN.length; i++){
            arr.push(qN[i].answer);
        }
        // console.log(arr);
        // setAnsChoice(arr);
        courseDes.section[secBG].ansChoice = arr;
    }

    const showAnswer = () =>{
        const courseDesTemp = courseDes;
        courseDesTemp.section[secBG].submitYet = 1;
        setCourseDes(courseDesTemp);
        if(submitValid == 0){
            setSubmitValid(-1);
        }
        else{
            setSubmitValid(0);
        }
        // setSubmitYet(1);
    }


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
    
    let content = null
    if (courseDes) {
        content = (
    
            <GeneralNoNav>
            <div className='bg-little-grey '>
                <div className="pt-4"><div className="mt-4 mx-8"><Link href={`/course/${id}`}><span className='font-quicksand text-ll text-navy border-navy px-3 py-1 text-lg pointer rounded-md'>Back</span></Link></div></div>
                <div className='container-2'>

                    {/* Title */}
                    <div className='my-2'>
                        <span className='text-xl text-navy font-quicksand'>{courseDes.courseName}</span>
                        <span className="share-icon pointer"><img alt="shareIcon" src="https://cdn3.iconfinder.com/data/icons/black-easy/512/538636-share_512x512.png" width="20px" height="20px" ></img></span>
                        <div className='text-secondary font-quicksand mb-10 my-2'>{"Section "+`${courseDes.section[secBG].id}`+" : " + `${courseDes.section[secNow].sectionName}` + "  |  Part " + `${courseDes.section[secBG].part[part].id}` + " : " + `${courseDes.section[secBG].part[part].partName}`}</div>
                    </div>
                    {/* Title */}


                    <div className="my-8" height="500px">

                        {/* Videos / Materials / Quiz */}
                        <div className={`${partType == 1 ? "inline-block":"hidden"}`}>
                            {/* <iframe className="" width="700" height="450" src={srcc}></iframe> */}
                            <video width="700" height="450" controls>
                                <source src={courseDes.section[secBG].part[part].src} type="video/mp4"></source>
                                {/* <source src={`${srcc}+".mp4"`} type="video/mp4"></source> */}
                            </video>

                            <div className="my-8 font-quicksand text-secondary mx-2 text-lg">{courseDes.section[secBG].part[part].partDescript}</div>
                        </div>
                        <div className={`${partType == 2 ? "inline-block":"hidden"}`}>
                            <div className="">
                                <div className="ml-20">
                                    <div className="my-4 mt-4 px-8 py-4 bg-white border-navy rounded-sm">
                                        <div className="font-quicksand text-secondary inline-block">{`${courseDes.courseName} Material.pdf`}</div>
                                        <div className="ml-20 inline-block">
                                            <a href={courseDes.section[secBG].part[part].src} download={`${courseDes.courseName} Material`}>
                                                <div className="mt-1"><img alt="downloadIcon" src="https://cdn0.iconfinder.com/data/icons/essentials-9/128/__Download-512.png" width="18px" height="18px" ></img></div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div onClick={() => {
                                downloadItem('http://rathcenter.com/Sheet/Logic.pdf');
                            }}>Download</div> */}
                        </div>
                        <div className={`${partType == 3 ? "section-part flex flex-col items-center":"hidden"}`}>
                            <div className={`${courseDes.section[secBG].submitValid == 0 ? "ml-auto inline-block text-secondary rounded-lg border-grey-2 px-6 py-2 text-sm disabled font-bold" : ( courseDes.section[secBG].submitYet == 0 ? "ml-auto inline-block text-navy rounded-lg border-navy-2 px-6 py-2 text-sm pointer font-bold submit-hover" : "ml-auto inline-block text-navy rounded-lg border-navy-2 px-6 py-2 text-sm pointer font-bold submit-anti-hover" )}`} 
                            onClick={() => {
                                if(courseDes.section[secBG].submitValid == 0) return
                                showAnswer();
                                // console.log(ansChoice);
                            }}
                            
                            >SUBMIT</div>
                            {courseDes.section[secBG].part[part].questionNum.map((q, qNum) => (
                                <div key={qNum} className={`${courseDes.section[secBG].questionNow == qNum ? '':"hidden"}`}>
                                    <div className="font-quicksand text-center text-xxl text-navy font-bold">{q.question}</div>
                                    <div className="my-4 mt-10">
                                        {q.choice.map((c, cNum)=>(
                                            <div key={cNum} className={`${courseDes.section[secBG].submitYet == 1 ? (courseDes.section[secBG].ansChoice[courseDes.section[secBG].questionNow] == cNum ? (greenBox) : ( courseDes.section[secBG].choiceNow[courseDes.section[secBG].questionNow] == cNum ? (redBox) : (whiteAntiBorderBox) ) ) : ( courseDes.section[secBG].choiceNow[courseDes.section[secBG].questionNow] == cNum ? (blueBox) : (whiteBox) )}`} onClick={()=>{
                                                changeChoiceAndCheckSubmit(cNum);
                                            }}>
                                                {/* choiceNow[questionNow] == cNum  ? (submitYet == 1 ? (choiceNow[questionNow] == ansChoice[questionNow] ? ({greenBox}) : ({redBox}) ) : ({whiteBox}) ) : ({whiteBox})  */}
                                                {c}
                                            </div>
                                            
                                        ))}
                                    </div>
                                </div>
                            ))}
                            <div className="mt-10" width="500px" >
                                {courseDes.section[secBG].part[part].questionNum.map((q, qNum) => (
                                    <div key={qNum} className={`${courseDes.section[secBG].questionNow == qNum ? ( courseDes.section[secBG].submitYet == 0 ? "inline-block mx-2 py-2 px-3 rounded-full border-navy pointer text-white bg-navy" : ( courseDes.section[secBG].ansChoice[qNum] == courseDes.section[secBG].choiceNow[qNum] ? "inline-block mx-2 py-2 px-3 rounded-full border-green pointer text-green bg-white" : "inline-block mx-2 py-2 px-3 rounded-full border-red pointer text-red bg-white"  ) ) : courseDes.section[secBG].submitYet == 0 ? ("inline-block mx-2 py-2 px-3 rounded-full border-navy pointer text-navy") : ( courseDes.section[secBG].ansChoice[qNum] == courseDes.section[secBG].choiceNow[qNum] ? "inline-block mx-2 py-2 px-3 rounded-full border-green pointer text-white bg-green" : "inline-block mx-2 py-2 px-3 rounded-full border-red pointer text-white bg-red"  ) }`} onClick={()=>{
                                        // setQuestionNow(qNum);
                                        courseDes.section[secBG].questionNow = qNum;
                                    }}>
                                        {qNum+1}
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* Videos / Materials / Quiz */}

                        {/* Course Content Box */}
                        <div className="course-box bg-white inline-block">
                            <div className="font-lato text-navy text-lg mt-10 mx-8 border-bottom-grey course-content">COURSE CONTENT</div>
                            
                            {/* Map Section */}
                            <div>
                            {courseDes.section.map((e, index) => (
                                <div key={index}>
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
                                        <div className="font-normal my-1">{"Section "+`${e.id}`+" : " + `${e.sectionName}`}</div>
                                        <div className="font-light text-ll text-grey">{`${e.time}`+" mins."}</div>
                                        
                                    </div>
                                    
                                    <div className={`${sec == index ? '':"hidden"}`}>
                                        {e.part.map((ee, indexx) => (
                                            <div key={indexx} className={`${secBG == index&&part == indexx ? "py-4 mx-4 selectPart":"py-4 mx-4"}`}>
                                                <div className="inline-block justify-icon position-ab">
                                                    <img width="24px" src={checkIcon(ee.type)}/>
                                                </div>
                                                <div className="font-quicksand px-2 text-ll pointer font-normal-bold inline-block part-word" onClick={()=>{
                                                    // console.log(indexx)
                                                    setSrc(ee.src);
                                                    setSecBG(index);
                                                    setPart(indexx);
                                                    setPartType(ee.type);
                                                    // setChoiceNow(Array(ee.questionNum.length).fill(-1));
                                                    // courseDes.section[secBG].part[part].choiceNow = Array(ee.questionNum.length).fill(-1);
                                                    // setAnsChoiceFunc(ee.questionNum);

                                                }}>{"Part " + `${ee.id}` + ": " + `${ee.partName}`}</div>
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
                            {
                                question: "Do you here the people sing?",
                                choice: ["Yes", "No", "O", "K"],
                                answer: 2,
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
        // courseDes,
        id,
      },
    };
}






  


export default CourseIDLesson