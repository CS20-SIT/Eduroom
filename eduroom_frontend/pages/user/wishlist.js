import React,{Fragment,useState,useEffect,useContext} from 'react';
import Wishlists from '../../components/user/wishlists';
import General from '../../components/template/general'
import axios from 'axios';
import api from '../../api';
// import UserContext from '../../contexts/user/userContext'



const Wishlist = () => {
    // const user="08e9d239-b3f2-4db8-b29a-da99a314df92";
    // const userContext = useContext(UserContext)
    // const users = userContext.user.userid;
    let con='';
    let order='addtime desc';
    useEffect(()=>{
        const fetchData=async()=>{
            const res=await api.get('api/user/getWishlist', {
                params:{
                    // userid:user,
                    condition:'',
                    orderby: 'addtime desc'
                }
              });
            setTotalList(res.data);
        }
        fetchData();
    },[]);
    const[totalList,setTotalList]=useState([]);
    const del=(courseid)=>{
        api.post('api/user/deleteWishlist', {
            // data:{
                courseid:courseid
            // }
        }).then(()=>{
            // console.log(courseid+' '+con+' '+order);
            searchEngine(con,order);
        });
    }

    const searchEngine=(condition,orderby)=>{
        api.get('api/user/getWishlist', {
            params:{
                // userid:user,
                condition: condition,
                orderby: orderby
            }
        }).then((response)=>{
            setTotalList(response.data);
        });
        con=condition;
        order=orderby;
    };

    // const user=()=>{
    //     api.get('api/user/getWishlist', {
    //         // params:{
    //             // userid:user,
    //             condition: condition,
    //             orderby: orderby
    //         // }
    //     }).then((response)=>{
    //         setTotalList(response.data);
    //     });
    //     con=condition;
    //     order=orderby;
    // };

    const searching=()=>{
        let searchvalue=document.getElementById('search').value;
        let sortvalue=document.getElementById('sort').value;

        let search='';
        if(searchvalue!==''){
            search='and upper(coursename) like upper(\'%'+searchvalue+'%\')'
        }

        let sort;
        switch(sortvalue){
            case'add time':sort='addtime desc';break;
            case'title':sort='coursename asc';break;
            case'price':sort='price asc';break;
        }

        searchEngine(search,sort);
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
                </center>
            <Wishlists item={totalList} remove={del}></Wishlists>
        </General>
    </Fragment>
    )
}
export default Wishlist