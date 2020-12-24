import React, { Fragment } from 'react'
import { Button, Grid, Paper } from '@material-ui/core'
import Link from 'next/link'
const StudentSupport = () => {
	return (
		<Fragment>
			<Grid container spacing={7} justify="center">
				<Grid item>
					<Paper style={{ width: '260px', height: '220px', backgroundColor: '#eff0f6' }} elevation={3}>
						<Link href="/support/getstart">
							<Button style={{ width: '260px', height: '220px' }} variant="outlined">
								<Grid container sm={12}>
									<Grid item sm={12}>
										<img
											src="/images/gettingstarted.svg"
											style={{ height: '120px' }}
										/>
										<br></br>
									</Grid>
									<Grid item sm={12}>
										Getting Started
									</Grid>
								</Grid>
							</Button>
						</Link>
					</Paper>
				</Grid>
				<Grid item>
					<Paper style={{ width: '260px', height: '220px', backgroundColor: '#eff0f6' }} elevation={3}>
					<Link href="/support/Account&Profile">
						<Button style={{ width: '260px', height: '220px' }} variant="outlined">
							<Grid container sm={12}>
								<Grid item sm={12}>
									<img
										src="/images/accountandprofile.svg"
										style={{ height: '120px' }}
									/>
									<br></br>
								</Grid>
								<Grid item sm={12}>
									Account/Profile
								</Grid>
							</Grid>
						</Button>
						</Link>
					</Paper>
				</Grid>
				<Grid item>
					<Paper style={{ width: '260px', height: '220px', backgroundColor: '#eff0f6' }} elevation={3}>
					<Link href="/support/Troubleshooting">
						<Button style={{ width: '260px', height: '220px' }} variant="outlined">
							<Grid container sm={12}>
								<Grid item sm={12}>
									<img
										src="/images/troubleshooting.svg"
										style={{ height: '120px' }}
									/>
									<br></br>
								</Grid>
								<Grid item sm={12}>
									Troubleshooting
								</Grid>
							</Grid>
						</Button>
						</Link>
					</Paper>
				</Grid>
			</Grid>
			<Grid container spacing={7} justify="center">
				<Grid item>
					<Paper style={{ width: '260px', height: '220px', backgroundColor: '#eff0f6' }} elevation={3}>
					<Link href="/support/Course-Taking">
						<Button style={{ width: '260px', height: '220px' }} variant="outlined">
							<Grid container sm={12}>
								<Grid item sm={12}>
									<img src="/images/coursetaking.svg"
											style={{ height: '120px' }} />
									<br></br>
								</Grid>
								<Grid item sm={12}>
									Course Taking
								</Grid>
							</Grid>
						</Button>
						</Link>
					</Paper>
				</Grid>
				<Grid item>
					<Paper style={{ width: '260px', height: '220px', backgroundColor: '#eff0f6' }} elevation={3}>
					<Link href="/support/Purchase-Refunds">
						<Button style={{ width: '260px', height: '220px' }} variant="outlined">
							<Grid container sm={12}>
								<Grid item sm={12}>
									<img src="/images/purchaseandrefunds.svg"
											style={{ height: '120px'}} />
									<br></br>
								</Grid>
								<Grid item sm={12}>
									Purchase/Refunds
								</Grid>
							</Grid>
						</Button>
						</Link>
					</Paper>
				</Grid>
				<Grid item>
					<Paper style={{ width: '260px', height: '220px', backgroundColor: '#eff0f6' }} elevation={3}>
					<Link href="/support/Mobile">
						<Button style={{ width: '260px', height: '220px' }} variant="outlined">
							<Grid container sm={12}>
								<Grid item sm={12}>
									<img src="/images/mobile.svg"
											style={{ height: '120px'}} />
									<br></br>
								</Grid>
								<Grid item sm={12}>
									Mobile
								</Grid>
							</Grid>
						</Button>
						</Link>
					</Paper>
				</Grid>
			</Grid>
		</Fragment>
	)
}

export default StudentSupport
