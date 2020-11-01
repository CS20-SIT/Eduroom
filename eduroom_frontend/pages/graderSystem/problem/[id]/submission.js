import React,{Fragment} from 'react'
const Submission = (props)=>{
    return (
        <Fragment>
            {JSON.stringify(props.query.id)}
        </Fragment>
    )
}
export async function getServerSideProps(ctx) {
    return {props: {query:ctx.query}}
}
export default Submission;