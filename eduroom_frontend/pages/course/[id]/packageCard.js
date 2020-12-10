import React, { Fragment, useState, useEffect } from 'react';
import ProductPackage from '../../../components/package/packageStore';
import Styles from '../../../styles/package/test';
import General from '../../../components/template/general';

const packages = () => {
    const [show, setShow] = useState(false);
    return (
        <Fragment>
            <General>
                    <div className={Styles.img3}>
                        <div>
                            <ProductPackage></ProductPackage>
                        </div>
                    </div>
            </General>
            <style jsx>
                {
                    Styles
                }
            </style>
        </Fragment>
    );
};
export default packages;

