import css from 'styled-jsx/css'
export default css`
body {
	border:none;
	font-family: 'Lato', Arial, sans-serif;
	color: #989c9b;
}
.container > header {
	margin: 0 auto;
	padding: 1em;
	text-align: center;
	background: #fe75b7;
	border-radius: 25px;
	
}
.container > header h1 {
  font-weight: 500;
	font-size: 3em;
	margin: 0;
}
.wrapper {
	line-height: 1.5em;
	margin: 0 auto;
	padding: 2em 0 3em;
	width: 90%;
	max-width: 2000px;
	overflow: hidden;
	
}
table {
    border-collapse: collapse;
    width: 100%;
	background: #fff;
	border:solid;
    border-color:#D5C1FC;
	
}
th {
    background-color: #FF93D9;
    font-weight: bold;
    color: #fff;
	white-space: nowrap;
	
}
td, th {
    padding: 1em 1.5em;
    text-align: left;
}
tbody th {
	background-color: #2ea879;
}
tbody tr:nth-child(2n-1) {
    background-color: #f5f5f5;
    transition: all .125s ease-in-out;
}
tbody tr:nth-child(1){
	background-color: #FFC745;
	transition: all .125s ease-in-out;
}
tbody tr:nth-child(2){
	background-color: #E9E9E9;
	transition: all .125s ease-in-out;
}
tbody tr:nth-child(3){
	background-color: #FFAC86;
	transition: all .125s ease-in-out;
}
tbody tr:hover {
    background-color: #CBC1FF;
}
td.rank {
	text-transform: capitalize;
}
`