import css from 'styled-jsx/css'
export default css`
.package-header {
    display: flex;
    font-size: 1.7em;
    padding: 3% 6%;
    font-weight: bold;
}
.container {
    background-color: #f2ecfe;
    max-width:75%;
    margin: auto auto 5% auto;
    border-radius: 10px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.25);
    display: block;
}

.typebox {
    padding: 4% 15%;
}
input,select,textarea {
    border: 1px solid #5B5B5B;
    width: 100%;
    padding: 13px 20px;
    border-radius: 10px;
    font-size: 1.2em;
    outline: none;
    margin-bottom: 25px;
    display: block;
    background-color: white;
    cursor: pointer;
}
.imageupload {
    height: 100%;
    border: 1px dashed #B3ABBC;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: grey;
    padding: 5%;
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
.text {
    color: #3D467F;
    font-style: normal;
    font-weight: 550;
    font-size: 22px; 
    margin-bottom: 10px;   

}
.subtitle {
    font-size: 20px; 
    padding: 5% 8% 3%;
}
.pdetail {
    padding: 20px;
    display: block;
    width: 100%;
    overflow: auto;
    cursor: text;
    border: 1px solid grey;
}
.coursebox {
    background-color: white;
    border-radius: 5px;
    border: 1px solid grey;
    margin-bottom: 7%;
    
}
.list {
    border: 1px solid #000000;
    box-sizing: border-box;
    border-radius: 12px;
    padding: 5%;
    margin: 0 8% 5%;
}
.createbutton {
    background: #FFFFFF;
    border: 3px solid #FFAAE7;
    border-radius: 30px;
    font-size: 22px; 
    color: #FFAAE7;
    padding: 10px 90px ;
    font-weight: 550;
    cursor: pointer;
    margin-bottom: 2%;
    
}
.center {
    text-align: center;
}
`
