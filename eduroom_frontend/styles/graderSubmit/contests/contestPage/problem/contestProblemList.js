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
    transform: translateY(-4px);
    cursor: pointer;
    border-radius: 5px;
		box-shadow: 0px 4px 6px rgba(189, 189, 189, 0.7);
  
  }`
