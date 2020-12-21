import React, { Fragment } from 'react'
import GeneralTemplate from '../components/template/general'
import LandingContent from '../components/landing/content'
import Package from '../components/package/packageStore'
import Course from '../components/course/courseStore'
import Styles from '../styles/course/cShop'
const Home = () => {
	return (
		<Fragment>
			<GeneralTemplate>
				<LandingContent />
			</GeneralTemplate>
			<div className="BG">
			<Course/>
			<Package/>
			</div>
			<style jsx>{Styles}</style>
		</Fragment>
	)
}
export default Home
