import css from 'styled-jsx/css'
export default css`
  .pagination {
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: default;
  }
  .line {
    width: 10%;
    border-bottom: 1px solid #ced4da;
    height: 50%;
  }
  .circle {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2%;
    width: 36px;
    height: 36px;
    border-radius: 36px;
    color: white;
    font-size: 1.2em;
    font-weight: 600;
    background: #5b5b5b;
  }
  .current {
    background: #f39ac4;
  }
`
