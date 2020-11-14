import css from "styled-jsx/css"
export default css`
.background {
    position:fixed;
    width: 95vw;
    height: 90.5vh;
    background-image: url('/images/Coin-image/BG.svg');
    background-repeat: repeat;
    animation: MoveIn 2s;
    display: flex;
    justify-content: space-evenly;
    
}
.detail {
    position: relative;
    left: 50%;
    top: -10%;
    font-size: 10px;
}
.coin{
  position: relative;
  top: 20px;
}


.right {
    padding: 50px;
    height: 80vh;
    width: 35vw;
    margin: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    background-color: white;
    border-radius: 5%;
}

@keyframes MoveIn {
    0% {
        transform: translateX(100px);
        opacity: 0;
    }
    100% {
        transform: translateX(0px);
        opacity: 1;
    }
}

.list {
    height: 90%;
    width:50vw;
    overflow: auto;
  }

  ::-webkit-scrollbar {
    width: 10px; /* width of the entire scrollbar */
  }
  ::-webkit-scrollbar-track {
    background: transparent; /* color of the tracking area */
  }
  ::-webkit-scrollbar-thumb {
    background: rgba(189, 189, 189, 0.7); /* color of the scroll thumb */
    border-radius: 100px; /* roundness of the scroll thumb */
  }


`

