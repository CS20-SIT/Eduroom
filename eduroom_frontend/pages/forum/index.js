import React, { Fragment, useEffect, useState } from "react";
import api from "../../api";
import { Container, Button } from "@material-ui/core";
import Link from "next/link";
import SideNav from "../../components/layouts/sidenav/sidenav";
import NavForum from "../../components/forum/searchForum";
import style from '../../styles/forum/showForum';
const Forum = () => {
    const [forum, setForum] = useState([]);
  //   useEffect(() => {
  //     queryData();
  //   }, []);
  //   const queryData = () => {
  //     api.get("/api/forum").then((res) => {
  //       setForum(res.data.data);
  //     });
  //   };
  //   const [create, setCreate] = useState();
  return (
    <Fragment>
        <Container>
        <h1>Forum</h1>
        {
            forum.map((el)=>{
                return (<ForumBlock key={el} data={el}/>)
            })
        }
        <div>
            <br></br>
            <Link href='/forum/create'>
            <Button variant="outlined" color="primary">create new post</Button>
            </Link>
            
        </div>
        </Container>
        <style jsx>{style}</style>
        <style jsx>
        {`
          #nav {
            width: 100%;
          }
          .background-img {
            position: absolute;
            bottom: 0;
            width: 100vw;
          }
        `}
      </style>
    </Fragment>
  );
};
export default Forum;
