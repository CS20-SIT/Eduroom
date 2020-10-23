import React,{Fragment,useState,useEffect} from 'react';
import Wishlists from '../../components/wishlist/wishlists';
import axios from 'axios';
const Wishlist = () => {
    useEffect(()=>{
        const fetchData=async()=>{
            const res=await axios.get('https://jsonplaceholder.typicode.com/albums');
            setTotalList(res.data);
            const result=res.data.slice(0,10)
            setWishlist(result);
            // console.log(res.datas);
        }
        fetchData();
    },[]);
    const[count,SetCount]=useState(0);
    const[totalList,setTotalList]=useState([]);
    const[wishlist,setWishlist]=useState([]);
    const perPage=10;
    // const wishlist=[
    //     {title:'TEST',price:100},
    //     {title:'TEST2',price:300},
    //     {title:'TEST3',price:200},
    // ];
    const del=(index)=>{
        // const temp=wishlist.slice();
        // temp[index].id*=2;
        // setWishlist(temp);

        // const temp=wishlist.slice();
        // temp.splice(index,1);
        // setWishlist(temp);

        const temp=totalList.slice();
        temp.splice(index+count,1);
        setTotalList(temp);
        changeCount(0);

        // return console.log(wishlist[index].id,index);
    }
    const changeCount=(num)=>{
        if(count+num<totalList.length+Math.abs(num)&&count+num>=0){
            SetCount(count+num);
            const temp=totalList.slice(count,count+perPage);
            setWishlist(temp);
        }
    }
    return (
        <Fragment>
            <h1>Wishlist</h1>
            <button onClick={()=>{changeCount(-1*perPage)}}>Prev</button>
            <button onClick={()=>{changeCount(perPage)}}>Next</button>
            {count}
            <Wishlists item={wishlist} remove={del}></Wishlists>
        </Fragment>
    )
}
export default Wishlist