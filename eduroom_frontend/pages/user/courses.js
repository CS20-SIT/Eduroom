import React,{Fragment,useState,useEffect} from 'react';
import MyCourses from '../../components/user/myCourses';
import General from '../../components/user/general';
import axios from 'axios';
import api from '../../api';
const UserCourse = () => {
    // let completion=false;
    // let con='';
    // let order='addtime desc';
    const user="08e9d239-b3f2-4db8-b29a-da99a314df92";
    useEffect(()=>{
        const fetchData=async()=>{
            // const res=await axios.get('https://jsonplaceholder.typicode.com/todos');

            const res=await api.post('http://localhost:5000/api/user/getMycourse', {
                userid:user,
                finish:false,
                condition:'',
                orderby: 'addtime desc'
            });
            setTotalList(res.data);
            // setfilteredList(res.data);
            
            // const result=res.data.slice(0,perPage);
            // setMycourse(result);
        }
        fetchData();
    },[]);
    // const[count,setCount]=useState(0);
    const[totalList,setTotalList]=useState([]);
    // const[filteredList,setfilteredList]=useState([]);
    const[completion,setCompletion]=useState(false);
    // const[mycourse,setMycourse]=useState([]);
    // const perPage=9;

    // const changeList=(num)=>{
    //     if(num>0&&count+num<filteredList.length){
    //         changeCount(num);
    //     }else if(num<0&&count+num>=0){
    //         changeCount(num);
    //     }else{
    //         setMycourse(filteredList.slice(count,count+perPage));
    //     }
    // }
    // const changeCount=(num)=>{
    //     setCount(count+num);
    //     setMycourse(filteredList.slice(count,count+perPage));
    // }

    const searchEngine=(finish,condition,orderby)=>{
        axios.post('http://localhost:5000/api/user/getMycourse', {
            userid:user,
            finish:finish,
            condition: condition,
            orderby: orderby
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
        // let search='';
        // if(searchvalue!==''){
        //     search='and upper(coursename) like upper(\'%'+searchvalue+'%\')'
        // }
        // let sort;
        // switch(sortvalue){
        //     case'title':sort='coursename asc';break;
        //     case'add time':sort='addtime desc';break;
        //     case'recently visit':sort='lastvisit desc';break;
        // }
                //isfinished: true
                //lastvisit: "2020-09-22T04:55:14.526Z"
                //coursename: "Test13"
                //addtime: "2020-04-25T17:38:22.120Z"
        searchEngine(boolean,'','addtime desc');
    }

    // const sorting=()=>{
    //     let x=document.getElementById('sort').value;
    //     console.log(x);
    //     console.log(filteredList[0][x]);
    //     if(x=='price'){
    //         x='id';
    //     }
    //     setTotalList(filteredList.sort((a,b)=>{
    //         if(b[x]>=a[x]) return -1;
    //         else if(b[x]<a[x]) return 1;}));
    //     changeList(0);
    // }
    // const listCorse=(boolean)=>{
    //     const temp=totalList.filter(function (item) {
    //         return item.completed===boolean;
    //     });
    //     setfilteredList(temp);
    //     // setCount(0);
    //     // setMycourse(temp.slice(0,perPage));
    // }

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
                {/* <br></br> */}
                {/* <WishlistSort item={sort} remove={delSort}></WishlistSort> */}
                {/* <button onClick={()=>{changeList(-1*perPage)}}>Prev</button>
                <button onClick={()=>{changeList(perPage)}}>Next</button> */}
                {/* {count} */}
            </center>
            <MyCourses item={totalList}></MyCourses>
        </General>
    </Fragment>
    )
}
export default UserCourse