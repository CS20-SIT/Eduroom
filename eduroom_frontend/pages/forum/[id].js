import React,{Fragment} from 'react'
import IdBlock from '../../components/forum/IdBlock'
import style from '../../styles/forum/showForum';
import GeneralNoNav from "../../components/template/generalnonav";
import NavForum from "../../components/forum/searchForum";
import CommentBlock from "../../components/forum/CommentBlock";
import CreateComment from "../../components/forum/CreateComment";
import BackButton from "../../components/forum/BackButton";
const ForumID = () => {
    return (
    <Fragment>
    <GeneralNoNav >
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
            <div className="idblock">
            <div className="backtoforum">
              <BackButton />
            </div>
            <IdBlock />
            
            <CommentBlock />
            <CreateComment />
            </div>
            
        </div>
        <style jsx>
            {style}
        </style>
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
export default ForumID