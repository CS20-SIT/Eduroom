import React, { Fragment, useState, useEffect } from 'react'
import style from '../../../styles/advertisement/ads'
import { useRouter } from 'next/router'
import { Link, Typography, InputBase, Paper, Grid, List } from '@material-ui/core'
import Switch from '@material-ui/core/Switch'
import api from '../../../api'
import Table from './couponTable'

const Content = () => {
	const router = useRouter()
	const [data, setData] = useState([])
	const handleChange = (event) => {
		setState({ ...state, [event.target.name]: event.target.checked })
	}
	const [state, setState] = React.useState({
		checkedA: true,
	})
	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await api.get('/api/coupon/getCouponDetail')
				setData(res.data)
			} catch (err) {}
		}
		fetchData()
	}, [])
	const renderTable = () => {
		const arr = data.map((el, idx) => {
			return <Table item={el}></Table>
		})
		return arr
	}
	console.log(data)

	return (
		<div>
			<div
				className="search-coupon"
				style={{ width: '30%', height: '40px', marginLeft: '68%', padding: '0.25% 1% 1% 1% ' }}
			>
				search coupon...
			</div>
			<div className="ad-ad-header" style={{ marginLeft: '40%' }}>
				<h2>Coupon Avaible</h2>
			</div>
			<div className="ad-ad-header">
				<h4>
					<Grid container spacing={3} style={{ backgroundColor: '#EFF0F6' }}>
						<Grid item xs={2}>
							status
						</Grid>
						<Grid item xs={4}>
							Code Name
						</Grid>
						<Grid item xs={4}>
							Code type
						</Grid>
						<Grid item xs={2}>
							Detail
						</Grid>
					</Grid>
				</h4>
			</div>
			<div style={{ overflowX: 'hidden', overflowY: 'auto' }}>{renderTable()}</div>
			<style jsx>{style}</style>
		</div>
	)
}
export default Content
