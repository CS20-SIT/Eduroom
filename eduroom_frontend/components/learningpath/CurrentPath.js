import React,{Fragment, useState} from 'react'
import NodeList from './NodeList'
const CurrentPath = ({path,back}) => {
    const [nodes,setNodes] = useState([])
    useState(()=>{
        let temp = [
            {
                nodeid: 5,
                parent_node_id: 4,
                name: 'Front End 4',
                descriptions: 'Front End 4 description'
            },
            {
                nodeid:6,
                parent_node_id:5,
                name: 'Front End 5',
                descriptions: 'Front End 5 description'
            },
            {
                nodeid: 2,
                parent_node_id:null,
                name: 'Front End 1',
                descriptions: 'Front End 1 description'
            },
            {
                nodeid:4,
                parent_node_id:3,
                name: 'Front End 3',
                descriptions: 'Front End 3 description'
            },
            {
                nodeid:3,
                parent_node_id:2,
                name: 'Front End 2',
                descriptions: 'Front End 2 description'
            }
        ]
        setNodes(temp)
        // Call api to get node list of this path
    },[])
    return (
        <Fragment>
            <div onClick={back}>
                back
            </div>
            <div>
            {path.name}
            </div>
            <div>
                <NodeList nodes={nodes}/>
            </div>
        </Fragment>
    )
}
export default CurrentPath;