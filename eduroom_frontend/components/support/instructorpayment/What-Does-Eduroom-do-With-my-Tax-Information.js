import Head from 'next/head'
import { Fragment, useState, useEffect, useContext } from 'react'
import {
	Container,
	Button,
	TextField,
	Grid,
	Typography,
	CssBaseline,
	makeStyles,
	Select,
	MenuItem,
	Paper,
	createMuiTheme,
	ThemeProvider,
	Link,
	fade,
} from '@material-ui/core'
import Instructornav from '../instructorsidenav'

const WhatDoesEduroomdo = () => {
	const theme = createMuiTheme()
	return (
		<Fragment>
			<Grid container style={{ marginTop: '30px' }}>
				<Grid container>
					<Typography style={{ marginLeft: '20px' }}>
						{' '}
						<h1>What Does Eduroom do With my Tax Information (i.e. Withholding)?</h1>
					</Typography>
					<Grid item xs={9} style={{ paddingRight: '100px' }}>
						<Paper
							style={{
								padding: '20px',

								backgroundColor: fade('#ffffff', 0.6),
							}}
						>
							<Typography>
								{' '}
								<h3>What is IRS Withholding?</h3>
								<p>
									Withholding tax is a type of tax on income derived from certain types of earnings sales (in Udemy's
									case, copyright royalties). Withholding is distinct from sales tax, which is paid by the consumer on
									purchase of an item (like a course). Sales tax is charged to students at the point of sale.
									Withholding is calculated at the time of payout.
								</p>
								<h3>
									As a U.S.-based company, Udemy has to follow guidance from the U.S. Internal Revenue Service to
									determine if tax should be withheld from instructors’ monthly payments.
								</h3>
								<h3>
									I’m not from the United States and I pay taxes in my own country, so why does this tax apply to me?
								</h3>
								<p>
									Udemy is based in the United States. All companies based in the US have to comply with IRS (Internal
									Revenue Service) regulations, which include withholding tax from certain types of income paid to
									non-US individuals or entities. 
								</p>
								<p>
									In Udemy's case, we are required to withhold tax from copyright royalties when the student taking the
									course is in the US. This is separate from any tax you owe in your country.
								</p>
								<h3>What will my withholding rate be?</h3>
								<p>
									Generally, IRS withholding only applies to course purchases made by students from the U.S. Your rate
									of withholding will depend on a number of factors, most importantly your country of tax citizenship.
									We can’t tell you exactly what rate of withholding will apply to your Udemy earnings until your form
									is submitted and approved, but when we do begin automatically withholding, you’ll be able to see the
									rate in your revenue report. 
								</p>
								<p>
									If we have your tax form on file, your withholding rate for these purchases will depend on the details
									of your submission, including whether your country has negotiated a tax treaty with the U.S.{' '}
								</p>
								<p>
									For instructors in the U.S. who supply a valid W-9 and are not subject to backup withholding, the rate
									of IRS withholding is 0%.
								</p>
								<h3>What happens if I don’t submit a tax form?</h3>
								<p>
									If we don’t have your tax form on file, we will be required to apply the maximum withholding rate of
									24% for all sales.
								</p>
								<p>
									This might mean that we withhold more from your payouts than the Internal Revenue Service (IRS)
									actually requires. Depending on your circumstances, there may be avenues for instructors to recoup
									funds that were withheld in excess of your legal obligation.
								</p>
								<p>However, promptly submitting a valid tax form is the best way to avoid overwithholding.</p>
								<p style={{ marginLeft: '630px', marginTop: '50px' }}>
									<Link href="/support/Instructor-Payment">Instuctor Payment</Link>
								</p>
							</Typography>
						</Paper>
					</Grid>

					<Grid item xs={3}>
						<div style={{ marginBottom: theme.spacing(3) }}>
							<Instructornav />
						</div>

						<Button
							variant="contained"
							style={{
								backgroundColor: '#FB9CCB',
								marginBottom: theme.spacing(10),
								marginLeft: theme.spacing(8.5),
								marginTop: theme.spacing(1),
							}}
							href="/support/create"
						>
							<label style={{ color: '#ffffff' }}>CONTACT US</label>
						</Button>
					</Grid>
				</Grid>
			</Grid>
		</Fragment>
	)
}
export default WhatDoesEduroomdo
