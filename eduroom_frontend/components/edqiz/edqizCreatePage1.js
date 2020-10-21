import React, { Fragment } from 'react'
import EdquizPagination from './edqiz-create-pagination'
import style from '../../styles/edqiz/createPage'
const Page1 = ({goto,name,change}) => {
  const handleGo = (val)=>{
    if(name == ''){
      alert('Please Input quiz name')
    } else {
      goto(val)
    }
  }
  const handleChange = (e)=>{
    change(e.target.value)
  }
  return (
    <Fragment>
      <div className="col-12">
        <div className="row">
          <EdquizPagination current={1} goto={handleGo}/>
        </div>
      </div>
      <div className="col-12">
        <div className="row row-content">
          <div className="col-12">
            <p className="landing-header">QUIZ NAME</p>
          </div>
          <div className="col-12">
            <span style={{ color: '#3d467f' }}>
              let's start by giving the quiz a name
            </span>
          </div>
          <div className="col-12">
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="QUIZ NAME . . ."
              onChange={handleChange}
              value={name}
            />
          </div>
          <div className="col-12">
            <button
              className="landing-button"
              onClick={()=>{handleGo(2)}}
            >
              <span className="landing-button-text">GO!</span>
            </button>
          </div>
        </div>
      </div>
      <style jsx>{style}</style>
    </Fragment>
  )
}
export default Page1
