import { Fragment } from 'react'
import Analyze from './analyze'
import Course from './course'
import Grader from './grader'
import Instructor from './instructor'
import Support from './support'
import Advertisement from './advertisement'
import Coupon from './coupon'
import Event from './event'
import Exit from './exit'
import Setting from './setting'
const Icon = ({ type, isHover }) => {
	const hoverMainColor = '#A880F7'
	const hoverSubColor = '#D5C1FC'
	const defaultMainColor = '#F39AC4'
	const defaultSubColor = '#FDECF4'
	const icon = {
		analyze: (
			<Analyze
				mainColor={isHover ? hoverMainColor : defaultMainColor}
				subColor={isHover ? hoverSubColor : defaultSubColor}
			/>
		),
		course: (
			<Course
				mainColor={isHover ? hoverMainColor : defaultMainColor}
				subColor={isHover ? hoverSubColor : defaultSubColor}
			/>
		),
		grader: (
			<Grader
				mainColor={isHover ? hoverMainColor : defaultMainColor}
				subColor={isHover ? hoverSubColor : defaultSubColor}
			/>
		),
		instructor: (
			<Instructor
				mainColor={isHover ? hoverMainColor : defaultMainColor}
				subColor={isHover ? hoverSubColor : defaultSubColor}
			/>
		),
		support: (
			<Support
				mainColor={isHover ? hoverMainColor : defaultMainColor}
				subColor={isHover ? hoverSubColor : defaultSubColor}
			/>
		),
		advertisement: (
			<Advertisement
				mainColor={isHover ? hoverMainColor : defaultMainColor}
				subColor={isHover ? hoverSubColor : defaultSubColor}
			/>
		),
		coupon: (
			<Coupon
				mainColor={isHover ? hoverMainColor : defaultMainColor}
				subColor={isHover ? hoverSubColor : defaultSubColor}
			/>
		),
		event: (
			<Event
				mainColor={isHover ? hoverMainColor : defaultMainColor}
				subColor={isHover ? hoverSubColor : defaultSubColor}
			/>
		),
		exit: (
			<Exit
				mainColor={isHover ? hoverMainColor : defaultMainColor}
				subColor={isHover ? hoverSubColor : defaultSubColor}
			/>
		),
		setting: (
			<Setting
				mainColor={isHover ? hoverMainColor : defaultMainColor}
				subColor={isHover ? hoverSubColor : defaultSubColor}
			/>
		),
	}
	return <Fragment>{icon[type]}</Fragment>
}
export default Icon
