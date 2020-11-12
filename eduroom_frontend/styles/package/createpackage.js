import css from 'styled-jsx/css'
export default css`
.package-header {
    display: flex;
    font-size: 1.7em;
    padding: 4% 6% 3% 6%;
    font-weight: bold;
    text-shadow: 2px 1px rgba(0,0,0,0.5);
}
.package-bg {
    max-width: 100vw;
    min-height: 100vh;
    background-image: url(/images/package/package-bg.svg);
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
}
.center {
    display: flex;
    justify-content: center;
}
.container {
    background-color: rgba(255,255,255,0.7);
    width: 88%;
    margin: auto auto 5% auto;
    border-radius: 10px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.25);
    display: flex;
    flex-direction: column;
}
.pd-4-15 {
    padding: 4% 15%;
}
.pd-4-25 {
    padding: 4% 25%;
}
input,select,textarea {
    border: 1px solid #A7ABC5;
    width: 100%;
    padding: 10px 20px;
    border-radius: 5px;
    font-size: 1em;
    margin-bottom: 6px;
    cursor: pointer;
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
    text-align: center;
    cursor: pointer;
    color: grey;
    padding: 20px;
    background-color: rgba(255,255,255,0.1);
    margin-bottom: 25px;
    height: 250px;
}
.img-upload {
    width: 50%; 
    margin-right: 5%;
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
    text-transform: uppercase;
}
.mg-40 {
    margin-bottom: 40px;
}
.bold {
    font-weight: 550;
}
.text {
    font-size: 20px; 
    padding: 5% 8% 3%;
}

.coursebox {
    background-color: rgba(255,255,255,0.1);
    border: 3px solid rgba(255,255,255,0.1);
    margin-bottom: 3%;
    width: 101.5%;
    text-align: center;
    overflow: auto;
    height: 400px;
}
.create {
    padding: 3% 2% 3% 3%;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
}
::-webkit-scrollbar-track {
    background: rgba(255,255,255,0.1); 
  }
::-webkit-scrollbar {
    width: 10px;
  }
  
::-webkit-scrollbar-thumb {
    background: rgba(255,255,255,0.1);
  }
  
::-webkit-scrollbar-thumb:hover {
    background: #d3d4da;
  }
.list {
    border: 1px solid #EFF0F6;
    border-radius: 10px;
    padding: 1% 2%;
    margin-bottom: 1.5%;
    background-color: #e1eefb;
    text-align: left;
    display: flex;
    align-items: center;
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
.cfbutton {
    display: grid;
    justify-content: space-around;
    grid-template-columns: 5% 50% 5%;
}
.createbutton:hover {
    cursor: pointer;
    opacity: 0.9;
    box-shadow: 0 0px 6px 2px rgba(0,0,0,0.1);
    transition: 0.25s;
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
.text-dialog-create {
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
    width: 100%;
    height: 250px;
    margin-bottom: 30px;
}
.price {
    font-size: 16px;
    font-weight: 500;
    padding-bottom: 20px;
    color: #5b5b5b;
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
`
