import React, { Fragment, useEffect, useState } from "react";
import NavForum from "../../../components/forum/searchForum";
import style from '../../../styles/forum/showForum';
import GeneralNoNav from "../../../components/template/generalnonav";
import RoomTab from "../../../components/forum/RoomTab";
import ForumBlock from "../../../components/forum/forumBlock";
import api from '../../../api';
import { useRouter } from "next/router";
import { makeStyles } from '@material-ui/core/styles'
import BackButton from '../../../components/forum/BackButton'

const roomID = (props) =>{
    const [data, setData] = useState([]);
    useEffect(() => {
        const GetData = async () => {
        const result = await api.get(`/api/forum/room/`,{params:{roomname:router.query.room}});
        setData(result.data.data);
        console.log(result);
        }
        GetData()
      }, [])
      const router = useRouter()
      const useStyles = makeStyles((theme) => ({
  root: {
   flexGrow: 1,
  },
  paper: {
   padding: theme.spacing(2),
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'flexStart',
   // textAlign: 'center',
   margin: '15px',
   color: theme.palette.text.secondary,
  },
 }))
 const classes = useStyles()
      return (
        <Fragment>
          <GeneralNoNav>
            <div
              style={{
                display: "flex",
                flex: "1 1 auto",
                justifyContent: "space-between",
                background: "#EFF0F6",
              }}
            >
            <div id="nav">
                <NavForum />
                <div className="backtoforum">
                    <BackButton />
                </div>
                <div className="roomtab">
                    <RoomTab />
                </div>
                <div className="forumblock">
                    <ForumBlock />
                </div>
            </div>
        <style jsx>{style}</style>
        <style jsx>
        {`
          #nav {
            width: 100%;
            height: 100%;
          }
          .background-img {
            position: absolute;
            bottom: 0;
            width: 100%;
          }
        `}
        </style>
      </div>
      </GeneralNoNav>
    </Fragment>
  );
};
export default roomID;