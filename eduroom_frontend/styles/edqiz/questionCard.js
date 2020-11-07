import css from 'styled-jsx/css'
export default css`
  .imageUpload {
    height: 100%;
    border: 1px dashed #b3abbc;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  input,
  select {
    border: 1px solid #5b5b5b;
    padding: 0.75rem;
    border-radius: 0.5rem;
    width: 100%;
    font-size: 1.2em;
    outline: none;
  }

  .question-title {
    font-size: 2em;
    font-weight: 700;
    color: #3d467f;
  }

  .question-card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
    background: white;
    padding: 3%;
    border-radius: 24px;
    margin: 2% 2% 3% 2%;
  }
  .addReButton {
    border: 3px solid #5b5b5b;
    color: #5b5b5b;
    background: transparent;
    font-size: 1.6em;
    font-weight: 500;
    border-radius: 40px;
    width: 40px;
    height: 40px;
    display: flex;
    padding: 0px;
    outline: none;
    justify-content: center;
    align-items: flex-start;
    margin: 2%;
    cursor: pointer;
    opacity: 0.7;
  }
  .addReButton:hover {
    cursor: pointer;
    width: 5vw;
    opacity: 1;
    transition: 0.25s;
  }
  .question-row {
    display: flex;
    flex: 1 1 auto;
    flex-wrap: wrap;
  }
  .left {
    text-align: start;
  }
  .right {
    justify-content: flex-end;
    display: flex;
  }
  .col-12 {
    width: 100%;
  }
  .col-6 {
    width: 50%;
  }
  .col-8 {
    width: 67%;
    padding-right: 1.5%;
  }
  .col-4 {
    width: 33%;
    padding-left: 1.5%;
  }
  .col-9 {
    width: 80%;
    padding-right: 1.5%;
  }
  .col-3 {
    width: 20%;
    padding-left: 1.5%;
  }
  .answer-choice {
    background: #fdecf4;
    border-radius: 10px;
    border: none;
  }
  .answer-choice :hover {
    background: #EEEEE;
    opacity: 1;
    box-shadow: 0 4px 3px 0 rgba(0, 0, 0, 0.2);
    transition: 0.25s;
    outline: none;
  }
  .choice {
    padding: 0.5rem 0.6rem 0.5rem 0;
  }
  .answer-correct {
    padding: 0.5rem 0 0.5rem 0.6rem;
  }
  .correct-button {
    height: 100%;
    width: 100%;
    border-radius: 10px;
    border: none;
    font-size: 1.2em;
    background: #eff0f6;
    outline: none;
    opacity: 0.6;
  }
  .correct-button :hover {
    background: #EEEEE;
    opacity: 1;
    box-shadow: 0 4px 3px 0 rgba(0, 0, 0, 0.2);
    transition: 0.25s;
    outline: none;
  }
  .correct-choice {
    color: #27ae60;
  }
  .wrong-choice {
    color: #db524e;
  }
  .flex-col {
    flex-flow: column;
    height: 100%;
  }
  .pb-3hf {
    padding-bottom: 3%;
    height: fit-content;
  }
  .flex1 {
    flex: 1;
  }
  .mw600 {
    max-width: 600px;
  }
  .mh300 {
    mex-height: 300px;
  }
  .show-img {
    width: 100%;
    height: 100%;
    display: contents;
  }
  .fs-13 {
    font-size: 1.3em;
  }
  .pb-6 {
    padding-bottom: 6%;
  }
`
