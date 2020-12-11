import React, { Fragment,useEffect, useState } from "react";
import IdBlock from "../../components/forum/IdBlock";
import style from "../../styles/forum/showForum";
import GeneralNoNav from "../../components/template/generalnonav";
import ForumNav from '../../components/forum/layout/forumNav';
import CommentBlock from "../../components/forum/CommentBlock";
import CreateComment from "../../components/forum/CreateComment";
import BackButton from "../../components/forum/BackButton";
import api from '../../api';
const ForumID = (props) => {
  console.log(props);
  const [data, setData] = useState([]);
  const GetData = async () => {
    const result = await api.get(`/api/forum/${props.id}`);
    console.log(result.data.data.comment);
    setData(result.data.data.comment);
    console.log(props.id);
  };
  useEffect(() => {
    GetData();
  }, []);
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
          <div id="nav" >
            <ForumNav />
            <div className="idblock">
              <div className="backtoforum">
                <BackButton />
              </div>
              <IdBlock />
              <CommentBlock  data={data} id ={props.id} />
              <CreateComment GetData={GetData} id ={props.id} />
            </div>
          </div>
          <style jsx>{style}</style>
          <style jsx>
            {`
              #nav {
                width: 100%;
                height: 100%;
              }
            `}
          </style>
        </div>
      </GeneralNoNav>
    </Fragment>
  );
};

export async function getServerSideProps(ctx) {
  try {
    const id = ctx.query.id;
    return { props: { id } };
  } catch (err) {
    return { props: { id: "" } };
  }
}

export default ForumID;

