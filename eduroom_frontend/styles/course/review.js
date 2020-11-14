import css from 'styled-jsx/css'
export default css`
    .box{
        box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.3);
                background: white;
                border-radius: 2vh;
                width: 80vw;
                height: 100vh;
                margin-left: auto;
                margin-right: auto;
               
                display: flex;
                justify-content: start;
                background-color: white;
    }
    .myimg{
        width:60px;
        height:60px;
        object-fit:cover;
        border-radius:50%;
       
      }
      .image-position{
          position : absolute;
          margin-top : 8rem;
          margin-left : 10%;
      }
      .bg{
        background-image:url('/images/big-bg.svg');
        background-size : cover;
      }
`