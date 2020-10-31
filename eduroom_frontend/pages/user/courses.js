import React,{Fragment,useState,useEffect} from 'react';
import MyCourses from '../../components/user/myCourses';
import General from '../../components/template/generalnonav';
import axios from 'axios';
const UserCourse = () => {
    useEffect(()=>{
        const fetchData=async()=>{
            const res=await axios.get('https://jsonplaceholder.typicode.com/todos');
            setTotalList(res.data);
            setfilteredList(res.data);
            const result=res.data.slice(0,perPage);
            setMycourse(result);
        }
        fetchData();
    },[]);
    const[count,setCount]=useState(0);
    const[totalList,setTotalList]=useState([]);
    const[filteredList,setfilteredList]=useState([]);
    const[mycourse,setMycourse]=useState([]);
    const perPage=9;

    const changeList=(num)=>{
        if(num>0&&count+num<filteredList.length){
            changeCount(num);
        }else if(num<0&&count+num>=0){
            changeCount(num);
        }else{
            setMycourse(filteredList.slice(count,count+perPage));
        }
    }
    const changeCount=(num)=>{
        setCount(count+num);
        setMycourse(filteredList.slice(count,count+perPage));
    }

    const sorting=()=>{
        let x=document.getElementById('sort').value;
        console.log(x);
        console.log(filteredList[0][x]);
        if(x=='price'){
            x='id';
        }
        setTotalList(filteredList.sort((a,b)=>{
            if(b[x]>=a[x]) return -1;
            else if(b[x]<a[x]) return 1;}));
        changeList(0);
    }
    const listCorse=(boolean)=>{
        const temp=totalList.filter(function (item) {
            return item.completed===boolean;
        });
        setfilteredList(temp);
        setCount(0);
        setMycourse(temp.slice(0,perPage));
    }

    return (
    <Fragment>
        <General>
                <h1>MyCourse</h1>
                Sort by
                <select id='sort' >
                    <option>title</option>
                </select>
                <button onClick={()=>{sorting()}}>Select</button>
                <br></br>
                <button onClick={()=>{sorting()}}>Overall Course</button>
                <button onClick={()=>{listCorse(false)}}>Incompleted Course</button>
                <button onClick={()=>{listCorse(true)}}>Completed Course</button>
                <br></br>
                {/* <WishlistSort item={sort} remove={delSort}></WishlistSort> */}
                <button onClick={()=>{changeList(-1*perPage)}}>Prev</button>
                <button onClick={()=>{changeList(perPage)}}>Next</button>
                {count}
            <MyCourses item={mycourse}></MyCourses>
        </General>
    </Fragment>
    )
}
export default UserCourse