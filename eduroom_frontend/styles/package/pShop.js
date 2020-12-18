import css from 'styled-jsx/css'

export default css`
	img {
    width:20.13vw;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
	}
	.sticker_list {
		display: grid;
		grid-template-columns: auto auto auto;
		grid-gap: 250px;
		width: 100vw;
  }
 
	.container {
    color: black;
    margin-bottom: 100px;
    padding-left:20px;
  }
  .cardContainer {
    text-align: start;
    font-size: 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  background-color: white;
  border-radius: 20px;
  width: 290px;
  height: 330px;
  margin:auto; 
  
  }
	.text {
    font-size: 20px;
    
	}
`
