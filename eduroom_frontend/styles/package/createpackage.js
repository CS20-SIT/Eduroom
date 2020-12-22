import css from 'styled-jsx/css'
export default css`
.course-image{
    background-position: center center;
    background-repeat: no-repeat;
    width: 120px;
    height: 100px;
}
.package-header {
    display: flex;
    font-size: 1.7em;
    padding: 4% 6% 1% 10%;
    font-weight: bold;
}
.package-bg {
    max-width: 100vw;
    min-height: 100vh;
    background-image: url(/images/package/package-bg-top.svg);
    background-repeat: no-repeat;
    background-size: 100%;
    background-attachment: fixed;
    background-color: #f4f5f7;
}
.center {
    display: flex;
    justify-content: center;
}
.container {
    background-color: rgba(255,255,255,0.8);
    width: 80%;
    margin: auto auto 5% auto;
    border-radius: 10px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.25);
    display: flex;
    flex-direction: column;
}
.pd-4-10 {
    padding: 4% 10%;
}
.pd-4-15 {
    padding: 4% 15%;
}
.pt{
  padding-top: 30px;
}
input,select,textarea {
    border: 1px solid #A7ABC5;
    width: 100%;
    padding: 8px 20px;
    border-radius: 5px;
    font-size: 1em;
    margin-top: 6px;
    color: #3d467f;
    font-weight: 500;
    background-color: rgba(255,255,255,0.1);
}
input[type=checkbox] {
    width: 5%;
    margin: 5px;
    height: 20px;
    width: 20px;
    background-color: #3d467f;
}
.mgt-0 {
    margin-top: 0;
}
::placeholder {
    color: #3d467f;
    font-weight: 500;
}

.imageupload {
    border: 1px dashed #b3abbc;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: grey;
    background-color: rgba(255,255,255,0.1);
    margin-bottom: 25px;
    height: 235px;
}
.img-upload {
    width: 50%; 
    margin-right: 3%;
}
.fa-camera {
    display: flex;
    justify-content: center;
    padding-bottom: 15%;
    color: #8E8796;
    font-size: 1.7em;
}
.subtitle {
    color: #3D467F;
    font-style: normal;
    font-weight: 650;
    font-size: 22px; 
    margin-bottom: 15px; 
      
}
.text-center {
    text-align: center;
}
.subtitle2 {
    color: #3D467F;
    font-style: normal;
    font-weight: 500;
    font-size: 20px; 
    margin-bottom: 15px; 
}
.uppercase {
    text-transform: uppercase;
}
.mg-40 {
    margin-bottom: 40px;
}
.bold {
    font-weight: 550;
}
.coursebox {
    background-color: rgba(255,255,255,0.1);
    border: 3px solid rgba(255,255,255,0.1);
    margin-bottom: 3%;
    width: 101.5%;
    overflow: auto;
    height: 300px;
}
.list {
    border: 1px solid #EFF0F6;
    border-radius: 10px;
    padding: 1% 2%;
    margin-bottom: 1.5%;
    background-color: #e1eefb;
    text-align: left;
    display: flex;
    flex-direction: column;
    box-shadow: 1px 2px 5px rgba(0,0,0,0.2);  
}
.mgb-5 {
    margin-bottom: 5%;
}
.mgb-10 {
    margin-bottom: 10%;
}
.createbutton {
    background: #FFAAE7;
    border: 3px solid #FFAAE7;
    border-radius: 30px;
    font-size: 22px; 
    color: white;
    padding: 13px 90px ;
    font-weight: 550;
    cursor: pointer;
}
.createbutton:hover {
    cursor: pointer;
    opacity: 0.9;
    box-shadow: 0 0px 6px 2px rgba(0,0,0,0.1);
    transition: 0.25s;
}
.disabled{
    opacity: 0.75;
}
.disabled:hover{
    cursor: default;
    opacity: 0.75;
    box-shadow: none;
}
.cfbutton {
    display: grid;
    justify-content: space-around;
    grid-template-columns: 5% 50% 5%;
}
.backbutton {
    font-size: 1em;
    border: none;
    background-color: #f4f5f7;
    cursor: pointer;
}
.courseno {
    margin: 0 20px;
    text-align: center;
    font-weight: 550;
    font-size: 20px;
}
.dialog {
    margin: 20px;
    border: 2px solid #F2ECFE;
    width: 460px;
    height: 300px;
    text-align: center;
    align-content: center;
    justify-content: center; 
    flex-wrap: wrap; 
    display: flex
}
.indialog {
    text-align: center;
    align-content: center;
    justify-content: center; 
    flex-wrap: wrap; 
    display: flex
    flex-direction: column-reverse;
}
.dialog-buttonX {
    display: flex;
    justify-content: flex-end;
    width: 108%;
}
.buttonX {
    background-color: white;
    border: none;
    cursor: pointer;
    color: #3D467F;
}
.text-dialog {
    font-size: 28px;
    color: #3D467F;
    padding-bottom: 15px;
}
.fa-arrow-left {
    color: #FFAAE7;
    font-size: 3.5em;
    border: none;
}
.fa-arrow-left:hover {
    cursor: pointer;
    opacity: 0.9;
}
.imgconfirm {
    border: 1px solid black;
    padding: 30px 35px;
    width: 60%;
    height: 250px;
    margin-bottom: 30px;
}
.price {
    font-size: 16px;
    font-weight: 500;
    padding-bottom: 20px;
    color: #5b5b5b;
    display: flex;
}
.category {
    font-size: 16px;
    font-weight: 500;
    padding-bottom: 25px;
    color: #5b5b5b;
    text-transform: capitalize;
}
.detail {
    border: 1px solid white;
    margin-bottom: 25px;
    
}
.box-cf {
    overflow: auto;
    height: 400px;
}
.right {
    display: flex;
    justify-content: flex-end;
}
.alert-text {
    color: red;
    font-size: 13px;
    padding-left: 7px;
}
.old-price {
    padding-left: 15px;
    text-decoration: line-through;
}

.confirm-course{
    background: #EFF0F6;
    border-radius: 10px;
    display: flex;
    padding: 20px;
    margin-bottom: 20px;
}
.confirm-text{
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.confirm-detail{
    display: flex;
    margin-left: 25px;
}

`
