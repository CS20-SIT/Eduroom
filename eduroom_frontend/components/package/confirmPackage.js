import React, { Fragment, useState } from 'react';
import style from '../../styles/package/createpackage';
import Selected from './selectedcourse';
import Dialog from '@material-ui/core/Dialog';
import { useRouter } from 'next/router';
import api from '../../api';

const ConfirmPackage = (props) => {
  const totalPrice = (total) => {
    let price = parseFloat(total*((100-props.myPackage.discount)/100)).toFixed(2);
    return price;
  }
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const [type] = useState('created');
  const handleOpenDialog = (e) => {
    e.preventDefault();
    setOpen(true);
    handleSubmit();
  };

  // const handleCloseDialog = (e) => {
  //   e.preventDefault();
  //   setOpen(false);
  // };
  const handleSubmit = () => {
    console.log(type);
    api
      .post('/api/package/createPackage', {
        name: props.myPackage.name,
        instructorid: '1a9fa554-0c66-4ece-acb4-13a5078aa3b7',
        discount: props.myPackage.discount,
        category: props.myPackage.category,
        detail: props.myPackage.detail,
        courses: props.myPackage.courses,
        ispublic: false
      })
  };

  console.log(props);

  return (
    <Fragment>
      <div>
        <div className="package-header">CONFIRM CREATE</div>
        <div className="container pd-4-15">
          <div className="center">
          <div className="imgconfirm">image</div></div>
          <div className="subtitle uppercase">{props.myPackage.name}</div>
          <div className="price">฿<span>{totalPrice(1000)}</span></div>
          <div className="category">{props.myPackage.category}</div>
          <div className="subtitle">Package Detail</div>
          <div className="detail">{props.myPackage.detail}</div>
          <div className="subtitle">Selected Courses</div>
          <div className="coursebox box-cf">
            <Selected />
          </div>
        </div>
        <div className="cfbutton">
          <div>
            <button className="backbutton" onClick={() => props.changePage(1)}>
              <i className="fas fa-arrow-left"></i>
            </button>
          </div>
          <div style={{ textAlign: 'center' }}>
            <button className="createbutton mgb-10" onClick={handleOpenDialog}>
              Confirm and Create
            </button>
          </div>
          <div></div>

          <Dialog open={open}>
            <div className="dialog">
              <div className="indialog">
                <div className="dialog-buttonX">
                  <button className="buttonX"
                    onClick={() => router.push('/user/instructor/course')}
                  >
                    X
                  </button>
                </div>
                <div>
                  <img
                    src="/images/package/createsuccess.svg"
                    style={{ width: 200, height: 200 }}
                  />
                </div>
                <div className="text-dialog"> Create Package Successful !</div>
              </div>
            </div>
          </Dialog>
        </div>
      </div>
      <style jsx>{style}</style>
    </Fragment>
  )
}
export default ConfirmPackage;
