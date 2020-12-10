import css from "styled-jsx/css";
export default css`
  .topic{
    color: #3d467f;
    margin-right: 2%;
    margin-bottom: 0;
    font-size: 2em;
    transition: 0.25s;
    font-weight: 600;
    letter-spacing: 1.0px;
    font-family: 'Quicksand', sans-serif;
  }
  .content{
      display:flex;
      align-item:center;
      justify-content:center;
      margin:2%;
  }
  .roomtab{
    padding: 0% 1% 0% 1%;
    margin: 1% 4% 0% 4%;
    display: flex;
    flex: 1 0 0;
    align-items: flex-start;
    justify-content: space-between;
    width: auto;
    cursor: pointer;
  }
  .forumblock{
    padding: 1% 3% 2% 1%;
    margin: 3% 4% 0% 4%;
    width: auto;
  }
  .idblock{
    padding: 1% 3% 2% 1%;
    margin: 1% 4% 4% 4%;
    width: auto;
  }
  .backtoforum{
    margin: 2%;
    margin-top: 0%;
    margin-left: 1%;
  }
  .backforroom{
    margin: 2%;
    margin-top: 0%;
    margin-left: 7%;
  }
`;
