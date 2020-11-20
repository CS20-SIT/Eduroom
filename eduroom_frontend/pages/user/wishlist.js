import React,{Fragment,useState,useEffect} from 'react';
import Wishlists from '../../components/user/wishlists';
import General from '../../components/user/general';
import axios from 'axios';
import api from '../../api';
const Wishlist = () => {
    const user="08e9d239-b3f2-4db8-b29a-da99a314df92";
    // const user="00000";
    let con='';
    let order='addtime desc';
    useEffect(()=>{
        const fetchData=async()=>{
            // const res=await api.get('https://jsonplaceholder.typicode.com/albums');
            const res=await api.post('http://localhost:5000/api/user/getWishlist', {
                userid:user,
                condition:'',
                orderby: 'addtime desc'
              });
            // const res=await api.get('https://jsonplaceholder.typicode.com/albums');
            // console.log(":"+res.data);
            setTotalList(res.data);

            // const result=res.data.slice(0,perPage);
            // setWishlist(result);
            // console.log(res.datas);
        }
        fetchData();
    },[]);
    // const[count,setCount]=useState(0);
    const[totalList,setTotalList]=useState([]);
    // const[wishlist,setWishlist]=useState([]);
    // const perPage=9;
    // const wishlist=[
    //     {title:'TEST',price:100},
    //     {title:'TEST2',price:300},
    //     {title:'TEST3',price:200},
    // ];
    const del=(userid,courseid)=>{
        axios.post('http://localhost:5000/api/user/postDeleteWishlist', {
            userid:userid,
            courseid:courseid
        }).then(()=>{
            console.log(con+' '+order);
            searchEngine(con,order);
        });
        // const temp=wishlist.slice();
        // temp[index].id*=2;
        // setWishlist(temp);

        // const temp=wishlist.slice();
        // temp.splice(index,1);s
        // setWishlist(temp);
        // console.log('ll')
        // console.log(index);

        ///111
        // let temp=totalList.slice();
        // temp.splice(index,1);
        // setTotalList(temp);

        // console.log(temp)

        // const newArr = [];
        // for(let i=0;i<temp.length;i++){
        //     if(i !== index) newArr.push(temp[i]);
        // }

        // temp = temp.splice(index+count,1);
        //temp = newArr;

        // let k = newArr.slice();

        // console.log(newArr)



        // changeList(0);

        // return console.log(wishlist[index].id,index);
    }
    // useEffect(()=>{
    //     console.log('total was changed');
    // },[totalList]);
    // const changeList=(num)=>{
    //     if(num>0&&count+num<totalList.length){
    //         changeCount(num);
    //     }else if(num<0&&count+num>=0){
    //         changeCount(num);
    //     }else{
    //         const temp=totalList.slice(count,count+perPage);
    //         setWishlist(temp);
    //     }
    // }
    // const changeCount=(num)=>{
    //     setCount(count+num);
    //     const temp=totalList.slice(count,count+perPage);
    //     setWishlist(temp);
    // }

    const searchEngine=(condition,orderby)=>{
        axios.post('http://localhost:5000/api/user/getWishlist', {
            userid:user,
            condition: condition,
            orderby: orderby
        }).then((response)=>{
            setTotalList(response.data);
        });
        con=condition;
        order=orderby;
    };



    const searching=()=>{
        let searchvalue=document.getElementById('search').value;
        let sortvalue=document.getElementById('sort').value;
        // console.log(x);
        // console.log(totalList[0][x]);
        // if(x=='price'){
        //     x='id';
        // }
        let search='';
        if(searchvalue!==''){
            search='and upper(coursename) like upper(\'%'+searchvalue+'%\')'
        }
        // console.log(search);
        let sort;
        switch(sortvalue){
            case'add time':sort='addtime desc';break;
            case'title':sort='coursename asc';break;
            case'price':sort='price asc';break;
        }
        // console.log(y);
        searchEngine(search,sort);

        // setTotalList(res.data);

        // const temp=totalList.sort((a,b)=>{
        //     if(b[x]>=a[x]) return -1;
        //     else if(b[x]<a[x]) return 1;});

        // const temp=totalList.sort(
        //     (a,b)=>{
        //         let index=0;
        //         while(true) {
        //             if(b[sort[0][index]]>a[sort[0][index]]) return -1;
        //             else if(b[sort[0][index]]<a[sort[0][index]]) return 1;
        //             else{
        //                 if(index<sort.length-1) index++;
        //                 else return -1;
        //             }
        //         }
        //     })

        // setTotalList(temp);

        // changeList(0);
    }

    return (
    <Fragment>
        <General>
                <center>
                <h1>Wishlist</h1>
                <input type="text" id="search" placeholder='Search course'></input>
                <br></br>
                Sort by
                <select id='sort' >
                    <option>add time</option>
                    <option>title</option>
                    <option>price</option>
                </select>
                <button onClick={()=>{searching()}}>Search</button>
                {/* <br></br>
                <button onClick={()=>{changeList(-1*perPage)}}>Prev</button>
                <button onClick={()=>{changeList(perPage)}}>Next</button>
                {count} */}
                </center>
            <Wishlists item={totalList} remove={del}></Wishlists>
        </General>
    </Fragment>
    )
}
export default Wishlist