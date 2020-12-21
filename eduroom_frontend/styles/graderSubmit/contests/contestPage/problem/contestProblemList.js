import css from 'styled-jsx/css'
export default css`
  .flex-container {
    display: flex;
    padding-left: 3%;
    width: 95%;
    transition: transform 0.2s;
  }
  .flex-item {
    color: #5B5B5B;
    padding 5px 0;
    font-weight: 500;
  }
  .flex-container:hover {
    cursor: pointer;
    border-radius: 5px;
		background-color: rgba(253,236,244, 0.1);
  
  }`
