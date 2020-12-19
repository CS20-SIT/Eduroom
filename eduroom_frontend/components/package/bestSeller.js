import Button from '@material-ui/core/Button'
import React, { Fragment } from 'react'
import style from '../../styles/package/detail'

const bestSeller = () => {
	return (
		<Fragment>
			<button className="bs">
						<img className="tag" src="../../images/Coupon/Tag.svg" /> 
                        Best Seller
			</button>
			<style jsx>{style}</style>
		</Fragment>
	)
}
export default bestSeller
