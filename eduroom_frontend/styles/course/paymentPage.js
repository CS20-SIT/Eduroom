import css from 'styled-jsx/css'
export default css`
.p{
    margin-left: 20px;
}
.divleft{
   width: 50vw;
    display: flex;
    flexDirection: column;
    justify-content: center;
}
.test{
    display: flex;
    justify-content: center;
    border: black;
    
}
.bg{
    background-color: #F4F5F7;
    height: "100vh";
}

.card{
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);
            background: white;
            border-radius: 2vh;
            width: 70vw;
            height: 75vh;
        
}
.CheckoutBar {
    display: flex;
    justify-content: start;
    align-items: center;
    height: 100px;
    font-size: 24px;
    padding-left: 100px;
    margin-bottom: 50px;
    background-color: lightsalmon;
}
.block{
    display: flex;
    flex-direction: column;
    justify-content: start;
    width: 70%;
    height: 600px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.3);
    font-family: 'Quicksand', sans-serif;
    padding-top: 20px;
    padding-left: 50px;
}
.col-6{
    width: %;
    padding-left: 1.5%;
}
.billDiv{
    // margin-botton: 20px;
    font-size: 24px;
}
.text-title {
    font-family: 'Quicksand', sans-serif;
  }

  input,select {
    border: 1px solid #5B5B5B;
    padding: .50rem;
    border-radius: .5rem;
    outline:none;
    background: white;
    -webkit-appearance: none;
}
.country{
    margin-bottom: 10px;
}
.input-text {
    width: 100%;
    font-size: 0.8em;
}
option{
    font-size: 0.7em;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    outline: none;
    -webkit-appearance: none;
}
.input-name {
    flex: 1 1 auto;
    display: flex;
    justify-content: center;
    width: 100%;
    height: auto;
    margin: 1.5% 1%;
}
.inner-purple {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    padding: 4%;
}
.purplebox{
    border-radius: 10px;
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.3);
    height: 300px;
   width: 90%;
   background-color: #3D467F;
}
.name{
    height: 40px;
    display: flex;
    align-item: center;
}
.summary{
    display: flex;
    align-item: start;
    height: 480px;
   width: 55vh;
   background-color: white;
   box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.3);
}
.whitebox{
    // border-radius: 10px;
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.3);
    height: 450px;
   width: 70%;
   background-color: white;
   
}
.text{
    font-size: 13px;
    display: flex;
    align-item: center;
    justify-content: center;
    textAlign: justify;
    width:300;
    marginLeft:20;
}

`