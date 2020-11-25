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
  .ad-ad-description {
    padding: 5% 0% 10% 0%;
    font-size: 1.1em;
    font-family: 'Quicksand', sans-serif;
    font-weight: 600;
    color: #5b5b5b;
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
`;
