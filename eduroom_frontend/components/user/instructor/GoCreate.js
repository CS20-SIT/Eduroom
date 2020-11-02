const { default: Link } = require("next/link");
import React,{Fragment} from 'react'



function GoCreate()
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
                  top: 760px;
                  
                  
                }
                #title{
                  font-size: 25px;
                  text-align: center ;
                }
                #info {
                  font-size: 18px;
                  color: gray;
                }
                
                `
            }
        </style>
        <a id="box"><a id="title"><Link href="../../../user/instructor/course/create"><a><img src="https://img.icons8.com/pastel-glyph/64/000000/plus.png"/></a></Link>
        <br></br>
        </a>
        

        <a id="title">
          <a>Create Your Course</a><br></br>

          


        
        
        </a>
        
        
        </a>
        
    </div>
    </Fragment>
}
export default GoCreate;