import React, { Fragment } from 'react'
import Analyze from './analyze'
import Course from './course'
import Grader from './grader'
import Instructor from './instructor'
import Support from './support'
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
        
	}
	return <Fragment>{icon[type]}</Fragment>
}
export default Icon
