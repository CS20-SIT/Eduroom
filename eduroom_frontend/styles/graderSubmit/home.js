import css from "styled-jsx/css"
export default css`
  .page {
    width: inherit;
    height: inherit;
    display: flex;
    position: fixed;
  }
  .graphic,
  .content {
  }
  .graphic {
    width: 35%;
    display: flex;
    justify-content: center;
  }
  img {
    left: 0;
    width: 32%;
    position: absolute;
    top: 15%;
  }
  .detail {
    width: 83%;
    padding: 0px;
  }
  .content {
    width: 60%;
  }
`
