import Head from 'next/head'
import React, { Fragment, useState } from 'react'
import { Button, Grid, makeStyles, Link,Typography } from '@material-ui/core'
import General from '../../components/template/general'
import StudentSupport from '../support/studentSupport'
import InstructorSupport from '../support/InstructorSupport'
import create from '../../pages/support/getstart'

const SupportPage = () => {
	const ResultsStudent = () => (
		<div id="results" className="search-results">
			Student Result
		</div>
	)
	const ResultsInstructor = () => (
		<div id="results" className="search-results">
			Instuctor Result
		</div>
	)
	const [showResultsStudent, setShowResultsStudent] = useState(false)
	const onClickStudent = () => {
		setShowResultsStudent(true)
		setShowResultsInstructor(false)
	}
	const [showResultsInstructor, setShowResultsInstructor] = useState(false)
	const onClickInstructor = () => {
		setShowResultsInstructor(true)
		setShowResultsStudent(false)
	}
	return (
		<Fragment>
			<General>

				<img src="/images/HowCanWeHelpYou.svg" style={{ height: '100%'}}></img>
				<div>
					<Grid container spacing={2} style={{marginTop:'3%'}}>
						<Grid item sm={12}>
							<Grid container justify="center" spacing={4}>
								<Grid item>
									<Button value="Search" onClick={onClickStudent} style={{ width: '200px', height: '60px' }}>
										<h2>Student</h2>
									</Button>
								</Grid>
								<Grid item>
									<Button value="Search" onClick={onClickInstructor} style={{ width: '200px', height: '60px' }}>
										<h2>Instructor</h2>
									</Button>
								</Grid>
								
							</Grid>
							<Grid item sm={12}><Typography style={{marginLeft:'18%',marginBottom:'2%',marginTop:'3%'}}><h2>Select a topic to search for help</h2></Typography></Grid>
							{showResultsInstructor ? <InstructorSupport /> : <StudentSupport />}</Grid>
							<Typography style={{marginLeft:'60%',marginBottom:'2%',marginTop:'3%'}}><h2>or you can</h2></Typography>
						<Button variant='contained' style={{ backgroundColor: '#FB9CCB',height:'8%',width:'11%',marginTop:'4.5%',marginLeft:'2%'}} href="/support/create"><label style={{ color: '#ffffff' }}>CONTACT US</label></Button>
					</Grid>
				</div>
			</General>
		</Fragment>
	)
}

export default SupportPage
