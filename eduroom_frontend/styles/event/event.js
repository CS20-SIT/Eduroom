import css from "styled-jsx/css";
export default css`
.BG{
  background-image : url('/images/createEvent/BG.svg');
  background-size : cover;
  height : 100vh;
  background-attachment: fixed;
}
.space-top{
  height : 10vh;
}
.margin-p {
  margin-top:25px;
}
.topic-font{
  font-size : 36px;
  margin : 0px;
  font-weight: bold;
}
.head{
  position : absolute;
}
.form{
  position : absolute;
  margin-top : 260px;
  background: rgba(255, 255, 255, 0.6);
  box-shadow: 6px 4px 19px rgba(0, 0, 0, 0.10);
  border-radius: 10px;
  padding: 30px 20px 30px 20px;
  height:55vh;
  width : 120vh;
  justify-items: center;
}
.event-title{
  width: 482px;
  height : 50px;
  margin-top: 13px;
  margin-right: 10px;
  padding: 4%;
  border: 1px solid #A7ABC5;
  border-radius: 5px;
  opacity : .9;
}
.event-type{
  width: 482px;
  height : 50px;
  margin-top: 13px;
  padding-left: 3%;
  border: 1px solid #A7ABC5;
  border-radius: 5px;
  opacity : .9;
}
.event-des{
  width: 976px;
  height : 121px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
  padding-bottom: 10%;
  border: 1px solid #A7ABC5;
  border-radius: 5px;
  opacity : .9;
  margin-top: 16px;
  resize: none;
  overflow: hidden;
}
.event-startDate{
  width: 213px;
  height : 50px;
  margin-top: 18px;
  padding: 4%;
  border: 1px solid #A7ABC5;
  border-radius: 5px;
  opacity : .9;
  margin-right: 40px;
  margin-left: 75px;
}
.event-startTime{
  width: 213px;
  height : 50px;
  margin-top: 18px;
  padding: 4%;
  border: 1px solid #A7ABC5;
  border-radius: 5px;
  opacity : .9;
  margin-right: 40px;
}
.event-endDate{
  width: 213px;
  height : 50px;
  margin-top: 18px;
  padding: 4%;
  border: 1px solid #A7ABC5;
  border-radius: 5px;
  opacity : .9;
  margin-right: 40px;
}
.event-endTime{
  width: 213px;
  height : 50px;
  margin-top: 18px;
  padding: 4%;
  border: 1px solid #A7ABC5;
  border-radius: 5px;
  opacity : .9;
  margin-right: 40px;
}
.startDate{
  margin-left: 75px;
}
.startTime{
  margin-left: 174px;
}
.endDate{
  margin-left: 174px;
}
.endTime{
  margin-left: 180px;
}
.event-place{
  width: 976px;
  height : 50px;
  margin-top: 18px;
  margin-right: 10px;
  margin-left: 13px;
  padding-left:2%;
  border: 1px solid #A7ABC5;
  border-radius: 5px;
  opacity : .9;
}

.color-topic{
  color :#3d467f;
}

.color-p{
  color : #5b5b5b;
  letter-spacing: 1px;
  font-size : 14px;
  margin : 0px;
  font-weight: bold;
}
.text-center {
    text-align: center;
    
  }
.topic-text{
  margin-left: -195px;
  
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
.button{
  text-align : center;
  margin-top : 30px;
}
.event-confirmText {
  color: white;
  font-weight: 700;
  font-size: 1.2em;
  font-family: 'Quicksand', sans-serif;

}
.event-confirm {
  background: #fe75b7;
  border-radius: 10px;
  padding: 0.5rem 1.5rem;
  border: none;
  outline: none;
  transition: 0.25s;
  margin-top:55px;
  margin-right:30px;
  width:122px;
  height:39px;
  align-item:center;
}
.event-confirm:hover {
  cursor: pointer;
  opacity: 0.8;
  transition: 0.25s;
}
.event-cancelText {
  color: #3D467F;
  font-weight: 700;
  font-size: 1.2em;
  font-family: 'Quicksand', sans-serif;
}
.event-cancel {
  background: #ffffff;
  border-radius: 10px;
  padding: 0.5rem 1.5rem;
  border: 1px solid #3D467F;
  transition: 0.25s;
  margin-top:55px;
  width:122px;
  height:39px;
  align-item:center;
}
.event-cancel:hover {
  cursor: pointer;
  opacity: 0.8;
  transition: 0.25s;
}
`;
