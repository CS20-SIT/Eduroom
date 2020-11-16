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
											src="https://www.flaticon.com/svg/static/icons/svg/2164/2164598.svg"
											style={{ height: '80px' }}
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
						<Button style={{ width: '260px', height: '220px' }} variant="outlined">
							<Grid container sm={12}>
								<Grid item sm={12}>
									<img
										src="https://www.flaticon.com/svg/static/icons/svg/2521/2521782.svg"
										style={{ height: '80px' }}
									/>
									<br></br>
								</Grid>
								<Grid item sm={12}>
									Account/Profile
								</Grid>
							</Grid>
						</Button>
					</Paper>
				</Grid>
				<Grid item>
					<Paper style={{ width: '260px', height: '220px', backgroundColor: '#eff0f6' }} elevation={3}>
						<Button style={{ width: '260px', height: '220px' }} variant="outlined">
							<Grid container sm={12}>
								<Grid item sm={12}>
									<img
										src="https://www.flaticon.com/svg/static/icons/svg/2920/2920249.svg"
										style={{ height: '80px' }}
									/>
									<br></br>
								</Grid>
								<Grid item sm={12}>
									Troubleshooting
								</Grid>
							</Grid>
						</Button>
					</Paper>
				</Grid>
			</Grid>
			<Grid container spacing={7} justify="center">
				<Grid item>
					<Paper style={{ width: '260px', height: '220px', backgroundColor: '#eff0f6' }} elevation={3}>
						<Button style={{ width: '260px', height: '220px' }} variant="outlined">
							<Grid container sm={12}>
								<Grid item sm={12}>
									<img src="https://www.flaticon.com/svg/static/icons/svg/182/182321.svg" style={{ height: '80px' }} />
									<br></br>
								</Grid>
								<Grid item sm={12}>
									Course Taking
								</Grid>
							</Grid>
						</Button>
					</Paper>
				</Grid>
				<Grid item>
					<Paper style={{ width: '260px', height: '220px', backgroundColor: '#eff0f6' }} elevation={3}>
						<Button style={{ width: '260px', height: '220px' }} variant="outlined">
							<Grid container sm={12}>
								<Grid item sm={12}>
									<img src="https://www.flaticon.com/svg/static/icons/svg/846/846023.svg" style={{ height: '80px' }} />
									<br></br>
								</Grid>
								<Grid item sm={12}>
									Purchase/Refunds
								</Grid>
							</Grid>
						</Button>
					</Paper>
				</Grid>
				<Grid item>
					<Paper style={{ width: '260px', height: '220px', backgroundColor: '#eff0f6' }} elevation={3}>
						<Button style={{ width: '260px', height: '220px' }} variant="outlined">
							<Grid container sm={12}>
								<Grid item sm={12}>
									<img src="https://www.flaticon.com/svg/static/icons/svg/977/977411.svg" style={{ height: '80px' }} />
									<br></br>
								</Grid>
								<Grid item sm={12}>
									Mobile
								</Grid>
							</Grid>
						</Button>
					</Paper>
				</Grid>
			</Grid>
		</Fragment>
	)
}

export default StudentSupport
