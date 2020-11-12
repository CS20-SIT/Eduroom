import css from 'styled-jsx/css'
export default css`
.package-bg {
    max-width: 100vw;
    min-height: 100vh;
    background-image: url(/images/package/package-bg.svg);
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    padding-bottom: 5%;
    
}

.package-header {
    display: flex;
    font-size: 1.7em;
    padding: 4% 6% 3% 6%;
    font-weight: bold;
    text-shadow: 2px 1px rgba(0,0,0,0.5);
}
.center {
    display: flex;
    justify-content: center;
}
.container {
    background-color: rgba(255,255,255,0.7);
    width: 88%;
    padding-top: 4%;
    border-radius: 10px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.25);
    display: block;
    flex-direction: column;
    text-align: center;
    margin: auto
}
.package-content {
    text-align: center;
    color: #5B5B5B;
    margin: 7% 0 4%;
    font-size: 23px;
    font-weight: 500;
}
.fa-plus-circle {
    color: #e5e5e5;
    font-size: 1.5em;
    padding-bottom: 20px;
}

.addpackbutton {
    color: #3d467f;
    font-size: 19px;
    cursor: pointer;
    width: 85%;
    padding: 2% 30%;
    background-color: rgba(255,255,255,0.2);
    border: 1px dashed #9593A0;
    margin: 5% auto 15%;
    
}
.addpackbutton:hover {background-color: #F4F5F7;}
.background-img {
    position: absolute;
    top: 0%;
    width: 100vw;
    z-index: -1;
  }

`
