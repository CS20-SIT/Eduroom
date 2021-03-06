import css from "styled-jsx/css";
export default css`
.BG{
  background-image : url('/images/createEvent/CalenBG.svg');
  background-size : cover;
  height : 100vh;
  background-attachment: fixed;
}



  .grid {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    background-color: #FFFFFF;
    border-radius: 2px;
    margin: 5rem 8rem 5rem 8rem;
    box-shadow: 1px 3px 12px rgba(0, 0, 0, 0.2);
  }
  .gridItem {
    background-color: #FFFFFF;
    padding: 20px 40px 20px 40px;
    font-size: 30px;
    text-align: center;
    color: #000000;
    font-weight : bold;
    font-size : 20px;
  }

  .EmptyItem {
    background-color: #FFFFFF;
    padding: 20px;
    font-size: 30px;
    text-align: center;
    color: #FFFFFF;
    font-weight : bold;
  }

  .month-size{
   font-size :  50px
  }  .month-color{
    color: #3D467F;
    font-weight : bold;
    text-align : center;
    padding-top : 7rem;
    position : relative
    
  }
  .headerCell {
    background-color: rgba(255,255,255);
    padding: 70px 20px 20px 20px; 
    font-size: 20px;
    text-align: center;
    color: #817FBC;

  }

  .currentDate {
    position: relative;
    z-index: 0;
    color:#FFFFFF
  }
  .currentDate::after {
    content: '';
    background-color: #fb9ccb;
    border-radius: 50%;
    width: 3.5rem;
    height: 3.5rem;
    z-index: -1;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    
  }

  .addEvent-button {
    border-radius: 10px;
    padding: 0.5rem 1.5rem;
    border: none;
    outline: none;
    transition: 0.25s;
    background : #f4f5f7;
  }
  .addEvent-button:hover {
    background: #fe75b7;
    
    padding: 0.5rem 1.5rem;
    outline: none;
    transition: 0.25s;
  }


.previous-m {
  border: none;
  outline: none;
  cursor: pointer;
  padding-right:40px;
  z-index : 0;
  
}
.forward-m {
  border: none;
  outline: none;
  cursor: pointer;
  padding-left : 40px;
  z-index:0;
}
.month{
  z-index : 0;
}
.headCalendar{
  width:100%;
  display : flex;
  flex-wrap :warp;
  box-sizing:border-box;
  align-items:center;
  justify-content:center;
}
.d-calendar {
  width: 35vw;
  height: 65vh;
  background-image: url('/images/createEvent/d-bg.svg');
  bacground-size : cover;
  position: fixed;
  top: 50% ;
  left: 50%;
  z-index: 2; 
  transform: translate(-50%,-50%);
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  
}
.d-close{
  position: fixed;
  top: 0%;
  right: 0%;
  margin: 2rem;
  padding: 0.5rem;
  cursor: pointer; 
  font-weight: 800;
  font-size : 20px;
  color : #999999;
  z-index : 2;
}
.bg-overlay{
 background-color : rgba(255, 255 ,255 , .6);
  height : 100vh;
  width : 100vw;
  position : fixed;
  z-index : 1;
  
}

.content{
  height : 65%;
  overflow-y : auto;

}
.content *{
  

}
.d-top{
  height: 75px;
  color: #3D467F;
  font-weight : bold;
  text-align : center;
  margin-top : 5%;
  font-size : 24px;
}
.d-buttom{
  color: #3D467F;
  font-weight : bold;
  text-align : center;
  margin-top : -15%;
  z-index : 30;
}
.d-day{
  position : absolute;
  margin:10px;
  margin-left : 32%;
  
}
.button {
  background: #f39ac4;
  border-radius: 25px;
  padding: 0.5rem 2.3rem;
  margin-top: 20%;
  border: none;
  transition: 0.25s;
  font-size : 18px;
  color : #FFFFFF;
}
.button:hover{
  cursor: pointer;
  opacity: 0.9;
  transition: 0.2s;
}

.d-block{
  background-color : #EFF0F6;
  padding : 15px 20px 24px 29px;
  margin : 10px 40px 10px 40px;
  border-radius : 10px;
  
}



.title{
  color : #3d467f;
  font-weight : bold;
  font-size : 18px;
  margin-bottom : .75rem;
}
.detail{
  color :  #3d467f;
  margin-top : -15px;
  margin-left : 20px;
}
.point{
  border-radius : 50%;
  width : 8px;
  height: 8px;

}
.Cpoint{
  border-radius : 50%;
  width : 8px;
  height: 8px;
  position : absolute;
  top:6rem;
  left : 3rem;
}
.dot-course{
  position : absolute;
  top:5.55rem;
  color : #3d467f;
  left : 4rem;
}
.Gpoint{
  border-radius : 50%;
  width : 8px;
  height: 8px;
  position : absolute;
  top:6rem;
  left :8rem;
}
.dot-global{
  position : absolute;
  top:5.55rem;
  left :9rem;
  color : #3d467f;
}



ul {
  list-style: none;
}

ul li::before {
  content: "\2022";
  color: red;
  font-weight: bold;
  display: inline-block; 
  
  margin-left: -35px;
}




.createEvent{
  position: absolute;
  margin-top : 48rem;
  left : 43%;
}
.bt-createEvent{
  background: #f39ac4;
  border-radius: 25px;
  padding: 0.5rem 2.3rem;
  margin-bottom: 5%;
  border: none;
  transition: 0.25s;
  font-size : 18px;
  color : #FFFFFF;
}
.bt-createEvent:hover{
  cursor: pointer;
    opacity: 0.9;
    transition: 0.2s;
}

.bg-calendar{

  position : relative;
  margin-left : 80%;
  margin-top : -9%;
  z-index: 2; 
  
}


//------------------------------------------- dialog create event----------------------------------------------


.D-create{
  width: 45vw;
  height: 65vh;
  background-image: url('/images/createEvent/d-bg.svg');
  bacground-size : cover;
  position: fixed;
  top: 50% ;
  left: 50%;
  z-index: 2; 
  transform: translate(-50%,-50%);
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
}
.text-create{
  font-size : 32px;
  font-weight : bold;
  color : #3d467f;
  text-align : center;
}
.event-title{
  width:70%;
  margin-left : 15%;
  margin-top : 5%;
  background-color:#EFF0F6;
  border: 0px solid #A7ABC5;
  border-radius: 5px;
  opacity : .9;
}
.event-type{
  width:70%;
  height:50px;
  margin-left : 15%;
  margin-top : 2%;
  background-color:#EFF0F6;
  border: 0px solid #A7ABC5;
  border-radius: 5px;
  opacity : .9;
}
.event-detail{
  width:70%;
  height:50px;
  margin-left : 15%;
  margin-top : 2%;
  background-color:#EFF0F6;
  border: 0px solid #A7ABC5;
  border-radius: 5px;
  opacity : .9;
}



.startdate{
  position : absolute;
  left : 15%;
  margin-top : 2%;
  color : #969BBA;
}
.event-startDate{
  width:85%;
  height:50px;
  margin-top : 0%;
  background-color:#EFF0F6;
  border: 0px solid #A7ABC5;
  border-radius: 5px;
  opacity : .9;
}


.startTime{
  position : absolute;
  left : 34.5%;
  margin-top : 2%;
  color : #969BBA;
}
.event-startTime{
  width:100%;
  height:50px;
  margin-top : 0%;
  background-color:#EFF0F6;
  border: 0px solid #A7ABC5;
  border-radius: 5px;
  opacity : .9;
}

.enddate{
  position : absolute;
  left : 51.5%;
  margin-top : 2%;
  color : #969BBA;
}
.event-endDate{
  width:85%;
  height:50px;
  margin-top : 0%;
  background-color:#EFF0F6;
  border: 0px solid #A7ABC5;
  border-radius: 5px;
  opacity : .9;
}

.endtime{
  position : absolute;
  left : 70.5%;
  margin-top : 2%;
  color : #969BBA;
}
.event-endTime{
  margin-top : 0%;
  height:50px;
  background-color:#EFF0F6;
  border: 0px solid #A7ABC5;
  border-radius: 5px;
  opacity : .9;
}



.event-place{
  width:70%;
  height:50px;
  margin-left : 15%;
  margin-top : 13%;
  background-color:#EFF0F6;
  border: 0px solid #A7ABC5;
  border-radius: 5px;
  opacity : .9;
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
  
  width:122px;
  height:39px;
  align-item:center;
}
.event-cancel:hover {
  cursor: pointer;
  opacity: 0.8;
  transition: 0.25s;
}


.confirmBT{
  position : absolute;
  margin-top: 3%;
  left : 32%;
}
.cancelBT{
  position : absolute;
  margin-top: 3%;
  left : 53%;
}
.d-close2{
  position: fixed;
  top: 2.35%;
  right: 5.3%;
  padding: 0.5rem;
  cursor: pointer; 
  font-weight: 800;
  font-size : 14px;
  color : #999999;
  
}

// ---------------------------------Edit-------------------------------------
.edit{
  float : right;
  cursor : pointer;
}



`;
