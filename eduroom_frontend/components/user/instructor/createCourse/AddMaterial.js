import { Fragment } from 'react'
import style from '../../../../styles/user/instructor/createCourse/create'

const AddMaterial = (props) => {
	return (
		<Fragment>
			<div className="addMaterialContainer" onClick={props.addMaterial}>
				<div className="circle">
					<div className="plus">+</div>
				</div>
				<div>
					<p style={{ margin: '5px 0 0 0', color: '#3d467f' }}>Add your material</p>
				</div>
			</div>
			<style jsx>{style}</style>
		</Fragment>
	)
}

export default AddMaterial
