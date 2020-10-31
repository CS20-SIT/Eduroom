import React, { Fragment, useState, useEffect } from 'react'
import EdquizPagination from './edqizPagination'
import style from '../../styles/edqiz/managePage'
import InputText from '../utils/InputText'
const Page4 = ({
  goto,
  description,
  image,
  changeDescription,
  changeImage,
}) => {
  useEffect(() => {
    if (image) {
      var reader = new FileReader()
      reader.onload = function (e) {
        document.getElementById('cover-image').src = e.target.result
      }
      reader.readAsDataURL(image)
    }
  }, [])
  const handleChange = (e) => {
    changeDescription(e.target.value)
  }
  const handleUploadFile = (e) => {
    changeImage(e.target.files[0])
  }
  return (
    <Fragment>
      <div className="col-12">
        <div className="row">
          <EdquizPagination current={3} goto={goto} />
        </div>
      </div>
      <div className="col-12">
        <div className="row row-content">
          <Fragment>
            <div className="col-12">
              <p className="edqiz-manage-header">COVER IMAGE</p>
              <p className="">Give your quiz a cover image and description</p>
            </div>
            <div className="col-12 cflex">
              <div
                className="imageUpload"
                onClick={() => {
                  document.getElementById('image').click()
                }}
              >
                <input
                  id={'image'}
                  type="file"
                  accept="image/*"
                  hidden={true}
                  onChange={handleUploadFile}
                />
                {image ? (
                  <div className="show-img">
                    <img
                      className="mw-600 mh-240"
                      src=""
                      alt="cover-image"
                      id="cover-image"
                    />
                  </div>
                ) : (
                  <div>
                    <span className="fs-13">
                      <i className="far fa-file"></i>
                    </span>
                    <br />
                    <span>Click here to add a document</span>
                  </div>
                )}
              </div>
            </div>
            <div className="col-12 cflex">
              <div className="w-600">
                <InputText
                  placeholder="Description"
                  value={description}
                  style={{ padding: '3%', margin: '0% 0% 2% 0%' }}
                  handleChange={handleChange}
                />
              </div>
            </div>
            <div className="col-12">
              <button
                className="edqiz-manage-button purple big-button"
                onClick={() => {
                  goto(5)
                }}
              >
                <span className="edqiz-manage-button-text">Done</span>
              </button>
            </div>
          </Fragment>
        </div>
      </div>
      <style jsx>{style}</style>
    </Fragment>
  )
}
export default Page4
