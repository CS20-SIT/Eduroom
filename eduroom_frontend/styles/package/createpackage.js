import css from 'styled-jsx/css'
export default css`
.package-header {
    display: flex;
    font-size: 1.7em;
    padding: 0 6% 3% 6%;
    font-weight: bold;
}
.container {
    background-color: #ffffff;
    width: 88%;
    margin: auto auto 5% auto;
    border-radius: 10px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.25);
    display: block;
}

input,select,textarea {
    border: 1px solid #3D467F;
    width: 100%;
    padding: 12px 20px;
    border-radius: 10px;
    font-size: 1em;
    margin-bottom: 15px;
    background-color: #f4f5f7;
    cursor: pointer;
    color: #3d467f;
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
    font-weight: 400;
}

.imageupload {
    border: 1px dashed #b3abbc;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: grey;
    padding: 20px;
    background-color: white;
    margin-bottom: 25px;
    height: 250px;
}
.fa-camera {
    display: flex;
    justify-content: center;
    padding-bottom: 5px;
    color: #8E8796;
    font-size: 1.4em;
}
.subtitle {
    color: #3D467F;
    font-style: normal;
    font-weight: 550;
    font-size: 22px; 
    margin-bottom: 20px;   

}
.text {
    font-size: 20px; 
    padding: 5% 8% 3%;
}

.coursebox {
    background-color: white;
    border-radius: 5px;
    border: 1px solid white;
    margin-bottom: 7%;
    text-align: center;
    width: 101.5%;
   
}
::-webkit-scrollbar {
    width: 10px;
  }
  
::-webkit-scrollbar-thumb {
    background: white;
  }
  
::-webkit-scrollbar-thumb:hover {
    background: #d3d4da;
  }
.list {
    border: 1px solid #EFF0F6;
    border-radius: 10px;
    padding: 1% 2%;
    margin-bottom: 1.5%;
    background-color: #fdecf4;
    text-align: left;
    display: flex;
    align-items: center;
    
    
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
    margin-bottom: 5%;
}
.createbutton:hover {
    cursor: pointer;
    opacity: 0.9;
  }
.backbutton {
    padding: 0 40px ;
    margin: 0;
    font-size: 21px;
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
.fa-arrow-left {
    color: #FFAAE7;
    font-size: 3.5em;
    border: none;
    cursor: pointer;
}

`
