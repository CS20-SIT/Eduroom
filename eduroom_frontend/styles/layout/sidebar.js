  import css from 'styled-jsx/css'
export default css`
  .side-item {
    align-items: center;
    justify-content: center;
    display: flex;
    cursor: pointer;
  }
  .side-item-expand {
    display: flex;
    flex: 1 1 auto;
  }
  .side-icon-expand.expand {
    width: 72px;
  }
  .side-icon-expand {
    width: 72px;
    padding: 1% 0%;
    justify-content: center;
    display: flex;
  }
  .side-text {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 8px;
    color: #9593a0;
    font-weight: 500;
  }
  .side-text.hover {
    color: #a880f7;
    font-weight: bold;
  }
  #side-nav {
    width: 5%;
    background: white;
    display: flex;
    flex-flow: column;
    padding-top: 1%;
    z-index:10;
    position: fixed;
    top:0;
    left:0;
    height:100vh;
  }
  .side-icon.expand {
    width: 72px;
  }
  .side-icon {
    width: 72px;
    justify-content: center;
    align-items: center;
    display: flex;
    cursor: pointer;
  }
  .side-nav-list {
    display: flex;
    flex-flow: column;
    height: 100%;
    justify-content: space-evenly;
  }
`
