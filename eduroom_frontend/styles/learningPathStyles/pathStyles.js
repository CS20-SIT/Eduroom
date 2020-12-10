import css from 'styled-jsx/css'
export default css`
body{
	font-family: 'Raleway', sans-serif;
	color: #333;
  }
  header{
	margin: 0 auto;
	padding: 1em;
	background: #fe75b7;
	border-radius: 25px;
  }
  header span1{
	font-family:bold;
	font-size: 32px;
	padding:0px 10px;
	border-radius: 25px;
	  text-align: right;
	  float:right;
  }
  header span2{
	font-family:bold;
	font-size: 18px;
	padding: 5px 0px 5px 10px;
	  float: left;
  }
   header span4{
	   color:#A880F7;
	   padding: 5px 10px 0px 10px;
	   float: left;
   }
  
  header span3{
	font-family:bold;
	font-size: 18px;
	padding: 0px 5px 0px 5px;
	  float: left;
  }
  header span5{
	font-family:bold;
	font-size: 18px;
	padding: 5px 2px 5px 5px;
	  float: left;
	  color:#A27CEF;
  }
  header span6{
	font-family:bold;
	font-size: 18px;
	padding: 5px 0px 5px 0px;
	  float: left;
	  
  }
	header p{
		margin: 0px auto 0px 0px ;
		padding: 5px 15px 5px 15px;
		text-align : center;
	background: #A27CEF;
	color: #ffffff;
	border-radius: 25px;
	}
.circle1 {
	float: left;
	position: relative;
	height: 29px;
	width: 30px;
	background-color: #bbb;
	border-radius: 50%;
	display: inline-block;
  }
  .timeline {
	position: relative;
	padding: 0;
	width: 100%;
	margin-top: 20px;
	list-style-type: none;
	
  }
  
  .timeline:before {
	position: absolute;
	left: 30%;
	top: 30%;
	content: ' ';
	display: block;
	width: 3px;
	height: 130%;
	margin-left: -1px;
	background: #3D467F;
	z-index: 5;
  }
  
  .timeline li {
	padding: 2em 0;
  }
  
  .timeline .circle1{
	width: 50px;
	height: 50px;
	position: relative;
	background: #D5C1FC;
	z-index: 5;
	left: 0;
	right: 0;
	margin-left:auto;
	margin-right:auto;
	top: 50px;
	margin-top: 0;
  }
  
  
  .direction-l,
  .direction-r {
	float: none;
	width: 100%;
	text-align: center;
  }
  
  .flag-wrapper {
	text-align: center;
	position: relative;
  }
  
  .flag {
	position: relative;
	display: inline;
	background: rgb(255,255,255);
	font-weight: 600;
	z-index: 15;
	padding: 6px 10px;
	text-align: left;
	border-radius: 5px;
  }
  
  .direction-l .flag:after,
  .direction-r .flag:after {
	content: "";
	position: absolute;
	left: 50%;
	top: -15px;
	height: 0;
	width: 0;
	margin-left: -8px;
	border: solid transparent;
	border-bottom-color: rgb(255,255,255);
	border-width: 8px;
	pointer-events: none;
  }
  
  .direction-l .flag {
	-webkit-box-shadow: -1px 1px 1px rgba(0,0,0,0.15), 0 0 1px rgba(0,0,0,0.15);
	-moz-box-shadow: -1px 1px 1px rgba(0,0,0,0.15), 0 0 1px rgba(0,0,0,0.15);
	box-shadow: -1px 1px 1px rgba(0,0,0,0.15), 0 0 1px rgba(0,0,0,0.15);
  }
  
  .direction-r .flag {
	-webkit-box-shadow: 1px 1px 1px rgba(0,0,0,0.15), 0 0 1px rgba(0,0,0,0.15);
	-moz-box-shadow: 1px 1px 1px rgba(0,0,0,0.15), 0 0 1px rgba(0,0,0,0.15);
	box-shadow: 1px 1px 1px rgba(0,0,0,0.15), 0 0 1px rgba(0,0,0,0.15);
  }
  
  .time-wrapper {
	display: block;
	position: relative;
	margin: 4px 0 0 0;
	z-index: 14;
	line-height: 1em;
	vertical-align: middle;
	color: #fff;
  }
  
  .direction-l .time-wrapper {
	float: none;
  }
  
  .direction-r .time-wrapper {
	float: none;
  }
  
  .time {
	background: #00c4f3;
	display: inline-block;
	padding: 8px;
  }
  
  .desc {
	position: relative;
	margin: 1em 0 0 0;
	padding: 1em;
	background: rgb(254,254,254);
	-webkit-box-shadow: 0 0 1px rgba(0,0,0,0.20);
	-moz-box-shadow: 0 0 1px rgba(0,0,0,0.20);
	box-shadow: 0 0 1px rgba(0,0,0,0.20);
	z-index: 15;
  }
  
  .direction-l .desc,
  .direction-r .desc {
	position: relative;
	margin: 1em 1em 0 1em;
	padding: 1em;
	z-index: 15;
  }
  .tooltip {
	position: relative;
	display: inline-block;
	border-bottom: 1px dotted black;
	
  }
  
  .tooltip .tooltiptextleft {
	visibility: hidden;
	width: 300px;
	background-color: #5B5B5B;
	color: #fff;
	text-align: center;
	border-radius: 8px;
	padding: 10px 0;
	position: absolute;
	z-index: 1;
	top: 60px;
	right: 175px;
  }
  
  .tooltip .tooltiptextleft::after {
	content: "";
	position: absolute;
	top: 20%;
	left: 100%;
	margin-top: -5px;
	border-width: 5px;
	border-style: solid;
	border-color: transparent transparent transparent #5B5B5B;
  }
  .tooltip:hover .tooltiptextleft {
	visibility: visible;
  }
  .tooltip .tooltiptextright {
	visibility: hidden;
	width: 300px;
	background-color: #5B5B5B;
	color: #fff;
	text-align: center;
	border-radius: 6px;
	padding: 5px 0;
	position: absolute;
	z-index: 1;
	top: 60px;
	left: -145px;
  }
  
  .tooltip .tooltiptextright::after {
	content: "";
	position: absolute;
	top: 20%;
	right: 100%;
	margin-top: -5px;
	border-width: 5px;
	border-style: solid;
	border-color: transparent #5B5B5B transparent transparent;
  }
  .tooltip:hover .tooltiptextright {
	visibility: visible;
  }
  
  @media(min-width: 768px){
	.timeline {
	  width: 660px;
	  margin: 0 auto;
	  margin-top: 20px;
	}
  
	.timeline li:after {
	  content: "";
	  display: block;
	  height: 0;
	  clear: both;
	  visibility: hidden;
	}
	
	.timeline .circle1 {
	  left: auto;
	  right: -30px;
	  top: 50px;
	}
  
	.timeline .direction-l .circle1 {
	  left: auto;
	  right: 115px;
	 
	}
	.timeline .direction-r .circle1 {
		left: auto;
		right: 205px;
	  }
  
	.direction-l {
	  position: relative;
	  width: 310px;
	  float: left;
	  text-align: right;
	}
  
	.direction-r {
	  position: relative;
	  width: 310px;
	  float: right;
	  text-align: left;
	}
  
	.flag-wrapper {
	  display: inline-block;
	}
	
	.flag {
	  font-size: 18px;
	}
  
	.direction-l .flag:after {
	  left: auto;
	  right: -16px;
	  top: 50%;
	  margin-top: -8px;
	  border: solid transparent;
	  border-left-color: rgb(254,254,254);
	  border-width: 8px;
	}
  
	.direction-r .flag:after {
	  top: 50%;
	  margin-top: -8px;
	  border: solid transparent;
	  border-right-color: rgb(254,254,254);
	  border-width: 8px;
	  left: -8px;
	}
  
	.time-wrapper {
	  display: inline;
	  vertical-align: middle;
	  margin: 0;
	}
  
	.direction-l .time-wrapper {
	  float: left;
	}
  
	.direction-r .time-wrapper {
	  float: right;
	}
  
	.time {
	  padding: 5px 10px;
	}
  
	.direction-r .desc {
	  margin: 1em 0 0 0.75em;
	}
  }
  
  @media(min-width: 992px){
	.timeline {
	  width: 800px;
	  margin: 0 auto;
	  margin-top: 20px;
	}
  
	.direction-l {
	  position: relative;
	  width: 380px;
	  float: left;
	  text-align: right;
	}
  
	.direction-r {
	  position: relative;
	  width: 380px;
	  float: right;
	  text-align: left;
	}
  }
`