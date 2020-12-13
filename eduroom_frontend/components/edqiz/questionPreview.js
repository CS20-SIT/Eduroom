import React, {Fragment, useEffect} from 'react'
import api from '../../api'

const Preview = ({index,data}) => {
    
    useEffect(()=>{
        if(data.image){
            var reader = new FileReader();
            reader.onload = function(e) {
            document.getElementById('img-preview'+index).style.backgroundImage = "url('"+e.target.result+"')";
            }
            console.log('data',data)
            
           
        
            reader.readAsDataURL(data.image);

           
        }
    },[])
    return (
        <Fragment>
        <div className="question-preview">
            <div className="img-preview" id={'img-preview'+index}>
            </div>
            <div className="question-name-preview">
                {data.question} 
            </div>
            <div className="time-point-preview">
                <div style={{width:'100%',fontSize:'1.5em'}}>{data.time}</div>
                <div>Seconds</div>
            </div>
            <div className="time-point-preview">
                <div style={{width:'100%',fontSize:'1.5em'}}>{data.point}</div>
                <div>Points</div>
            </div>
        </div>
        <style jsx>
            {
                `
                .img-preview{
                    width: 15%;
                    height: 100%;
                    background-position: center;
                    background-size: cover;
                }
                .question-preview{
                    width: 100%;
                    height: 120px;
                    background: #D5C1FC33;
                    border-radius: 10px;
                    padding: 2%;
                    display:flex;
                    flex: 1 1 auto;
                    flex-wrap: wrap; 
                    margin: 3% 0%;  
                }
                .question-name-preview {
                    width: 60%;
                    font-size: 1.3em;
                    display:flex;
                    justify-content: center;
                    align-items: center;
                }
                .time-point-preview {
                    width: 10%;
                    display:flex;
                    border: 2px solid black;
                    border-radius: 10px;
                    font-size: 0.9em;
                    font-weight: 600;
                    justify-content: center;
                    align-items: center;
                    margin-left: 2.5%;
                    margin-top: 1%;
                    margin-bottom: 1%;
                    flex-wrap: wrap;
                }
                `
            }
        </style>
        </Fragment>
    )
}
export default Preview