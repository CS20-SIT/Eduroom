import css from 'styled-jsx/css';
export default css`
  .ad-ad {
    width: 95%;
    height: 100vh;
    display: flex;
    justify-content: flex-end;
    padding: 2% 5% 0% 5%;
    cursor: default;
    background-image: url('/images/BG_Landing.svg');
    position: absolute;
    top: 0;
  }
  .ad-ad-img {
    width: 55%;
  }
  .ad-ad-content {
    position: absolute;
    left: 5%;
    top: 24%;
    font-family: 'Quicksand', sans-serif;
  }
  .ad-ad-header {
    font-size: 1.75em;
    font-family: 'Lato', sans-serif;
    font-weight: bold;
    color: #3d467f;
    }
  .ad-tab1-header {
      font-size: 2.75em;
      font-family: 'Lato', sans-serif;
      font-weight: regular;
      color: #3d467f;
  }
  .ad-faq {
    font-size: 1.2em;
    font-family: 'Lato', sans-serif;
    font-weight: bold;
    
    
  }
  .ad-ad-description {
    padding: 5% 0% 10% 0%;
    font-size: 1.1em;
    font-family: 'Quicksand', sans-serif;
    font-weight: 600;
    color: #5b5b5b;
  }
  .ad-tab1-description {
    padding: 5% 0% 8% 0%;
    font-size: 0.9em;
    font-family: 'Quicksand', sans-serif;
    font-weight: 600;
    color: #5b5b5b;
  }
  .ad-topic {
    margin-left:10px;
    font-size: 1.20em;
    font-family: 'Quicksand', sans-serif;
    font-weight: bold;
    color: #6b6b6b;
  }
  .ad-ad-button {
    background: #A880F7;
    border-radius: 2px;
    padding: 0.4rem 1.5rem;
    border: none;
    outline: none;
    transition: 0.25s;
    position: absolute;
    right: 40px;
  }
  .next-button {
    background: #3D467F;
    border-radius: 20px;
    padding: 0.6rem 4rem;
    border: none;
    outline: none;
    transition: 0.25s;
  }
  .ad-tab1-button {
    background: #A880F7;
    border-radius: 2px;
    padding: 0.4rem 1.5rem;
    border: none;
    outline: none;
    transition: 0.25s;
  }
  .ad-ad-button:hover {
    cursor: pointer;
    opacity: 0.8;
    transition: 0.25s;
  }
  .ad-button-text {
    color: white;
    font-weight: 700;
    font-size: 1.2em;
    font-family: 'Quicksand', sans-serif;
  }
  .tab1 {
    
    height: 730px;
    // background-image: url('/images/BG_Landing.svg');
  }
  .tab2 {
    width: 93%;
    height: 350px;
    // background-image: url('/images/register_bg.svg');
  }
  .tab3 {
    width: 93%;
    height: 350px;
    background-image: url('/images/subforumbg.svg');
  }
  .tab4 {
    width: 360px;
    height: 300px;
    background-image: url('/images/package/purchesed.svg');
  }
  .img-spaceship{
    margin-left:30%;
    width: 445px;
    height: 325px;
    position:absolute;
    background-image: url('/images/Coupon/NotebookSpaceship.svg');
  }
  .ntab4 {
    width: 93%;
    height: 400px;
    // background-image: url('/images/big-bg.svg');
  }
  .adinform {
    background-image: url('/images/package/purchesed.svg');
  }
  .background{
    background-image:url('/images/big-bg.svg')
  }
  .ad-id {
    margin-left:10px;
    font-size: 1em;
    font-family: 'Quicksand', sans-serif;
    font-weight: bold;
    color: #3d467f;
  }
  .ad-owner {
    margin-left:10px;
    font-size:0.7em;
    font-family: 'Quicksand', sans-serif;
    font-weight: bold;
    color: #3d467f;
  }
  .ad-price {
    margin-left:10px;
    font-size: 1em;
    font-family: 'Quicksand', sans-serif;
    font-weight: bold;
    color: #3d467f;
  }
  .ad-remove-button {
    background: #A7ABC5;
    border-radius: 2px;
    padding: 0.4rem 1.5rem;
    border: none;
    outline: none;
    transition: 0.25s;
    right: 40px;
  }
  .ad-description {
    padding: 5% 0% 10% 0%;
    font-size: 0.6em;
    margin-left:10px;
    font-family: 'Quicksand', sans-serif;
    font-weight: 600;
    color: #5b5b5b;
    opacity
  }
  .ad-check-out-button {
    background: #A880F7;
    border-radius: 2px;
    padding: 0.4rem 1.5rem;
    border: none;
    outline: none;
    transition: 0.25s;
    right: 40px;
    border-radius: 10px;
    height: 42px;


  }
  .ad-check-out-button-text {
    color: white;
    font-weight: 700;
    font-size: 1.5em;
    font-family: 'Quicksand', sans-serif;
  }
  .detail{
    position:relative;
    left:50%;
    top:25px;
  
    transform:translate(-50%,-50%);
  }
  .adList{
    background-image: url('/images/big-bg.svg');
    height:100vh;
    position:absolute;
    top:0;
    width:93.5vw;
    backgroundRepeat: 'no-repeat'
  }
  .card{
    position:relative;
    top:20px;
    left:50px;
    background-color:whitesmoke;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    width:450px;
    height:400px;
  }
  .ad-border{
    border: 2px solid #FB9CCB;
    border-radius: 5px;
    height:150px;
    width:1000px;
  }
  .ad-border-new{
    border: 2px dotted #828282;
    border-radius: 5px;
    height:150px;
    width:1000px;
  }
  .circle{
    border: 5px solid #3D457F;
    border-radius: 50%;
    height:150px;
    width:150px;
    background-color: white;
    display: inline-block
  }
  .search-coupon{
    border: 2px solid #828282;
    border-radius: 7%;
    background-color: white;
    opacity: 70%
  }
  .online{
    border-radius: 50%;
    height:25px;
    width:25px;
    background-color: green;
    display: inline-block
  }
  coupon-tab-h{
    background-color:purple;
    height:50px;
    width:60%
  }
  .ad-dialog-topic {
    padding: 5% 0% 10% 0%;
    font-size: 1.6em;
    margin-left:10px;
    font-family: 'Quicksand', sans-serif;
    font-weight: 600;
    color: #5b5b5b;
    opacity
  }
  .ad-delete-confirm-button {
    background: #FB9CCB;
    border-radius: 5px;
    padding: 0.4rem 1.5rem;
    border: none;
    outline: none;
    transition: 0.25s;
    right: 40px;
  }
  .ad-cancle-button{
    background: #8E8E8E;
    border-radius: 5px;
    padding: 0.4rem 1.5rem;
    border: none;
    outline: none;
    transition: 0.25s;
    right: 40px;
  }
  .create-new-ad{
    padding: 0.5% 0% 0.5% 1.5%;
    background: white;
    border-radius: 10px;
    width: 15%;
  }
`;
5