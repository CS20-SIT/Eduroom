import React, { Fragment } from 'react'
import Post from '../course/postedReviewBox'
import style from '../../styles/course/review'
const review = () => {
	return (
		<Fragment>
			<div className="box" style={{ display: 'flex', background: 'rgba(255,255,255,.7)' }}>
				<div className=" image-position">
					<img src="https://musicstation.kapook.com/files_music2008/picture/4/th/21466.jpg" className="myimg"></img> 
					
						<span className="fa fa-star" style={{color: 'white'}}></span>
<span className="fa fa-star" style={{color: 'white'}}></span>
<span className="fa fa-star" style={{color: 'white'}}></span>
<span className="fa fa-star" style={{color: 'white'}}></span>
<span className="fa fa-star" style={{color: 'white'}}></span>

				</div>

				<textarea
					name="comments"
					id="comments"
					style={{
						width: '80%',
						height: '150px',
						padding: '2%',
						border: '2px solid #3D467F',
						borderRadius: '10px',
						marginTop: '200px',
						marginLeft: 'auto',
						marginRight: 'auto',
						fontSize: 18,
						color: '#C4C4C4',
						fontWeight: 'bold',
						background: 'rgba(242, 236, 254, 0.2)',
					}}
				>
					Add a comment ...
				</textarea>
				<button
					className="sendBox"
					type="submit"
					style={{
						position: 'absolute',
						width: '122px',
						height: '41px',
						background: '#3D467F',
						marginLeft: '68%',
						marginTop: '25%',
						marginRight: 'auto',
						color: '#FFFFFF',
						fontSize: 25,
						borderRadius: '20px',
						border: 'none',
					}}
				>
					Send
				</button>

				<div
					style={{
						position: 'absolute',
						width: '1016px',
						height: '0px',
						border: '1px solid #7B89DD',
						background: '#7B89DD',
						marginLeft: '7.5%',
						marginRight: 'auto',
						marginTop: '30%',
					}}	
				><p className="heading">Student Feedback</p>

				  <div className="side" style={{float: 'left',width: '15%',marginTop:'10px'}}>
    <div>5 star</div>
  </div>
  <div className="middle" style={{float: 'left',width: '15%',marginTop:'10px'}}>
    <div className="bar-container" style={{width: '100%',backgroundColor: '#f1f1f1',textAlign: 'center',color: 'white'}}>
      <div className="bar-5" style={{width: '60%', height: '18px', backgroundColor: '#4CAF5'}}></div>
    </div>
  </div>
  <div className="side-right" style={{float: 'left',width: '15%',marginTop:'10px',textAlign: 'right'}}>
    <div><span className="fa fa-star" style={{color: '#FB9CCB'}}></span>
<span className="fa fa-star" style={{color: '#FB9CCB'}}></span>
<span className="fa fa-star" style={{color: '#FB9CCB'}}></span>
<span className="fa fa-star" style={{color: '#FB9CCB'}}></span>
<span className="fa fa-star" style={{color: '#FB9CCB'}}></span></div>
  </div>

                
             <div className="side" style={{float: 'left',width: '15%',marginTop:'10px'}}>
    <div>4 star</div>
  </div>
  <div className="middle" style={{float: 'left',width: '15%',marginTop:'10px'}}>
    <div className="bar-container" style={{width: '100%',backgroundColor: '#f1f1f1',textAlign: 'center',color: 'white'}}>
      <div className="bar-4" style={{width: '30%', height: '18px', backgroundColor: '#4CAF5'}}></div>
    </div>
  </div>
  <div className="side-right" style={{float: 'left',width: '15%',marginTop:'10px',textAlign: 'right'}}>
    <div><span className="fa fa-star" style={{color: 'white'}}></span>
<span className="fa fa-star" style={{color: '#FB9CCB'}}></span>
<span className="fa fa-star" style={{color: '#FB9CCB'}}></span>
<span className="fa fa-star" style={{color: '#FB9CCB'}}></span>
<span className="fa fa-star" style={{color: '#FB9CCB'}}></span></div>
  </div>
            </div>
	
				<Post />
				<Post />
				<Post />
				
			</div>
			<style jsx>{style}</style>
		</Fragment>
	)
}
export default review
