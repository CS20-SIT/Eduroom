import css from 'styled-jsx/css'
export default css`

    .background{
       
        padding:4%;
    }
    .centerBar{
        font-size: 32px;
        color: #3D467F;
        text-align: center;     
    }
    .courseInCart{
        font-size: 20px;
        color: #3D467F;
        margin-left: 12%;
    }
    .checkoutBox{
        box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.3);
                background: rgba(255,255,255,.9);
                width: 40vw;
                height: 30vh;
                margin-top: 10%;
                margin-left: auto;
                margin-right: auto;
                border-radius: 10px;
    }
    .bigDiv{
        box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.3);
                background: white;
                border-radius: 2vh;
                width: 70vw;
                height: 20vh;
        margin-left: auto;
        margin-right: auto;
        display: flex;
        justify-content: start;
        padding-top:10px;
        padding-left:10px;
        background-color: white;
        
    }

    .apply{
        width: 70px;
        height: 32px;
        background: #A880F7;
        font-size: 16px;
        border: none;
        color: white;
        
    }
    .inputCoupon {
        padding: 4px;
        font-size: 17px;
        color: whiteradius: 10px;;
       
      }
    .checkOut{
        width: 133px;
        height: 42px;
        
        background: #A880F7;
        font-size: 16px;
        border: none;
        color: white;
        border-radius: 10px;
       
    }
    .bg{
        background-image:url('/images/cart-bg.svg');
        background-size : cover;
    }
`