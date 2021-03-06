import css from 'styled-jsx/css'
export default css`
.main {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
  .size {
    width: 90%;
    height: 80%;
  }
  h2 {
    color: #5b5b5b;
    padding-bottom: 20px;
    margin-bottom: 0;
    border-right: 2px solid rgba(91, 91, 91, 0.1);
  }
  .graphics {
    height: 50%;
    display: flex;
    padding-bottom: 2%;
    justify-content: center;
    align-items: flex-end;
    border-right: 2px solid rgba(91, 91, 91, 0.1);
  }
  img {
      height: 85%;
      width: auto;
      padding-right: 50px;
  }
  .graph-box {
    border: 2px solid #ffffff; 
    border-radius: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 50%;
    box-shadow: 0px 2px 7px rgba(150, 150, 150, 0.2);

  }
  p {
    width: fit-content;
    margin: 0;
  }
  .flex-container {
    display: flex;
    padding-left: 3%;
    width: 95%;
    justify-content: space-between;
    background-color: #eff0f6;
  }
  .flex-item {
    color: #3d467f;
    padding 5px 0;
    font-weight: bold;
  }
  .submission-list {
    height: 30%;
    border-right: 2px solid rgba(91, 91, 91, 0.1);
    border-bottom: 2px solid rgba(91, 91, 91, 0.1);
  }
  .actual-graph {
    display: flex;
    height: 90%;
    width: 85%;
    align-items: flex-end;
  }
  .graph {
    display: flex;
    height: 100%;
    width: 95%;
    align-items: flex-end;
    justify-content: space-between;

  }
  .eachBar {
    width: 16.5%;
    background-color: #D5C1FC;
    text-align: center;
    font-size: 0.75rem;
    padding: 5px 3px 0 3px;
    color: #ffffff;
    font-weight: bold;
  }
  .min, .max {
    height: fit-content;
    border-left: solid 1px #3D467F;
  }
  .legend {
    text-align: center;
    padding-right: 10px;
  }
  .line {
    height: 24vh;
    width: 1px;
    background-color: #3D467F;
  }
  p {
    margin-left: 5px;
  }
`
