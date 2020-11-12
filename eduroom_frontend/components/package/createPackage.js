import React, { Fragment, useState } from 'react';
import Upload from './imageupload';
import Courses from './courses';
import style from '../../styles/package/createpackage';

const CreatePackage = (props) => {
  const numDiscount = [5, 10, 20, 30, 40, 50, 60, 70];
  const discount = numDiscount.map((num) => {
    return { label: num + '%', value: num };
  });
  const discountChange = (e) => {
    props.setMyPackage({
      ...props.myPackage,
      discount: parseInt(e.target.value),
    });
  };
  const categories = [
    { value: 'business', label: 'Business' },
    { value: 'development', label: 'Development' },
    { value: 'software', label: 'IT+Software' },
    { value: 'design', label: 'Design' },
    { value: 'computer', label: 'Computer' },
  ];
  const categoryChange = (e) => {
    props.setMyPackage({ ...props.myPackage, category: e.target.value });
  };
  const nameChange = (e) => {
    props.setMyPackage({ ...props.myPackage, name: e.target.value });
  };
  const detailChange = (e) => {
    props.setMyPackage({ ...props.myPackage, detail: e.target.value });
  };
  
  return (
    <Fragment>
      <div >
        <div className="package-header">CREATE NEW PACKAGE</div>
        <div className="container pd-4-15">
          <div className="subtitle mg-40">PACKAGE INFORMATION</div>
          <div style={{ display: 'flex' }}>
            <div className="img-upload">
              <Upload index={0} />
            </div>

            <div style={{ width: '60%' }}>
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  id="name"
                  onChange={nameChange}
                  value={props.myPackage.name}
                ></input>
              </div>

              <div>
                <select
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
              </div>

              <div>
                <select
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
                  id="pdetail"
                  rows="4"
                  style={{ resize: 'none' }}
                  className="pdetail"
                  onChange={detailChange}
                  value={props.myPackage.detail}
                ></textarea>
              </div>
            </div>
          </div>

          <div>
            <div className="subtitle bold">Courses</div>
            <div className="coursebox">
              <Courses />
            </div>
          </div>
        </div>
        <div className="center">
          <button className="createbutton mgb-5" onClick={() => props.changePage(2)}>
            Create
          </button>
        </div>
      </div>
      <style jsx>{style}</style>
    </Fragment>
  );
};
export default CreatePackage;
