import css from 'styled-jsx/css'
export default css`

#slider{
    overflow: hidden;
}
#slider figure{
    position: relative;
    width:500%;
    margin 0;
    left: 0;
    animation: 20s slider infinite;
}
#slider figure img{
    width: 20%;
    float: left;
}
@keyframes slider{
    0% {
        left:0%;
    }
    25%{
        left: 0%;
    }
    45%{
        left: -100%;
    }
    50%{
        left: -100%;
    }
    80%{
        left: -200%;
    }
    90%{
        left:-100%;
    }   
}

`