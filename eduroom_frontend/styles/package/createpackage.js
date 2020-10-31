import css from 'styled-jsx/css'
export default css`
.package-header {
    display: flex;
    font-size: 1.7em;
    padding: 3% 6%;
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
    border: 1px solid #EFF0F6;
    width: 100%;
    padding: 13px 20px;
    border-radius: 10px;
    font-size: 1.2em;
    margin-bottom: 25px;
    background-color: #EFF0F6;
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
input:checked {
    background-color: #3d467f;
}

::placeholder {
    color: #3d467f;
}

.imageupload {
    border: 1px dashed #b3abbc;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: grey;
    padding: 15%;
    background-color: white;
    margin-bottom: 25px;
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
    box-sizing: border-box;
    border-radius: 10px;
    padding: 6%;
    margin-bottom: 2%;
    background-color: #EFF0F6;
    text-align: left;
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

`
