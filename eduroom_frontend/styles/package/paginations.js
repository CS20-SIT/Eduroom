import css from 'styled-jsx/css'
export default css`
.container {
  display: flex;
  justify-content: flex-end;
  width: 100%;
}
.box {
  display: flex;
}
.btn {
  background: #ffffff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 10px 20px;
  margin-left: 20px;
  transition: 0.25s;
}
.active{
  background-color: #3D467F;
  color: white !important;
}
.btn:hover{
  cursor: pointer;
}
`
