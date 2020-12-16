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
    height: 41vh;
    background: rgba(255,255,255,0.7);

}
.incard{
    width: 50vw;
    margin-left: 65px;
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
    padding: 0 10%;
}
.bigDiv{
    display: flex;
    justify-content: start;
    align-items: center;
    background-color: white;
    width: 60vw;
    height: 20vh;

}
.bestsell-tag{
    display: flex;
    flex-direction: row;
    align-items: center;
}
.text2{
    font-weight: 500;
    margin-left: 10px;
    color: #3D467F;
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
`