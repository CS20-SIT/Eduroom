import React, {Fragment,useState} from 'react'
import UserBar from './Userbar'
import AllPath from './AllPath'
import CurrentPath from './CurrentPath'
const LearningPath = () => {
    const path = [{
        id:1,
        name: "Front End",
        description: "Doing UI"
    },{
        id:2,
        name: "Back End",
        description: "Doing Backend"
    },{
        id:3,
        name: "Cyber Security",
        description: "Protect our system"
    },{
        id:4,
        name: "Data Science",
        description: "Use Data for benefit"
    }]
    const [current,setCurrent] = useState(null);
    const selectPath = (val) => {
        let current = path.find(el=>el.id==val);
        setCurrent(current)
    }
    const back = () => {
        setCurrent(null)
    }
    return (
        <Fragment>
            <UserBar user={{level:50,trophy:3,exp:5000}}/>
            <div className="learning-path">
                {current ? (
                    <CurrentPath path={current} back={back}/>
                ):(
                    <AllPath path={path} selectPath={selectPath}/>
                )}
            </div>
            <style jsx>
                {
                    `.learning-path {
                    width: 100%;
                    padding: 0rem 6rem;
                    }`
                }
            </style>
        </Fragment>
    )
}
export default LearningPath;