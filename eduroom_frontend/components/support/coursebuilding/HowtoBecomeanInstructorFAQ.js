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

const HowtoBecomeanInstructorFAQ = () => {
	const theme = createMuiTheme()
	return (
		<Fragment>
			<Grid container style={{ marginTop: '30px' }}>
				<Grid container>
					<Typography style={{ marginLeft: '20px' }}>
						{' '}
						<h1>How to Become an Instructor: FAQ</h1>
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
									We’re happy you’re interested in becoming a Udemy instructor. At Udemy you can teach what you know, or
									teach what you love, and millions of students are waiting, eager to learn.
								</p>
								<p>
									Below are answers to the most frequently asked questions we receive regarding how to become an
									instructor.
								</p>
								<h3>Can I teach a course on any topic?</h3>
								<p>
									You are free to choose the topic you wish to teach on Udemy. Please refer to our restricted topic
									list, however, for details on the topics that we do not accept.
								</p>
								<h3>Do I have to pay any fees in order to become an instructor?</h3>
								<p>
									There is no fee to be an instructor on Udemy. Instructors are paid according to a revenue share model
									outlined here. When a student buys your course on our marketplace, revenue is shared between you and
									Udemy, according to our revenue share model.
								</p>
								<h3>What approval do I need to get started?</h3>
								<p>
									No approval is needed to get started. You can start creating your course via this link. Please note,
									in order to create paid courses, you'll need an active PayPal or Payoneer account.
								</p>
								<p>
									Before your course is published on our platform it will need to meet our course minimum requirements,
									which can be viewed here.
								</p>
								<h3>How will I get paid?</h3>
								<p>
									Instructors can connect a PayPal or Payoneer account to their Udemy account. You are paid on a monthly
									basis (more details on our payment schedule for instructors can be read here).
								</p>
								<h3>What’s the general structure of a Udemy course? What is the primary teaching method?</h3>
								<p>
									A standard Udemy course is video-based. Courses must have at least 30 minutes of video content and at
									least 5 lectures or learning modules. Additional teaching tools (like assignments, quizzes, and coding
									exercises, etc) can be added to create a rich learning experience for students.
								</p>
								<p>
									For courses regarding certification preparation, we also offer instructors the ability to create a
									Practice Test course. These courses are comprised solely of practice questions (more info can be
									viewed here).
								</p>
								<h3>Are there any requirements that my course must meet?</h3>
								<p>
									Yes. Courses must have at least 30 minutes of video content and at least 5 lectures or learning
									modules.
								</p>
								<p>
									In order to ensure that students have great learning experiences, we also have a Quality Review
									Process that every course goes through. For more information on this please click here.
								</p>
								<h3>How do I get my course materials on your site?</h3>
								<p>
									Since we function primarily as an on-demand, video-based platform, you’ll need to upload your video
									files directly to Udemy. In other words, students must be able to view your course lectures on the
									Udemy platform.
								</p>
								<p>
									In addition to our standard lecture uploader, we offer the ability to upload materials in bulk or
									import them via Google Drive, Box, Dropbox, and other file storage tools. More information on our bulk
									file uploading options can be viewed here.
								</p>
								<h3>Does Udemy retain exclusive rights to my course if I sell it on your platform?</h3>
								<p>
									No. Our marketplace model means that when you publish a course on our platform, you retain all the
									rights to your content.  You simply grant us a license to host the course and make it available to our
									users, and to advertise your course on our platform and on third party services.  
								</p>
								<p>
									These license terms are outlined in detail in Udemy’s instructor terms. You can also offer your course
									on other services, but we ask that your course is never offered for a lower price than on Udemy. Note
									that if your course is included in the Udemy for Business content collection, per the Promotions
									Policy, there may be additional distribution restrictions.
								</p>
								<h3>Can you tell me more about the existing demand for my course topic on Udemy?</h3>
								<p>
									With our Marketplace Insights tool, we offer robust reporting on student demand, search volume, and
									revenue for a particular topic to help you decide what course to teach. If no data exists for a topic
									you’re searching, it likely means that there’s an opportunity to fill this gap in the Udemy
									marketplace and you should get started right away.
								</p>
								<p>
									While success as an instructor on Udemy is not guaranteed, this tool offers some powerful data to help
									you make your decision.
								</p>
								<h3>Will Udemy promote my course?</h3>
								<p>
									As an instructor, you have the option to enroll in the Udemy Deals Program, which is made up of two
									marketing channels that spotlight your course(s) in different ways. For more information on the
									program, please click here.
								</p>
								<p>
									Enrolling in the Udemy Deals Program gives Udemy the option to promote your course, at a discount.
									Selection for promotion is not guaranteed.
								</p>
								<p>
									In addition, we provide instructors with extensive articles, resources and features at Udemy to help
									you effectively market your course(s). To learn more, please click here.
								</p>
								<h3>Can I teach a course in this language?</h3>
								<p>You can teach a course in any language of your choosing.</p>
								<h3>How do I create a Udemy course?</h3>
								<p>This section includes extensive resources on how you can create a Udemy course and get started.</p>
								<p style={{ marginLeft: '630px', marginTop: '50px' }}>
									<Link href="/support/Course-Building">Course Building</Link>
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
export default HowtoBecomeanInstructorFAQ
