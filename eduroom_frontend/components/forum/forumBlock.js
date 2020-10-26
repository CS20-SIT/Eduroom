import React,{Fragment} from 'react'

const forumBlock = ({data}) => {
    return (
    <Fragment>
        <div>
            {data.topic}
        </div>
        <div>
            {data.username}
        </div>
        <div>
            {data.date}
        </div>
    </Fragment>)
}
export default forumBlock