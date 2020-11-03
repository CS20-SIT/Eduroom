import css from 'styled-jsx/css'
export default css`
#container {
    width: 600px;
    height: auto;
}
.row {
    position: relative;
    display: block;
    width: 100%;
    height: 40px;
    border-bottom: 1px solid #AFAFAF;
}
.name {
    position: relative;
    display: inline-block;
    width: 50%;
    line-height: 45px;
}
.score {
    position: relative;
    display: inline-block;
    width: 25%;
}
.row:nth-child(1) {
    background: gold;
}
.row:nth-child(2) {
    background: #c0c0c0;
}
.row:nth-child(3) {
    background: #cd7f32;
}
`