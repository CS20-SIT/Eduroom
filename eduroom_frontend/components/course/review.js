import React, { Fragment } from "react";
import style from "../../styles/course/review";
const review = () => {
    return (
      <Fragment>
        <div className="box">


          
          <textarea name="comments" id="comments" style={{width:'80%',height:'150px',padding:'2%',
            border:'2px solid #3D467F',borderRadius:'10px',marginLeft:'auto',marginRight:'auto',
            fontSize: 18,color:'#C4C4C4',fontWeight: 'bold',background: 'rgba(242, 236, 254, 0.2)'}}>
              Add a comment ...
            </textarea>     
              </div>
          <style jsx>{style}</style>
    </Fragment>
  );
};
export default review;
