import { Fragment, useEffect, useState } from 'react'
import style from '../../../styles/course/paymentPage'
import Button from '@material-ui/core/Button'
import DialogTitle from '@material-ui/core/DialogTitle'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import { useRouter } from 'next/router'
import api from '../../../api'
const creditBox = (props) => {
	const router = useRouter()
	const [open, setOpen] = useState(false)
	const [type, setType] = useState('credit')

	const handleOpenDialog = (e) => {
		console.log('createForm.month', createForm.month)
		console.log('createForm.year', createForm.year)
		console.log('createForm.name', createForm.name)

		e.preventDefault()
		if (
			createForm.cardNum.length == 12 &&
			createForm.month != null &&
			createForm.year != null &&
			createForm.secure.length == 4 &&
			createForm.name != null
		) {
			setOpen(true)
			handleSubmit()
		} else {
			checkCreditCardDetail()
		}
	}
	const handleCloseDialog = (e) => {
		e.preventDefault()
		setOpen(false)
	}
	const handleSubmit = async () => {
		try {
			const body = {
				adlist: props.data,
			}
			const response = await api.post('/api/ads/AddAdsTransaction', body)
			router.push('/advertisement/adpayment/adconfirmpayment')
		} catch (err) {}
	}
	useEffect(() => {
		console.log(type)
	}, [type])

	const [createForm, setForm] = useState({
		name: '',
		cardNum: '',
		secure: '',
		month: '',
		year: '',
	})
	const checkCreditCardDetail = () => {
		if (createForm.cardNum.length != 12) {
			alert('Please check your card number')
		}
		if (createForm.secure.length != 4) {
			alert('Please check your secure number')
		}
		if (createForm.name == null) {
			alert('Please enter your name')
		}
		if (createForm.month == null) {
			alert('Please enter month')
		}
		if (createForm.year == null) {
			alert('Please enter year')
		}
	}
	const handleChange = (e) => {
		e.preventDefault()
		setForm({ ...createForm, [e.target.name]: e.target.value })
	}
	const handleChangeMonth = (e) => {
		e.preventDefault()
		setForm({ ...createForm, [e.target.month]: e.target.value })
	}

	return (
		<Fragment>
			<div className="purplebox">
				<div className="inner-purple">
					<div className="input-name">
						{' '}
						<input
							type="text"
							className="input-text"
							placeholder="Your name on card"
							style={{ borderRadius: 10, border: 'none', paddingLeft: '16px' }}
							name="name"
							type={'text'}
							value={createForm.name}
							onChange={handleChange}
						/>
					</div>
					<div className="input-name">
						{' '}
						<input
							type="text"
							className="input-text"
							placeholder="Your card number"
							style={{ borderRadius: 10, border: 'none', paddingLeft: '16px' }}
							name="cardNum"
							type={'text'}
							value={createForm.cardNum}
							onChange={handleChange}
						/>
					</div>
					<div className="input-name">
						<div style={{ width: '25%', marginRight: '1.5%' }}>
							<select className="input-text" style={{ cursor: 'pointer', paddingLeft: '5px' }}>
								<option value={createForm.month} onChange={handleChangeMonth} disabled selected>
									MM
								</option>
								<option>01</option>
								<option>02</option>
								<option>03</option>
								<option>04</option>
								<option>05</option>
								<option>06</option>
								<option>07</option>
								<option>08</option>
								<option>09</option>
								<option>10</option>
								<option>11</option>
								<option>12</option>
							</select>
						</div>
						<div style={{ width: '25%', margin: '0% 1.5%' }}>
							<select className="input-text" style={{ cursor: 'pointer', paddingLeft: '5px' }}>
								<option value="year" disabled selected>
									YY
								</option>
								<option>20</option>
								<option>21</option>
								<option>22</option>
								<option>23</option>
								<option>24</option>
								<option>25</option>
								<option>26</option>
								<option>27</option>
								<option>28</option>
								<option>29</option>
								<option>30</option>
								<option>31</option>
								<option>32</option>
								<option>33</option>
								<option>34</option>
								<option>35</option>
								<option>36</option>
								<option>37</option>
								<option>38</option>
								<option>39</option>
								<option>40</option>
							</select>
						</div>
						<div style={{ width: '50%', marginLeft: '1.5%' }}>
							<input
								type="text"
								className="input-text"
								placeholder="Security Code"
								style={{
									borderRadius: 10,
									border: 'none',
									paddingLeft: '16px',
								}}
								name="secure"
								type={'text'}
								value={createForm.secure}
								onChange={handleChange}
							/>
						</div>
					</div>
				</div>

				<div
					style={{
						display: 'flex',
						justifyContent: 'flex-start',
						paddingRight: 150,
						flexDirection: 'row',
					}}
				>
					<img
						src="/images/package/newLock.svg"
						className="google-logo"
						style={{ width: 35, height: 35, marginRight: 2, marginLeft: 30 }}
					/>
					<div style={{ color: '#5B5B5B' }} className="col-6">
						Secure<br></br>Connection
					</div>

					<div className="col-6" style={{ marginLeft: 70 }}>
						<div className="compay">
							<Button
								variant="contained"
								style={{
									backgroundColor: '#FB9CCB',
									color: 'white',
									borderRadius: 24,
									width: 180,
									height: 30,
								}}
								onClick={handleOpenDialog}
								// onClick={() => checkCreditCardDetail(),handleOpenDialog()}
							>
								Complete Payment
							</Button>

							<Dialog open={open} onClose={handleCloseDialog}>
								<div>
									<div
										style={{
											backgroundColor: 'white',
											border: '5px solid #F2ECFE',
										}}
									>
										<DialogTitle style={{ textAlign: 'center' }}>
											<div
												style={{
													fontSize: '2em',
													color: '#A880F7',
													fontWeight: 700,
													marginTop: 20,
												}}
											>
												PURECHASED!
											</div>
										</DialogTitle>

										<DialogContent
											style={{
												width: '450px',
												height: '400px',
												display: 'flex',
												justifyContent: 'center',
											}}
										>
											<img
												src="/images/package/purchesed.svg"
												className="google-logo"
												style={{ width: 350, height: 350 }}
											/>
										</DialogContent>

										<div
											style={{
												display: 'flex',
												justifyContent: 'center',
												paddingBottom: 30,
											}}
										>
											<div
												style={{
													display: 'flex',
													justifyContent: 'center',
													paddingBottom: 30,
												}}
											>
												<Button
													variant="contained"
													style={{
														backgroundColor: '#FB9CCB',
														color: 'white',
														borderRadius: 24,
														width: 200,
														height: 40,
													}}
													onClick={() => router.push('/course')}
												>
													Go to course
												</Button>
											</div>
										</div>
									</div>
								</div>
							</Dialog>
						</div>
					</div>
				</div>
			</div>

			<style jsx>{style}</style>
		</Fragment>
	)
}
export default creditBox
