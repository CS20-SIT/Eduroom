import css from "styled-jsx/css"
export default css`
  .properties {
    height: 10%;
    padding-bottom: 2rem;
  }
  .header,
  .tools,
  .left {
    display: flex;
  }
  .tools,
  .rule,
  .status {
    justify-content: space-between;
  }
  .title,
  .tools {
    margin: 0;
    align-self: center;
  }
  .title {
    width: 55%;
  }
  .tools {
    width: 45%;
  }
  .left {
    display: inherit;
    width: 40%;
    justify-content: space-between;
  }
  .search {
    width: 200px;
  }
  .list {
    height: 90%;
    overflow: auto;
  }

  ::-webkit-scrollbar {
    width: 8px; /* width of the entire scrollbar */
  }
  ::-webkit-scrollbar-track {
    background: transparent; /* color of the tracking area */
  }
  ::-webkit-scrollbar-thumb {
    background: rgba(189, 189, 189, 0.7); /* color of the scroll thumb */
    border-radius: 50px; /* roundness of the scroll thumb */
  }
`
