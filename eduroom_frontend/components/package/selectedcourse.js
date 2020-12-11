import Courselist from './courselist'
import style from '../../styles/package/createpackage'
const Selected = () => {
	return (
		<div style={{ alignItems: 'center' }}>
			<div className="list">
				<div className="courseno">
					course
					<br />1
				</div>
				{/* <Courselist name="course1"></Courselist> */}
			</div>

			<style jsx>{style}</style>
		</div>
	)
}
export default Selected
