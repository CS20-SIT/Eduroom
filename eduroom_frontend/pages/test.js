import React, {Fragment} from 'react'
import axios from 'axios'
const Test = () => {
    const handleCreateTeam = () => {
        axios.post('https://contest.thaifstt.org/api/createTeam',{teamName:"FSTT-AI-011"})
    }
    const handleQuery = () => {
        axios.get('https://contest.thaifstt.org/api/room').then(res=>{
            console.log(res.data)
        })
    }
    return (
        <Fragment>
            <button onClick={handleCreateTeam}>Create Team</button>
            <button onClick={handleQuery}>Query</button>
        </Fragment>
    )
}
export default Test;