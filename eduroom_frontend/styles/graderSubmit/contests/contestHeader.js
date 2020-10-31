import css from "styled-jsx/css"
export default css`
  /* Dropdown Button */
  .dropbtn {
    color: 5b5b5b;
    font-size: 16px;
    border: none;
  }

  /* The container <div> - needed to position the dropdown content */
  .dropdown {
    position: relative;
    display: inline-block;
  }

  /* Dropdown Content (Hidden by Default) */
  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f4f5f7;
    min-width: 120px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }

  /* Links inside the dropdown */
  .dropdown-content a {
    color: #5b5b5b;
    padding: 10px 16px;
    text-decoration: none;
    display: block;
  }

  /* Change color of dropdown links on hover */
  .dropdown-content a:hover {
    background-color: #ddd;
  }

  /* Show the dropdown menu on hover */
  .dropdown:hover .dropdown-content {
    display: block;
  }

  /* Change the background color of the dropdown button when the dropdown content is shown */
  .dropdown:hover .dropbtn {
    background-color: #3e8e41;
  }

  .header,
  .tools,
  .left {
    display: flex;
  }
  .title,
  tools {
    margin: 0;
    align-self: center;
  }
  .title {
    width: 60%;
  }
  .tools {
    width: 40%;
  }
`
