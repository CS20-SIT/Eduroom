import Button from '@material-ui/core/Button'
import React, { Fragment } from 'react'
import style from '../../styles/package/detail'

const bestSeller = () => {
    return (
        <Fragment>
            <div>

                <Button style={{ backgroundColor: '#DED3FF', borderRadius: 24, fontSize: 12, margin: '10 20', fontWeight: 650, color:'#2A00A2' }}>
                    <img
                        src="/images/package/Tag.svg"
                        style={{ width: 20, height: 20, marginRight: 5, padding: '0px 0px 2px 0px' }}
                    />
                    Best Seller
                </Button>
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
