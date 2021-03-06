import css from "styled-jsx/css"
export default css`
  .nav,
  .profile {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  .nav {
    margin: 40px 0 20px 0;
    position: sticky;
  }

  .link {
    display: flex;
    height: inherit;
    padding: 0 40px 0 40px;
    font-size: 1.2rem;
    font-weight: bold;
    color: #4f4f4f;
    justify-content: center;
    align-items: center;
  }
  .text:hover {
    cursor: pointer;
  }
  .link:hover {
    color: #f39ac4;
  }
  .active {
    color: #f39ac4;
  }
  .profile {
    display: flex;
    justify-content: space-evenly;
  }
  img {
    width: 2.5rem;
    borderradius: 50%;
    margin-left: 10px;
  }
`
