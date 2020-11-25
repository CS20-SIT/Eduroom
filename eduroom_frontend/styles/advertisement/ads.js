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
  .ad-question {
    font-size: 1em;
    font-family: 'Quicksand', sans-serif;
    font-weight: bold;
    color: 00000;
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
    width: 1635px;
    height: 730px;
    cursor: default;
    background-image: url('/images/BG_Landing.svg');
  }
  .tab2 {
    width: 93%;
    height: 350px;
    cursor: default;
    background-image: url('/images/register_bg.svg');
  }
`;
