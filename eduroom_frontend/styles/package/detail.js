import css from 'styled-jsx/css'
export default css`
.pic{
    background-image: url('/images/package/bgbgbg.svg');
}
.textHead{
    font-size: 22px;
    color: #3D467F;
}
.text{
    width: 65vw;
    text-align: justify;
    margin-bottom: 30px;
}
.card{
    display: flex;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);
            background: white;
            border-radius: 2vh;
            width: 70vw;
            height: 45vh;
            padding-top: 1%;
            background: rgba(255,255,255,0.7);
}

.bigCard{
    display: flex;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);
            background: white;
            border-radius: 2vh;
            width: 70vw;
            height: 100%;
            padding-top: 1%;
            flex-direction:column;
            background: rgba(255,255,255,0.7);
}
.bigDiv{
    display: flex;
    justify-content: start;
    align-items: center;
    padding-top: 10px;
    padding-left: 20px;
    background-color: white;
    width: 60vw;
    height: 20vh;

}
`