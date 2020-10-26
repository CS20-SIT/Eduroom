import React,{Fragment, useEffect, useState} from 'react'
import api from '../../api'
import ForumBlock from '../../components/forum/forumBlock'
import {Container,Button} from '@material-ui/core'
import Link from 'next/link'
const Forum = () => {
    const [forum,setForum] = useState([])
    useEffect(()=>{
        queryData()
    },[])
    const queryData = () =>{
        api.get('/api/forum').then((res)=>{
            setForum(res.data.data);
            
        })
    }
    const [create,setCreate] = useState()
    return (
    <Fragment>
        <Container>
        <h1>Forum</h1>
        {
            forum.map((el)=>{
                return (<ForumBlock data={el}/>)
            })
        }
        <div>
            <br></br>
            <Link href='/forum/create'>
            <Button variant="outlined" color="primary">create new post</Button>
            </Link>
            
        </div>
        </Container>
    </Fragment>
    )
}
export default Forum