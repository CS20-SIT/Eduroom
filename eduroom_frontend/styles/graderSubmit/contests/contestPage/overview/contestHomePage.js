import css from "styled-jsx/css"
export default css`
  .main {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
  .size {
    width: 90%;
    height: 80%;
  }
  .overview-info,
  .overview-detail {
    width: 100%;
    height: 45%;
    padding-right: 20px;
    border-right: 2px solid rgba(91, 91, 91, 0.1);
  }
  .overview-info {
    display: flex;
    margin-top: 10px;
  }
  .overview-detail {
    border-bottom: 2px solid rgba(91, 91, 91, 0.1);
  }
  .overview-info-detail {
    width: 60%;
  }
  .overview-info-status {
    width: 40%;
    display: flex;
    justify-content: flex-end;
    padding-top: 20px;
  }
  .overview-title {
    margin: 0;
    padding-top: 20px;
    font-weight: bold;
    color: #3d467f;
    font-size: 1.125rem;
  }
  .overview-title-detail {
    margin-top: 30px;
    color: #828282;
    font-size: 0.875rem;
    height: 60%;
  }
  .status-box {
    width: 150px;
    height: fit-content;
    display: flex;
    justify-content: space-evenly;
    border: 1px solid #3d467f;
    border-radius: 50px;
  }
  .status-text {
    color: #3d467f;
    margin: 2px;
  }
  .flex-item {
    color: #5b5b5b;
    font-size: 0.875rem;
    font-weight: bold;
    padding-left: 8px;
  }
  .flex-container {
    width: 90%;
    background-color: #eff0f6;
    padding: 5px 0;
    display: flex;
  }
  .announcement-list {
    height: 76%;
  }
`
