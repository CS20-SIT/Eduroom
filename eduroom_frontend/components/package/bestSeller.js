import Button from '@material-ui/core/Button'
import React, { Fragment } from 'react'
import style from '../../styles/package/detail'

const bestSeller = () => {
    return (
        <Fragment>
            <div>

                <Button style={{ backgroundColor: '#DED3FF', borderRadius: 24, fontSize: 13, height: '25', marginRight: 20, marginBottom: 10, width: 'auto', padding: 'auto' }}>
                    <img
                        src="/images/package/Tag.svg"
                        style={{ width: 20, height: 20, marginRight: 5 }}
                    />
                    Best Seller</Button>
            </div>
            <style jsx>
                {
                    style
                }
            </style>
        </Fragment>
    )
}
export default bestSeller;
