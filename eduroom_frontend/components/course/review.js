import React, { Fragment } from "react";
import style from "../../styles/course/review";
const review = () => {
    return (
      <Fragment>
        <div className="box" style={{display:'flex',}}>
        
        <img src="https://musicstation.kapook.com/files_music2008/picture/4/th/21466.jpg"
    className="myimg" ></img>
          <textarea name="comments" id="comments" style={{width:'80%',height:'150px',padding:'2%',
            border:'2px solid #3D467F',borderRadius:'10px',marginTop:'200px',marginLeft:'auto',marginRight:'auto',
            fontSize: 18,color:'#C4C4C4',fontWeight: 'bold',background: 'rgba(242, 236, 254, 0.2)'}}>
              Add a comment ...
            </textarea>     
              </div>
          <style jsx>{style}</style>
    </Fragment>
  );
};
export default review;
