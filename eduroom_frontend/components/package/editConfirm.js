import React, { Fragment, useState } from 'react';
import style from '../../styles/package/createpackage';
import Selected from './selectedcourse';
import Dialog from '@material-ui/core/Dialog';
import { useRouter } from 'next/router';
import api from '../../api';

const EditConfirm = (props) => {
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
        // api
        //   .post('/api/package/createPackage', {
        //     name: props.myPackage.name,
        //     discount: props.myPackage.discount,
        //     category: props.myPackage.category,
        //     detail: props.myPackage.detail,
        //     courses: props.myPackage.courses
        //   })
    };

    console.log(props);

    return (
        <Fragment>
            <div>
                <div className="package-header">CONFIRM EDIT</div>
                <div className="container pd-4-15">
                    <div className="center">
                        <div className="imgconfirm">image</div></div>
                    <div className="subtitle uppercase">{props.myPackage.name}</div>
                    <div className="price">฿<span>Price</span></div>
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
                        <button id="back-btn" className="backbutton" onClick={() => props.changePage(1)}>
                            <i className="fas fa-arrow-left"></i>
                        </button>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <button id="confirm-edit-btn" className="createbutton mgb-10" onClick={handleOpenDialog}>
                            Confirm and Update
            </button>
                    </div>
                    <div></div>

                    <Dialog open={open}>
                        <div className="dialog">
                            <div className="indialog">
                                <div className="right">
                                    <button id="close-btn" className="buttonX" onClick={() => router.push("/user/instructor/course")}>X</button>
                                </div>
                                <div><img
                                    src="/images/package/edited.svg"
                                    style={{ width: 200, height: 200 }}
                                />
                                </div>

                                <div className="text-dialog">Your package is already updated !</div>
                            </div>
                        </div>
                    </Dialog>
                </div>
            </div>
            <style jsx>{style}</style>
        </Fragment>
    )
}
export default EditConfirm;
