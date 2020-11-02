const { default: Link } = require("next/link");
import React,{Fragment} from 'react'



function Course3()
{
    return <Fragment>
    <div>
        <style jsx>
            {
                `
                #box {
                  border-radius: 25px;
                  border: 2px solid black;
                  padding: 20px; 
                  width: 676px;
                  height: 138px;  
                  position: absolute;
                  left: 100px;
                  top: 540px;
                  
                }
                #title{
                  font-size: 25px;
                }
                #info {
                  font-size: 18px;
                  color: gray;
                }
                
                `
            }
        </style>
        <a id="box"><a id="title">Learn To Code With C
        <br></br>
        </a>
        

        <a id="info">
          <a>5-12-2019</a><br></br>

          <br></br>
          <a id="info">There are many variation of passages of Lorem Ipsum availble, but the</a><br></br>
          
          <a id="info">majority have suffered alternative in some form</a>
          <br></br>


        
        
        </a>
        
        
        </a>
        
    </div>
    </Fragment>
}
export default Course3;