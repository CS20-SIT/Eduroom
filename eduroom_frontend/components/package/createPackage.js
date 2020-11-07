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
      <div style={{ backgroundColor: '#f4f5f7' }}>
        <div className="package-header">Create New Package</div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="container">
            <div style={{ padding: '4% 15%' }}>
              <div className="subtitle">Package Information</div>
              <div style={{ display: 'flex' }}>
                <div style={{ width: '50%', marginRight: '5%' }}>
                  <div>
                    <Upload index={0} />
                  </div>
                </div>
                <div style={{ width: '60%' }}>
                  <div>
                    <input
                      type="text"
                      placeholder="Package Name"
                      name="name"
                      id="name"
                      onChange={nameChange}
                      value={props.myPackage.name}
                    ></input>
                  </div>

                  <div>
                    <select
                      name="price"
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
                      placeholder="Package Detail"
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
                <div className="subtitle">Courses</div>
                <div
                  className="coursebox"
                  style={{ overflow: 'auto', height: '400px' }}
                >
                  <div>
                    <Courses />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '5%',
          }}
        >
          <button onClick={() => props.changePage(2)} className="createbutton">
            Create
          </button>
        </div>
      </div>
      <style jsx>{style}</style>
    </Fragment>
  );
};
export default CreatePackage;
