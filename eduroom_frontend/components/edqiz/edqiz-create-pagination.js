import React, { Fragment } from 'react'
const Pagination = ({ current }) => {
  return (
    <Fragment>
      <div className="pagination">
        <div className={current == 1 ? 'current circle':'circle'} >
          <span>1</span>
        </div>
        <div className="line"></div>
        <div className={current == 2 ? 'current circle':'circle'}>
          <span>2</span>
        </div>
        <div className="line"></div>
        <div className={current == 3 ? 'current circle':'circle'}>
          <span>3</span>
        </div>
      </div>
      <style jsx>
        {`
          .pagination {
            display: flex;
            width: 100%;
            justify-content: center;
          }
          .line {
            width: 10%;
            border-bottom: 1px solid #CED4DA;
            height: 50%;
          }
          .circle {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 2%;
            width: 36px;
            height: 36px;
            border-radius: 36px;
            color: white;
            font-size:1.2em;
            font-weight:600;
            background: #5B5B5B;
          }
          .current {
              background: #F39AC4;
          }
        `}
      </style>
    </Fragment>
  )
}
export default Pagination
