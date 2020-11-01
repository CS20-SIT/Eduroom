import React,{Fragment,useState,useEffect} from 'react';
import Wishlists from '../../components/user/wishlists';
import General from '../../components/template/generalnonav';
import axios from 'axios';
const Wishlist = () => {
    useEffect(()=>{
        const fetchData=async()=>{
            const res=await axios.get('https://jsonplaceholder.typicode.com/albums');
            setTotalList(res.data);
            const result=res.data.slice(0,perPage);
            setWishlist(result);
            // console.log(res.datas);
        }
        fetchData();
    },[]);
    const[count,setCount]=useState(0);
    const[totalList,setTotalList]=useState([]);
    const[wishlist,setWishlist]=useState([]);
    const perPage=9;
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
        changeList(0);

        // return console.log(wishlist[index].id,index);
    }
    const changeList=(num)=>{
        if(num>0&&count+num<totalList.length){
            changeCount(num);
        }else if(num<0&&count+num>=0){
            changeCount(num);
        }else{
            const temp=totalList.slice(count,count+perPage);
            setWishlist(temp);
        }
    }
    const changeCount=(num)=>{
        setCount(count+num);
        const temp=totalList.slice(count,count+perPage);
        setWishlist(temp);
    }

    const sorting=()=>{
        let x=document.getElementById('sort').value;
        console.log(x);
        console.log(totalList[0][x]);
        if(x=='price'){
            x='id';
        }
        const temp=totalList.sort((a,b)=>{
            if(b[x]>=a[x]) return -1;
            else if(b[x]<a[x]) return 1;});
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
        setTotalList(temp);
        changeList(0);
    }

    return (
    <Fragment>
        <General>
                <h1>Wishlist</h1>
                Sort by
                <select id='sort' >
                    <option>title</option>
                    <option>price</option>
                </select>
                <button onClick={()=>{sorting()}}>Select</button>
                <br></br>
                <button onClick={()=>{changeList(-1*perPage)}}>Prev</button>
                <button onClick={()=>{changeList(perPage)}}>Next</button>
                {count}
            <Wishlists item={wishlist} remove={del}></Wishlists>
        </General>
    </Fragment>
    )
}
export default Wishlist