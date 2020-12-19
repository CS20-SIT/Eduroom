import { Fragment } from 'react'
import Course from './course'
import style from '../../styles/course/cartStyle'

const Carts = () => {
	return (
		<Fragment>
			<div>
				<Course></Course>
			</div>
			<style jsx>{style}</style>
		</Fragment>
	)
}

export default Carts
