import { Fragment } from 'react'
import GeneralTemplate from '../../../../components/template/general'
import CouponDetail from '../../../../components/coupon/couponDetail'
const coupondetailPage = ({ id }) => {
	return (
		<Fragment>
			<GeneralTemplate>
				<CouponDetail id={id} />
			</GeneralTemplate>
		</Fragment>
	)
}

export async function getServerSideProps(ctx) {
	try {
		const id = ctx.query.id
		return { props: { id } }
	} catch (err) {
		return { props: { id: '' } }
	}
}

export default coupondetailPage
