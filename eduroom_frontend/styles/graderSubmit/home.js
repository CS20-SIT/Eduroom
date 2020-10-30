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
    width: 45vw;
    display: flex;
    justify-content: center;
  }
  img {
    height: fit-content;
    position: absolute;
    top: 15%;
  }
  .content {
    width: 55vw;
  }
`
