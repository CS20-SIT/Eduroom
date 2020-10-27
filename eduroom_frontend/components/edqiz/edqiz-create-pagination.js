import React, { Fragment } from 'react'
import style from '../../styles/edqiz/createPagination'
const Pagination = ({ current,goto }) => {
  return (
    <Fragment>
      <div className="pagination">
        <div className={current == 1 ? 'current circle' : 'circle'} onClick={()=>{goto(1)}}>
          <span>1</span>
        </div>
        <div className="line"></div>
        <div className={current == 2 ? 'current circle' : 'circle'} onClick={()=>{goto(2)}}>
          <span>2</span>
        </div>
        <div className="line"></div>
        <div className={current == 3 ? 'current circle' : 'circle'} onClick={()=>{goto(3)}}>
          <span>3</span>
        </div>
      </div>
      <style jsx>{style}</style>
    </Fragment>
  )
}
export default Pagination
