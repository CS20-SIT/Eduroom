import React, { Fragment, useState, useEffect } from 'react'
import Courses from './courses'
import style from '../../styles/package/createpackage'
import api from '../../api'

const EditPackage = (props, { index }) => {
	const [image, setImage] = useState(null)
	const [data, setData] = useState(null)

<<<<<<< HEAD
	useEffect(() => {
		const GetData = async () => {
			const result = await api.get('/api/package/getPackage', {
				params: { packageid: 'b7c2c25b-01e4-43e4-a72d-739d194a5bcd' },
			})
			setData(result.data[0])
		}
		GetData()
		console.log(data)
		if (image) {
			var reader = new FileReader()
			reader.onload = function (e) {
				document.getElementById('show-image' + index).src = e.target.result
			}
			reader.readAsDataURL(image)
		}
	}, [image])
	const handleUplaodFile = (e) => {
		let newValue = e.target.files[0]
		let type = 'image'
		console.log(newValue)
		setImage(newValue)
	}
	const numDiscount = [5, 10, 20, 30, 40, 50, 60, 70]
	const discount = numDiscount.map((num) => {
		return { label: num + '%', value: num }
	})
	const discountChange = (e) => {
		props.setMyPackage({
			...props.myPackage,
			discount: parseInt(e.target.value),
		})
	}
	const categories = [
		{ value: 'business', label: 'Business' },
		{ value: 'development', label: 'Development' },
		{ value: 'software', label: 'IT+Software' },
		{ value: 'design', label: 'Design' },
		{ value: 'computer', label: 'Computer' },
	]
	const categoryChange = (e) => {
		props.setMyPackage({ ...props.myPackage, category: e.target.value })
	}
	const nameChange = (e) => {
		props.setMyPackage({ ...props.myPackage, name: e.target.value })
	}
	const detailChange = (e) => {
		props.setMyPackage({ ...props.myPackage, detail: e.target.value })
	}

	const renderPage = () => {
		if (data === null) return null
		return (
			<Fragment>
				<div className="package-header">EDIT PACKAGE</div>
				<div className="container pd-4-10">
					<div className="subtitle mg-40 text-center">PACKAGE INFORMATION</div>
					<div style={{ display: 'flex' }}>
						<div className="img-upload">
							<div
								className="imageupload"
								onClick={() => {
									document.getElementById('image' + index).click()
								}}
							>
								<input id={'image' + index} type="file" accept="image/*" hidden={true} onChange={handleUplaodFile} />
								{image ? (
									<div>
										<img src="" id={'show-image' + index} style={{ maxWidth: 420, maxHeight: 235 }} />
									</div>
								) : (
									<div>
										<div>
											<i className="fas fa-camera"></i>
										</div>
										<div>Click here to add photo</div>
									</div>
								)}
							</div>
						</div>

						<div style={{ width: '50%' }}>
							<div>
								<input
									type="text"
									placeholder="Name"
									name="name"
									id="name"
									onChange={nameChange}
									value={props.myPackage.name}
								></input>
								<div>{data.name}</div>
							</div>

							<div>
								<select name="discount" onChange={discountChange} value={props.myPackage.discount}>
									<option disabled value={0}>
										Discount
									</option>
									{discount.map((dis, idx) => {
										return (
											<option value={dis.value} key={idx}>
												{dis.label}
											</option>
										)
									})}
								</select>
								<div>{data.discount}</div>
							</div>

							<div>
								<select name="category" onChange={categoryChange} value={props.myPackage.category}>
									<option disabled value="default">
										Category
									</option>
									{categories.map((el, idx) => {
										return (
											<option value={el.value} key={idx}>
												{el.label}
											</option>
										)
									})}
								</select>
							</div>

							<div>
								<textarea
									placeholder="Detail"
									name="detail"
									id="pdetail"
									rows="4"
									style={{ resize: 'none' }}
									className="pdetail"
									onChange={detailChange}
									value={props.myPackage.detail}
								></textarea>
								<div>{data.detail}</div>
							</div>
						</div>
					</div>

					<div>
						<div className="subtitle2">Courses</div>
						<div className="coursebox">
							<Courses />
						</div>
					</div>
				</div>
				<div className="center">
					<button className="createbutton mgb-5" onClick={() => props.changePage(2)}>
						Edit
					</button>
				</div>
			</Fragment>
		)
	}

	return (
		<Fragment>
      <div>
        { renderPage()}
=======
  return (
    <Fragment>
      <div >
        <div className="package-header">EDIT PACKAGE</div>
        <div className="container pd-4-10">
          <div className="subtitle mg-40 text-center">PACKAGE INFORMATION</div>
          <div style={{ display: 'flex' }}>
            <div id="img-upload-btn" className="img-upload">
              <div className="imageupload"
                onClick={() => {
                  document.getElementById("image" + index).click();
                }}
              >
                <input
                  id={"image" + index}
                  type="file"
                  accept="image/*"
                  hidden={true}
                  onChange={handleUplaodFile}
                />
                {image ? (
                  <div>
                    <img
                      src=""
                      id={"show-image" + index}
                      style={{ maxWidth: 420, maxHeight: 235 }}
                    />
                  </div>
                ) : (
                    <div>
                      <div><i className="fas fa-camera"></i></div>
                      <div>Click here to add photo</div>
                    </div>
                  )}
              </div>
            </div>

            <div style={{ width: '50%' }}>
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  id="package-name-field"
                  onChange={nameChange}
                  value={props.myPackage.name}
                ></input>
                <div>{data.packagename}</div>
              </div>
                
              <div>
                <select
                  id="package-discount-field"
                  name="discount"
                  onChange={discountChange}
                  value={props.myPackage.discount}
                >
                  <option disabled value={0}>
                    Discount
                      </option>
                  {discount.map((dis, idx) => {
                    return (
                      <option value={dis.value} key={idx}>
                        {dis.label}
                      </option>
                    );
                  })}
                </select>
                <div>{data.discount}</div>
              </div>

              <div>
                <select
                  id="package-category-field"
                  name="category"
                  onChange={categoryChange}
                  value={props.myPackage.category}
                >
                  <option disabled value="default">
                    Category
                      </option>
                  {categories.map((el, idx) => {
                    return (
                      <option value={el.value} key={idx}>
                        {el.label}
                      </option>
                    );
                  })}
                </select>
              </div>

              <div>
                <textarea
                  placeholder="Detail"
                  name="detail"
                  id="package-detail-field"
                  rows="4"
                  style={{ resize: 'none' }}
                  className="pdetail"
                  onChange={detailChange}
                  value={props.myPackage.detail}
                ></textarea>
                 <div>{data.detail}</div>
              </div>
            </div>
          </div>

          <div>
            <div className="subtitle2">Courses</div>
            <div className="coursebox">
              <Courses />
            </div>
          </div>
        </div>
        <div className="center">
          <button id="edit-btn" className="createbutton mgb-5" onClick={() => props.changePage(2)}>
            Edit
          </button>
        </div>
>>>>>>> cf9aef62a90b052c775f64a70db3d471cc10d932
      </div>
			<style jsx>{style}</style>
		</Fragment>
	)
}
export default EditPackage
