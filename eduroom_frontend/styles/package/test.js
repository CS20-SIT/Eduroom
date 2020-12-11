import css from "styled-jsx/css"

export default css`
img{
  width:21.4vw;
}
  .sticker_list {
    display: grid;
    grid-template-columns: auto auto auto;
    grid-gap: 250px;
    width: 100vw;
  }
  .container {
    padding: 30px;
    background-color: #f0ffff;
    color: black;
    margin-bottom: 50px;
  }
  .cardContainer {
    text-align: start;
    font-size: 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  background-color: white;
  border-radius: 10%;
  width: 348px;
  height:398px;
  margin:auto; 
  padding:5%;
  }
  .text {
    font-size: 20px;
  }
  
`;