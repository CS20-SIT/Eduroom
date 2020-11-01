import css from "styled-jsx/css";
export default css`

.topic-font{
  font-size : 64px;
  margin : 0px;
  font-weight: bold;
  text-shadow:  1px 7px 8px #aba8a8;

}

.color-topic{
  color :#3d467f;
}

.color-p{
  color : #5b5b5b;
  letter-spacing: 1px;
  font-size : 20px;
  margin : 0px;
  font-weight: bold;
}
.text-center {
    text-align: center;
    
  }
.topic-text{
  margin-left: -195px;
  
}

.create-form {
  align-items: center;
  background: rgba(255, 255, 255, 0.6);
  box-shadow: 6px 4px 19px rgba(0, 0, 0, 0.15);
  border-radius: 15px;
  padding: 30px 20px 30px 20px;
  margin-top : 30px;
}

.create-textfield {
  background: #eff0f6;
  border-radius: 5px;
  width: 100%;
  padding: 4%;
  border: none;
  color: #3d467f;
  margin-bottom: 5%;
  maring-left : 15px
}

.create-topic{
  font-weight : bold;
  font-size   : 22px;
  margin : 0px;
  color :#3d467f;

}
.input-box {
  border-radius : 10px;
  border-color : black;
    margin-top: -4px;
}
.button{
  text-align : center;
  margin-top : 30px;
}
.create-button {
  background: #fe75b7;
  border-radius: 10px;
  padding: 0.5rem 1.5rem;
  border: none;
  outline: none;
  transition: 0.25s;
}
.create-button-create {
  color: white;
  font-weight: 700;
  font-size: 1.2em;
  font-family: 'Quicksand', sans-serif;
}
.create-button:hover {
  cursor: pointer;
  opacity: 0.8;
  transition: 0.25s;
}



.cancel-button {
  background: #FFFFFF;
  border-radius: 10px;
  padding: 0.5rem 1.5rem;
  
  outline: none;
  transition: 0.25s;
}
.cancel-button-cancel {
  border-color : #3D467F;
  color: 3D467F;
  font-weight: 700;
  font-size: 1.2em;
  font-family: 'Quicksand', sans-serif;
}
.cancel-button:hover {
  background-color :#3D467F;
  cursor: pointer;
  opacity: 0.8;
  transition: 0.25s;
  color : #FFFFFF
}




`;
