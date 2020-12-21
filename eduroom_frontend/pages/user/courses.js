import React,{Fragment,useState,useEffect} from 'react';
import MyCourses from '../../components/user/myCourses';
import General from '../../components/template/general'
import axios from 'axios';
import api from '../../api';
import { useRouter } from 'next/router'
const UserCourse = () => {
    // const user="08e9d239-b3f2-4db8-b29a-da99a314df92";
    useEffect(()=>{
        const fetchData=async()=>{
            // const res=await axios.get('https://jsonplaceholder.typicode.com/todos');
            try{
                const res=await api.get('api/user/getMycourse', {
                    // userid:user,
                    params:{
                        finish:false,
                        condition:'',
                        orderby: 'addtime desc'
                    }
                });
                setTotalList(res.data);
			} catch (err) {
				router.push('/login')
			}
        }
        fetchData();
    },[]);
    const router = useRouter()
    const[totalList,setTotalList]=useState([]);
    const[completion,setCompletion]=useState(false);

    const searchEngine=(finish,condition,orderby)=>{
        api.get('api/user/getMycourse', {
            // userid:user,
            params:{
                finish:finish,
                condition: condition,
                orderby: orderby
            }
        }).then((response)=>{
            setTotalList(response.data);
        });
        setCompletion(finish);
    };

    const searching=()=>{
        let searchvalue=document.getElementById('search').value;
        let sortvalue=document.getElementById('sort').value;

        let search='';
        if(searchvalue!==''){
            search='and upper(coursename) like upper(\'%'+searchvalue+'%\')'
        }
        let sort;
        switch(sortvalue){
            case'title':sort='coursename asc';break;
            case'add time':sort='addtime desc';break;
            case'recently visit':sort='lastvisit desc';break;
        }
        searchEngine(completion,search,sort);
    }

    const coursetype=(boolean)=>{
        document.getElementById('search').value='';
        document.getElementById('sort').selectedIndex=0;
        searchEngine(boolean,'','addtime desc');
    }
    return (
    <Fragment>
        <General>
            <center>
                <h1>MyCourse</h1>
                <button onClick={()=>{coursetype(false)}}>Incompleted Course</button>
                <button onClick={()=>{coursetype(true)}}>Completed Course</button>
                <br></br>
                <input type="text" id="search" placeholder='Search course'></input>
                <br></br>
                Sort by
                <select id='sort' >
                    <option>add time</option>
                    <option>title</option>
                    <option>recently visit</option>
                </select>
                <button onClick={()=>{searching()}}>Search</button>
                <br></br>
            </center>
            <MyCourses item={totalList}></MyCourses>
        </General>
    </Fragment>
    )
}
export default UserCourse