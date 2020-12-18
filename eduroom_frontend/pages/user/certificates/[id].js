import React, {Fragment} from 'react'
import Certificate from '../../../components/user/certificate'
import {renderToStaticMarkup} from 'react-dom/server'
const Certificates = (props) => {
    return (
        <div style={{width:'707px',height:'500px',border:'1px solid black'}}>
        <Certificate data={props.data}/>
        </div>
    )
}
export async function getServerSideProps({req,res,query}) {
    const id = query.id
    // wait for fetch firstname,lastname, coursename,finishdate from backend
    const data = {
        firstName:'Wisarut',lastName:'Kitticharoenphonngam',
        courseName: 'Python For Everybody',
        finishDate: '16 December 2020'
    }
	return { props: {data} }
}

export default Certificates
