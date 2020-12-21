import css from 'styled-jsx/css'
export default css`
.package-bg {
    max-width: 100vw;
    min-height: 100vh;
    background-image: url(/images/package/package-bg-top.svg);
    background-repeat: no-repeat;
    background-size: 100%;
    background-attachment: fixed;
    padding-bottom: 5%;
    background-color: #f4f5f7;
    
}

.package-header {
    display: flex;
    font-size: 1.7em;
    padding: 4% 6% 1% 6%;
    font-weight: bold;
}
.center {
    display: flex;
    justify-content: center;
}
.container {
    background-color: rgba(255,255,255,0.7);
    width: 88%;
    padding-top: 3%;
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
    font-size: 1.4em;
    padding-bottom: 10px;
}

.addpackbutton {
    color: #9593A0;
    font-size: 19px;
    cursor: pointer;
    padding: 2% 20%;
    background-color: rgba(255,255,255,0.2);
    border: 1px dashed #9593A0;
    margin: 5% auto 7%;
    width: 70%;
}
.addpackbutton:hover {background-color: #F4F5F7}

`
