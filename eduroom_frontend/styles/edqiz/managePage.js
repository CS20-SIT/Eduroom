import css from 'styled-jsx/css'
export default css`
  .edqiz-manage-header {
    font-size: 2em;
    font-family: 'Quicksand', sans-serif;
    font-weight: bold;
    color: #3d467f;
    margin: 0;
  }
  .content {
    width: 100%;
    padding: 3% 5%;
    height: 82vh;
  }
  .col-12 {
    width: 100%;
    padding: 1% 0%;
  }
  .row {
    display: flex;
    flex-wrap: wrap;
    flex: 1 1 auto;
    justify-content: center;
    padding-bottom: 2.5%;
  }
  .card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
    background: white;
    padding: 3%;
    margin-bottom: 3%;
    border-radius: 2vh;
    transition: 0.3s;
    width: 100%;
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    flex-flow: column;
    justify-content: space-around;
  }
  .card:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.5);
  }

  .edqiz-manage-img {
    width: 35%;
    transition: 0.3s;
    pointer-events: none;
    margin-left: 33%;
    margin-top: 10vh;
    position: absolute;
  }
  .edqiz-manage {
    justify-content: center;
    width: 100%;
    height: 100vh;
    background-image: url('/images/edqiz/create-bg.svg');
    background-repeat: no-repeat;
    background-size: cover;
    overflow: auto;
  }
  .edqiz-manage-content {
    position: absolute;
    font-family: 'Quicksand', sans-serif;
  }
  .navy-text {
    color: #3d467f;
  }
  .edqiz-manage-title {
    font-family: 'Quicksand', sans-serif;
    display: flex;
    justify-content: center;
    padding-top: 5%;
    font-size: 2.5em;
    font-weight: bold;
    cursor: default;
  }
  .edqiz-manage-button {
    border-radius: 25px;
    transition: 0.3s;
    padding: 0.5rem 1.5rem;
    border: none;
    outline: none;
    justify: center;
    align-content: center;
  }
  .edqiz-manage-button.pink{
    background: #FB9CCB;
  }
  .edqiz-manage-button.purple{
    background: #a880f7;
  }
  .edqiz-manage-button:hover {
    cursor: pointer;
    opacity: 0.8;
    transition: 0.25s;
  }
  .edqiz-manage-button-text {
    color: white;
    font-weight: 540;
    font-size: 1.6em;
    font-family: 'Quicksand', sans-serif;
  }

  input[type='text'],
  select {
    width: 25%;
    padding: 1.5%;
    transition: 0.3s;
    color: #6e5a5c;
    font-weight: 500;
    font-size: 2vh;
    background-color: #eff0f6;
    display: inline-block;
    border: none;
    border-radius: 2vh;
    box-sizing: border-box;
  }
  .edqiz-manage-outline-button {
    background: transparent;
    outline: none;
    border-radius: 30px;
    padding: .5rem 2.5rem;
    font-size: 1.3em;
    font-weight: 700;
    margin: 0% 1%;
    cursor: pointer;
  }
  .big-button {
    height: 6.5vh;
    width: 18%;
  }
  .edqiz-manage-outline-button.pink{
    color: #FB9CCB;
    border: 3px solid #FB9CCB;
  }
  .edqiz-manage-outline-button.pink:hover{
    color: white;
    background: #FB9CCB;
  }
  .edqiz-manage-outline-button.purple{
    color: #a880f7;
    border: 2px solid #a880f7;
  }
  .edqiz-manage-outline-button.purple:hover{
    color: white;
    background: #a880f7;
  }
  .cflex{
    display: flex;
    justify-content: center;
  }
  .navy-text {
    color: #3d467f;
  }
  .w-300 {
    width: 300px;
  }
  .h-600 {
    height: 600px;
  }
  .py-20 {
    padding: 0% 20%;
  }
  .name-text {
    border: 3px solid #5B5B5B;
    width: 60%;
    height: 100%;
    border-radius: 2vh;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: default;
    font-size: 1.3em;
    color: #5B5B5B;
    font-weight: 500;
  }
  .preview-box {

  }
  .imageUpload {
    width: 600px;
    height: 250px;
    border: 1px dashed #b3abbc;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .w-600 {
    width: 600px;
  }
  .fs-13 {
    font-size: 1.3em;
  }
`