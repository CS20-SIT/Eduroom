import { Fragment } from 'react'
import MyCourseForm from './myCourseForm'
import Styles from '../../styles/user/wishlist.module.css'
import GeneralNoNav from '../template/generalnonav'
const MyCourses = (props) => {
	const list = () => {
		const x = props.item.map((item, index) => {
			return (
				<MyCourseForm
					// id={item.id}
					// title={item.title}
					// key={item.id}
					// isCompleted={item.completed}
					// index={index}
					////////////////////
					id={item.courseid}
					title={item.coursename}
					key={item.courseid}
					isCompleted={item.isfinished}
					index={index}
					///
					addtime={item.addtime}
					picture={item.coursepicture}
					ownerF={item.firstname}
					ownerL={item.lastname}
					lastvisit={item.lastvisit}

					// addtime: "2020-04-25T17:38:22.120Z"
					// courseid: "bd318c0b-2d8e-354d-e6d8-093b79d24324"
					// coursename: "Test13"
					// coursepicture: "/images/user/testimage.jpg"
					// firstname: "Jim"
					// isfinished: true
					// lastname: "my"
					// lastvisit: "2020-09-22T04:55:14.526Z"
					// userid: "08e9d239-b3f2-4db8-b29a-da99a314df92"
				></MyCourseForm>
			)
		})
		return x
	}
	return (
		<Fragment>
			{/* <GeneralNoNav> */}
			<div className={Styles.div}>{list()}</div>
			{/* </GeneralNoNav> */}
		</Fragment>
	)
}
export default MyCourses
