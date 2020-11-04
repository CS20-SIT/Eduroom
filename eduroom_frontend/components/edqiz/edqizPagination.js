import React, { Fragment } from 'react'
import style from '../../styles/edqiz/pagination'
const Pagination = ({ current,goto }) => {
  return (
    <Fragment>
      <div className="pagination">
        {
          [...Array(3)].map((el,index)=>{
            return <div key={index} className={'circle '+`${current == index+1 ?'current':''}`} onClick={()=>{goto(index+1)}}>
              <span>{index+1}</span>
              </div>
          }).reduce((prev,curr)=>{return [prev,(<div key={prev.key+'l'} className="line"></div>),curr]})
        }
      </div>
      <style jsx>{style}</style>
    </Fragment>
  )
}
export default Pagination
