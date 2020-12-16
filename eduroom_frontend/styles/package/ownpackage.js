import css from 'styled-jsx/css'
export default css`

.center{
    display: flex;
    justify-content: center;
}
.pdt-20 {
    padding-top: 20px;
}
.pdt-20:hover{
    cursor:pointer;
}
.package {
    color: black;
    text-align: left;
    font-size: 18px;
    width: 85%;
    padding: 0.5% 2%;
    background-color: #e1eefb;
    border: 1px solid #e1eefb;
    margin-bottom: 1%;
    border-radius: 10px;
    box-shadow: 0px 2px 5px rgba(0,0,0,0.2);
}
.picture {
    border: 1px solid black;
    height: 90px;
    margin: 5px;
    display: flex;
}
.block2 {
    width: 95%;
    padding: 4px 5px;
}
.name {
    font-size: 20px;
    font-weight: 550;
}
.pri-cat {
    font-size: 15px;
    font-weight: 500;
    padding-top: 4px;
}
.Xbutton {
    background-color: #e1eefb;
    border: none;
    cursor: pointer;
    color: #3D467F;
    font-weight: 600;
}
.block4{
    width: 90%;
    display: flex;
    flex-direction: column;
    margin-right: 10%;
    cursor: pointer;
}
.block3{
    display: flex;
}
.right {
    display: flex;
    justify-content: flex-end;
}
.dialog-content {
    font-size: 28px;
    color: #3D467F;
}
.pebutton {
    background-color: #5b5b5b;
    cursor: pointer;
    border: none;
    border-radius: 10px;
    color: white;
    width: 105px;
    padding-top: 0px;
    margin-left: 10px;
    font-size: 15px;
}
.active.pebutton:hover {
    cursor: pointer;
    opacity: 0.9;
    box-shadow: 0 0px 6px 2px rgba(0,0,0,0.2);
    transition: 0.25s;
}
.disabled{
    cursor: default;
    opacity: 0.6;
}
.ycbutton {
    background-color: #FB9CCB;
    cursor: pointer;
    border: none;
    border-radius: 25px;
    color: white;
    width: 100px;
    font-size: 18px;
    margin: 0 20px 5px ;
}
.ycbutton:hover {
    cursor: pointer;
    opacity: 0.9;
  }

.fa-pen {
    padding-right: 8px;
    font-size: 0.8em;
    text-align: center;
} 
.fa-globe  {
    padding-right: 8px;
    font-size: 0.8em;
    text-align: center;
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
    flex-direction: column;
}


`
