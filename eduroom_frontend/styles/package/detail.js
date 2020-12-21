import css from 'styled-jsx/css'
export default css`
.center{
    display: flex;
    justify-content: center; 
}
.title{
    font-size: 24;
    color: #3D467F;
    font-family: lato;
}
.pic{
    background-image: url('/images/package/bgbgbg.svg');
}
.textHead{
    font-size: 22px;
    color: #3D467F;
    padding: 1.5% 0;
}
.text{
    text-align: justify;
    margin-bottom: 30px;

}
.card{
    display: flex;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);
    background: white;
    border-radius: 10px;
    width: 80vw;
    height: 38vh;
    background: rgba(255,255,255,0.7);

}
.incard{
    width: 50vw;
    margin-left: 10%;
}
.courseBox {
    color: black;
    text-align: left;
    font-size: 18px;
    width: 85%;
    padding: 0.5% 2%;
    background-color: #e1eefb;
    border: 1px solid #e1eefb;
    margin-bottom: 1%;
    border-radius: 10px;
    box-shadow: 0px 2px 5px rgba(0,0,0,0.2);
    cursor: pointer;
}
.bigCard{
    display: flex;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);
    background: white;
    border-radius: 10px;
    width: 80vw;
    flex-direction: column;
    background: rgba(255,255,255,0.7);
    margin-bottom: 5%;
    padding: 0 10% 3%;
}
.bigDiv{
    display: flex;
    justify-content: start;
    align-items: center;
    background-color: white;
    width: 60vw;
    margin-bottom: 30px;

}
.bestsell-tag{
    display: flex;
    flex-direction: row;
    align-items: center;
}
.text2{
    font-weight: 500;
    color: #3D467F;
}
.instname{
    font-size: 20px;
    margin-bottom: 10px;
    font-weight: 600;
}
.instructor{
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;
    margin-top: 10px;
}
.last-update{
    margin-bottom: 3; 
    display: flex;
    align-items: flex-start;
    flex-direction: row;
}
.coursename{
    font-family: Lato;
font-style: normal;
font-weight: 700;
font-size: 22px;
color: #3D467F;
margin-top: 5px;

}
.instructor2{
    font-family: Quicksand;
font-style: normal;
font-weight: bold;
font-size: 15px;
padding-top: 30px;
color: #5B5B5B;
}
.update-icon{
    width: 20px;
    height: 20px;
    margin-right: 10px;
}
.price{
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;
}
.old-price{
    margin: 0 30px 10px 0;
    font-size: 30px;
    font-weight: 500;
}
.new-price{
    margin-right: 30px; 
    font-size: 18px;
    margin-top: 10px;
    color: #9593A0;
    text-decoration-line: line-through;
}
.button{
    margin-right: 10px;
    background-color: #7B89DD;
    color: white;
    border-radius: 10px;
}
.bs{
    background-color:#DED3FF;
		outline: none;
		border: none;
		padding:6px;
		border-radius: 30px;
		color:#2A00A2;
		position:relative;
		top:-45px;
        left:120px;
        font-size:15px;
}
`