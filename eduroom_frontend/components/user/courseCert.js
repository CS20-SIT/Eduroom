import React, { Fragment } from 'react'
import Certificate from './certificate'
// import html2canvas from 'html2canvas'
const CourseCert = (props) => {
    const formatDate = (date) => {
        const d = new Date(date)
        return d.getFullYear() +'/'+(d.getMonth() +1)+'/' + d.getDate()
    }
    const handleDownload = (index) => {
        // if(html2canvas){
        // html2canvas(document.getElementsByClassName("cert")[0].children[0]).then(canvas=>{
        //     // const canvasWidth= '1754px';
        //     // const canvasHeight = '1240px';
        //     // canvas2Image.saveAsPNG(canvas,canvasWidth,canvasHeight)
        //     const image = canvas.toDataURL("image/png")
        //     const downloadLink = document.createElement('a')
        //     downloadLink.href = image;
        //     downloadLink.download = 'certificate.png'
        //     document.body.appendChild(downloadLink)
        //     downloadLink.click()
        //     document.body.removeChild(downloadLink)
        // })}
    }
	return (
		<Fragment>
			<div className="course-cert">
				<div className="course-content">
					<div style={{paddingBottom:'1rem'}}><b>Course Name:</b> {props.data.coursename}</div>
					<div style={{paddingBottom:'1rem'}}><b>Receive Date:</b> {formatDate(props.data.finishdate)}</div>
                    <div className="download" onClick={()=>handleDownload(props.index)}>Download</div>
				</div>
				<div className="cert">
					<Certificate data={props.data} />
				</div>
			</div>
			<style jsx>
				{`
					.course-cert {
                        display: flex;
                        background:white;
                        border-radius: 2rem;
                        margin-bottom: 2.5rem;
                    }
                    .download {
                        background: #3D467F;
                        border-radius: 25px;
                        color: #fff;
                        font-weight: bold;
                        text-align:center;
                        width: fit-content;
                        padding: .5rem 2rem;
                        cursor: pointer;
                    }
					.course-content {
                        width: 50%;
                        font-size: 1.5em;
                        display:flex;
                        justify-content:center;
                        flex-flow:column;
                        padding: 3rem;
					}
					.cert {
                        width: 50%;
                        display:flex;
                        justify-content:center;
                        align-items:center;
					}
				`}
			</style>
		</Fragment>
	)
}
export default CourseCert
