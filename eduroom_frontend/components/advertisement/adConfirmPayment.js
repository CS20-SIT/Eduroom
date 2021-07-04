import { Fragment, useState, useEffect, forwardRef } from 'react'
import style from '../../styles/advertisement/ads'
import {
	Button,
	withStyles,
	InputBase,
	Slide,
	DialogTitle,
	DialogContentText,
	DialogContent,
	DialogActions,
	Paper,
	Grid,
	Dialog,
	Link,
} from '@material-ui/core'
import General from '../template/general'
import { makeStyles } from '@material-ui/core/styles'
import { useRouter } from 'next/router'
import { pink } from '@material-ui/core/colors'
import Radio from '@material-ui/core/Radio'
import Checkout from './adPaymentDetail'

const PinkRadio = withStyles({
	root: {
		color: [pink][100],
		'&$checked': {
			color: pink[300],
		},
	},
	checked: {},
})((props) => <Radio color="default" {...props} />)

import api from '../../api'
const BootstrapInput = withStyles((theme) => ({
	root: {
		'label + &': {
			marginTop: theme.spacing(3),
		},
	},
	input: {
		borderRadius: 0,
		position: 'relative',
		backgroundColor: theme.palette.background.paper,
		border: '0px solid #ced4da',
		fontSize: 16,
		padding: '10px 26px 10px 12px',
		transition: theme.transitions.create(['border-color', 'box-shadow']),
		// Use the system font instead of the default Roboto font.
		fontFamily: [
			'-apple-system',
			'BlinkMacSystemFont',
			'"Segoe UI"',
			'Roboto',
			'"Helvetica Neue"',
			'Arial',
			'sans-serif',
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		].join(','),
		'&:focus': {
			borderRadius: 0,
		},
	},
}))(InputBase)

const useStyles = makeStyles({
	root: {
		minWidth: 275,
	},
	bullet: {
		display: 'inline-block',
		margin: '0 2px',
		transform: 'scale(0.8)',
	},
	title: {
		fontSize: 14,
	},
	pos: {
		marginBottom: 12,
	},
})

const Transition = forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />
})
const Total = (props) => {
	const router = useRouter()
	const handleSubmit = async () => {
		try {
			const body = {
				adlist: props.listads,
			}
			const response = await api.post('/api/ads/AddNewAdsBills', body)
			console.log('Ho' + response)
			router.push('/advertisement/adpayment/adconfirmpayment')
		} catch (err) {}
	}
	return (
		<div>
			<Paper
				style={{
					margin: '5% 5% 5% 25%',
					height: '150px',
					width: '45%',
					padding: '17px',
					paddingTop: '15px',
					position: 'relative',
					background: 'rgba(255, 255, 255, 0.7)',
					borderRadius: '10px',
				}}
			>
				<Grid container spacing={'2'}>
					<Grid item xs={'1'}>
						<a className="ad-owner">Total:</a>
					</Grid>
					<Grid item xs={'3'}>
						<a className="ad-id">฿{props.totalPrice}</a>
					</Grid>
				</Grid>
				<br></br>
				<Grid container spacing={'2'}>
					<Grid item xs={4}>
						<a className="ad-description">Numbers of ads: {props.numberOfads}</a>
					</Grid>
					<Grid item xs style={{ marginLeft: '40%' }}>
						<button className="ad-check-out-button" onClick={handleSubmit}>
							<a className="ad-check-out-button-text">Check Out</a>
						</button>
					</Grid>
				</Grid>
			</Paper>
			<style jsx>{style}</style>
		</div>
	)
}
const Box = (props) => {
	const [open, setOpen] = useState(false)
	const handleClickOpen = () => {
		setOpen(true)
	}

	const handleClose = () => {
		setOpen(false)
	}
	const handleSubmit = async () => {
		const body = {
			adid: props.adid,
		}
		try {
			const response = await api.post('/api/ads/deleteAds', body)
			console.log(response)
			handleClose()
			window.location.reload(false)
			window.scrollTo(0, 0)
		} catch (err) {}
	}
	return (
		<div>
			<Paper
				style={{
					margin: '2% 5% 3% 10%',
					height: '150px',
					width: '80%',
					padding: '17px',
					paddingTop: '15px',
					borderRadius: '10px',
				}}
			>
				<Grid container spacing={'2'}>
					<Grid item>
						<div style={{ height: '120px', width: '120px', marginLeft: '2%' }}>
							<img style={{ height: '100%', width: '100%' }} src={props.img}></img>
						</div>
					</Grid>
					<Grid item xs={'4'}>
						<a className="ad-id">Advertisement ID#{props.adid}</a>
						<br></br>
						<a className="ad-owner">
							by {props.firstname} {props.lastname}
						</a>
						<br></br>
						<a className="ad-description">
							StartDate: {props.adstarttime.substring(0, 10)} EndDate: {props.adexpiretime.substring(0, 10)}
						</a>
					</Grid>
					<Grid item xs style={{ marginLeft: '10%' }}>
						<button className="ad-remove-button" onClick={handleClickOpen}>
							<a className="ad-button-text">Remove</a>
						</button>
					</Grid>
					<Grid item xs style={{ marginLeft: '10%' }}>
						<a className="ad-price">฿{props.price}</a>
					</Grid>
				</Grid>
			</Paper>
			<Dialog
				open={open}
				TransitionComponent={Transition}
				keepMounted
				onClose={handleClose}
				aria-labelledby="alert-dialog-slide-title"
				aria-describedby="alert-dialog-slide-description"
			>
				<DialogTitle>
					<center>
						<a className="ad-id">Warning !</a>
						<br></br>
					</center>
				</DialogTitle>
				<DialogContent>
					<DialogContentText className="ad-dialog-topic">
						<b>Your ads will be permanently deleted.</b>
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<button className="ad-delete-confirm-button" onClick={handleSubmit}>
						<a className="ad-button-text">Confirm</a>
					</button>
					<button className="ad-cancle-button" onClick={handleClose}>
						<a className="ad-button-text">Cancle</a>
					</button>
				</DialogActions>
			</Dialog>
			<style jsx>{style}</style>
		</div>
	)
}
const Content = () => {
	return (
		<Fragment>
			<General>
				<Checkout />
			</General>
		</Fragment>
	)
}
export default Content
