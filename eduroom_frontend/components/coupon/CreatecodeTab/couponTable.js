import { Grid, Link } from '@material-ui/core'
import { useState, useEffect } from 'react'
import Switch from '@material-ui/core/Switch'
import api from '../../../api'

const temp = ({ item }) => {
	const [data, setData] = useState([])
	const handleChange = (event) => {
		try {
			setVisibility({ ...visibility, [event.target.name]: event.target.checked })
			const res = api.get('/api/coupon/updateStatus', { params: { id: item.ccid, boo: !visibility.checkedA } })
			setData(res.data)
		} catch (err) {}
	}
	const [visibility, setVisibility] = useState({
		checkedA: item.isvisible,
	})

	return (
		<div>
			<Grid container spacing={3} style={{ margin: '-2% 0% 0% 1%' }}>
				<Grid item xs={2}>
					<div>
						<Switch
							checked={visibility.checkedA}
							onChange={handleChange}
							name="checkedA"
							color="primary"
							inputProps={{ 'aria-label': 'primary checkbox' }}
						/>
					</div>
				</Grid>
				<Grid item xs={4}>
					{item.ccname}
				</Grid>
				<Grid item xs={4}>
					{item.coinUse > 0 ? 'Public' : item.codelimit == -1 ? 'Limited public' : 'Private'}
				</Grid>
				<Grid item xs={2} style={{ marginLeft: '-1.5%' }}>
					<Link href={`../../admin/coupon/couponDetail/${item.ccid}`}>see detail..</Link>
				</Grid>
			</Grid>
		</div>
	)
}
export default temp
