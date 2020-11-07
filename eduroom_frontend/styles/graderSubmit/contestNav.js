import css from "styled-jsx/css"
export default css`
  .nav {
    display: flex;
  }
  .link {
    display: inherit;
    height: inherit;
    padding: 0 14.5px;
    font-size: 1.2rem;
    font-weight: bold;
    color: #828282;
    justify-content: center;
    align-items: center;
    padding-bottom: 10px;
    margin-bottom: 10px;
  }
  .link:hover {
    color: #f39ac4;
    border-bottom: 2px solid #f39ac4;
  }
  .active {
    color: #f39ac4;
  }
  .box {
    border-bottom: 2px solid #828282;
  }
  .box-active {
    border-bottom: 2px solid #f39ac4;
  }
  .empty {
    width: -webkit-fill-available;
  }
  .display {
    display: flex;
    flex-direction: column;
  }
`
