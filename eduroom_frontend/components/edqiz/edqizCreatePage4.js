import React, { Fragment, useState, useEffect } from 'react'
import EdquizPagination from './edqiz-create-pagination'
import style from '../../styles/edqiz/createPage'
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
  const handleUplaodFile = (e) => {
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
              <p className="landing-header">COVER IMAGE</p>
              <p className="">Give your quiz a cover image and description</p>
            </div>
            <div
              className="col-12"
              style={{ display: 'flex', justifyContent: 'center' }}
            >
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
                  onChange={handleUplaodFile}
                />
                {image ? (
                  <div
                    style={{
                      width: '100%',
                      height: '100%',
                      display: 'contents',
                    }}
                  >
                    <img
                      src=""
                      id="cover-image"
                      style={{ maxWidth: '600px', maxHeight: '240px' }}
                    />
                  </div>
                ) : (
                  <div>
                    <span style={{ fontSize: '1.3em' }}>
                      <i className="far fa-file"></i>
                    </span>
                    <br />
                    <span>Click here to add a document</span>
                  </div>
                )}
              </div>
            </div>
            <div
              className="col-12"
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              <div
                style={{
                  width: '600px',
                }}
              >
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
                className="prevConButton"
                onClick={() => {
                  goto(5)
                }}
              >
                Done
              </button>
            </div>
          </Fragment>
        </div>
      </div>
      <style jsx>{style}</style>
      <style jsx>{`
        .imageUpload {
          width: 600px;
          height: 250px;
          border: 1px dashed #b3abbc;
          border-radius: 8px;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
        }
      `}</style>
    </Fragment>
  )
}
export default Page4
