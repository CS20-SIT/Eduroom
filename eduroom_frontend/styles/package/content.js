import css from 'styled-jsx/css'
export default css`
.bg{
    position: absolute;
    bottom: 0%;
    height: 100vh;
    width: 95vw;
    background-image: url('/images/package/package-bg');
}
.package-header {
    display: flex;
    font-size: 1.7em;
    padding: 0 6% 3% 6%;
    font-weight: bold;
}
.container {
    background-color: #ffffff;
    width: 88%;
    margin-bottom: 5%;
    padding-top: 4%;
    border-radius: 10px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.25);
    display: flex;
    flex-direction: column;
    text-align: center;
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
    background-color: white;
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
