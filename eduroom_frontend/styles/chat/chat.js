import css from 'styled-jsx/css'
export default css`
.people::-webkit-scrollbar-track {
    background: #f4f5f7;
  }
  .people::-webkit-scrollbar-thumb:hover {
    background: rgb(192, 192, 192);
  }
  .people::-webkit-scrollbar {
    width: 14px;
  }
  .people::-webkit-scrollbar-thumb {
    color: rgb(141, 141, 141);
    background-clip: content-box;
    border: 4px solid transparent;
    border-radius: 7px;
    box-shadow: inset 0 0 0 10px;
  }
  .people::-webkit-scrollbar-button {
    width: 0;
    height: 0;
    display: hidden;
  }
  .people::-webkit-scrollbar-corner {
    background-color: transparent;
  }
  .people {
    height: 100vh;
  }
  
  .chat::-webkit-scrollbar-track {
    background: #ffffff;
  }
  .chat::-webkit-scrollbar-thumb:hover {
    background: rgb(192, 192, 192);
  }
  .chat::-webkit-scrollbar {
    width: 14px;
  }
  .chat::-webkit-scrollbar-thumb {
    color: rgb(141, 141, 141);
    background-clip: content-box;
    border: 4px solid transparent;
    border-radius: 7px;
    box-shadow: inset 0 0 0 10px;
  }
  .chat::-webkit-scrollbar-button {
    width: 0;
    height: 0;
    display: hidden;
  }
  .chat::-webkit-scrollbar-corner {
    background-color: transparent;
  }
  .chat {
    height: 100vh;
    overflow-y: scroll;
  }
  .nochat::-webkit-scrollbar-track {
    background: #ffffff;
  }
  .nochat::-webkit-scrollbar-thumb:hover {
    background: rgb(192, 192, 192);
  }
  .nochat::-webkit-scrollbar {
    width: 14px;
    display: hidden;
  }
  .nochat::-webkit-scrollbar-thumb {
    color: rgb(141, 141, 141);
    display: hidden;
  }
  .nochat::-webkit-scrollbar-button {
    width: 0;
    height: 0;
    display: hidden;
  }
  .nochat::-webkit-scrollbar-corner {
    background-color: transparent;
  }
  .nochat {
    height: 100vh;
  }
  .nopeople::-webkit-scrollbar-track {
    background: #f4f5f7;
  }
  .nopeople::-webkit-scrollbar-thumb:hover {
    background: rgb(192, 192, 192);
  }
  .nopeople::-webkit-scrollbar {
    width: 14px;
    display: hidden;
  }
  .nopeople::-webkit-scrollbar-thumb {
    color: rgb(141, 141, 141);
    display: hidden;
  }
  .nopeople::-webkit-scrollbar-button {
    width: 0;
    height: 0;
    display: hidden;
  }
  .nopeople::-webkit-scrollbar-corner {
    background-color: transparent;
  }
  .nopeople {
    height: 100vh;
  }

  .arrowDown {
    width: calc(100% - 28px);
    margin-bottom: 100px;
    bottom: 0;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
  }

  .memberDiv {
    display: flex;
    align-items: center;
    flex-birection: row;
    flex-wrap: wrap;
    width: 90%;
  }
  .memberName {
    margin-left: 15px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: calc(100% - 100px);
    margin-right: 5px;
  }
  .searchResult {
    width: calc(100% - 40px);
  }
  .chatPic {
    border-radius: 100%;
    display: flex;
    justify-content: center;
    overflow: hidden;
    position: relative;
    cursor: pointer;
  }
  .picOverlay {
    background-color: rgba(0, 0, 0, 0.3);
    align-items: center;
    bottom: 0;
    display: flex;
    justify-content: center;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 1;
    color: #fafafa;
  }
  .scroll::-webkit-scrollbar-thumb:hover {
    background: rgb(192, 192, 192);
  }
  .scroll::-webkit-scrollbar {
    width: 14px;
  }
  .scroll::-webkit-scrollbar-thumb {
    color: rgb(141, 141, 141);
    background-clip: content-box;
    border: 4px solid transparent;
    border-radius: 7px;
    box-shadow: inset 0 0 0 10px;
  }
  .scroll::-webkit-scrollbar-button {
    width: 0;
    height: 0;
    display: hidden;
  }
  .scroll::-webkit-scrollbar-corner {
    background-color: transparent;
  }
  .searchItem:hover{
    background-color:#f3f3f3;
    cursor:pointer;
  }





  
    

`