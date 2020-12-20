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
    30%{
        left: 0%;
    }
    60%{
        left: -100%;
    }
    80%{
        left: -100%;
    }
      
}
img{
    height: 50%;
    width: 50%;
}

`