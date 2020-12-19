import css from "styled-jsx/css"

export default css`
img{
  width:100%;
    height:60%;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
}
.page{
  margin-bottom: 50px;
}
.head{
  margin-left: 90px;
  color:#3D467F;
}

  .sticker_list {
    display: grid;
    grid-template-columns: auto auto auto;
    grid-gap: 250px;
    width: 100vw;
  }
  .container {
    color: black;
    margin-bottom: 100px;
    padding-left:20px;
  }
  .cardContainer {
    text-align: start;
    font-size: 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  background-color: white;
  border-radius: 20px;
  width: 290px;
  height: 330px;
  margin:auto; 
  
  }
  .text {
    font-size: 20px;
  }
  .textInst{
    font-size:15px;
    color: #4E4B66;
  }
  .BS{
    margin-top: 10px;
    display:position;
  }
  .courseLanding{
    margin-left:100px;
    font-weight: 700;
    font-size: 30px;
    color:#3D467F;
    margin-bottom:10px;
  }
  .course{
   margin-left: 60px;
  }
  .BG{
    background: #F9F7FE;
    padding-bottom:20px;
  }
`;