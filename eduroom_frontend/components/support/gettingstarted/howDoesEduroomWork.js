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
import Studentnav from '../studentsidenav'

const HowDoesEduroomWork = () => {
	const theme = createMuiTheme()
	return (
		<Fragment>
			<Grid container style={{ marginTop: '30px' }}>
				<Grid container>
					<Typography style={{ marginLeft: '20px' }}>
						{' '}
						<h1>How Does Eduroom work?</h1>
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
								<p>
									Udemy's mission is to improve lives through learning. Our global marketplace features an extensive,
									multi-language library, which includes thousands of courses taught by expert instructors. You can take
									courses across a wide range of categories, some of which include: business & entrepreneurship,
									programming, academics, the arts, health & fitness, language, music and much more!
								</p>
								<p>Below are answers to some of the frequently asked questions we receive about how Udemy works.</p>
								<h4>What do Udemy courses include?</h4>
								<p>
									Each Udemy course is created, owned and managed by the instructor(s). The foundation of each Udemy
									course are its lectures, which can include videos, slides, and text. In addition, instructors can add
									resources and various types of practice activities, as a way to enhance the learning experience of
									students.
								</p>
								<p>For tips on how to find courses you may be interested in taking, please click here.</p>
								<h4>How do I take a Udemy course?</h4>
								<p>
									Udemy courses are entirely on-demand. You can begin the course whenever you like, and there are no
									deadlines to complete it.
								</p>
								<p>
									Udemy courses can be accessed from several different devices and platforms, including a desktop,
									laptop, and our mobile app.{' '}
								</p>
								<p>
									After you enroll in a course, you can access it by clicking on the course link you will receive in
									your confirmation email (provided you’re logged into your Udemy account). You can also begin the
									course by logging in and navigating to your My Courses page.
								</p>
								<h4>Do I have to start my Udemy course at a certain time? And how long do I have to complete it?</h4>
								<p>
									As noted above, there are no deadlines to begin or complete the course. Even after you complete the
									course you will continue to have access to it, provided that your account’s in good standing, and
									Udemy continues to have a license to the course.
								</p>
								<p>To learn more about our Lifetime Access policy, please click here.</p>
								<h4>Is Udemy an accredited institution? Do I receive anything after I complete a course?</h4>
								<p>
									While Udemy is not an accredited institution, we offer skills-based courses taught by experts in their
									field, and every approved, paid course features a certificate of completion to document your
									accomplishment.
								</p>
								<h4>Is there any way to preview a course?</h4>
								<p>
									Yes! For steps on how to preview a course, and review key information about it, please click here.
								</p>
								<h4>How can I pay for a course?</h4>
								<p>
									Udemy supports several different payment methods, depending on your account country and location. More
									information on Udemy’s payment methods can be viewed here.
								</p>
								<h4>What if I don’t like a course I purchased?</h4>
								<p>
									We want you to be satisfied, so all eligible courses purchased on Udemy can be refunded within 30
									days. If you are unhappy with a course, you can request a refund, provided the request meets the
									guidelines in our refund policy. For steps on how to request a refund, please click here.
								</p>
								<h4>Where can I go for help?</h4>
								<p>
									If you find you have a question about a paid course while you’re taking it, you can search for answers
									to your question in the Q&A, or ask the instructor.{' '}
								</p>
								<p>
									Our Help Center has extensive information regarding Udemy’s various features, and articles with
									troubleshooting steps to help you quickly resolve any issues you encounter. Our support team is also
									happy to help.{' '}
								</p>
								<p style={{ marginLeft: '630px', marginTop: '50px' }}>
									<Link href="/support/getstart">
										<label style={{ marginRight: '8px' }}>&lt;</label>Getting Started
									</Link>
								</p>
							</Typography>
						</Paper>
					</Grid>

					<Grid item xs={3}>
						<div style={{ marginBottom: theme.spacing(3) }}>
							<Studentnav />
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
export default HowDoesEduroomWork
