import { Fragment, useState } from 'react'
import EdquizPagination from './edqizPagination'
import style from '../../styles/edqiz/managePage'
import InputText from '../utils/InputText'
const Page1 = ({ goto, name, change }) => {
	const [error, setError] = useState(false)
	const handleGo = (val) => {
		if (val != 1) {
			if (name == '') {
				setError(true)
			} else {
				goto(val)
			}
		}
	}
	const handleChange = (e) => {
		if (e.target.value != '') {
			setError(false)
		}
		change(e.target.value)
	}
	return (
		<Fragment>
			<div className="col-12">
				<div className="row">
					<EdquizPagination current={1} goto={handleGo} />
				</div>
			</div>
			<div className="col-12">
				<div className="row row-content">
					<div className="col-12">
						<p className="edqiz-manage-header">QUIZ NAME</p>
					</div>
					<div className="col-12">
						<span className="navy-text">let's start by giving the quiz a name</span>
					</div>
					<div className="col-12 cflex">
						<div className="w-300">
							<InputText
								type="text"
								placeholder="QUIZ NAME . . ."
								handleChange={handleChange}
								error={error}
								errorText="Quiz name is Required"
								value={name}
								style={{ padding: '5%' }}
							/>
						</div>
					</div>
					<div className="col-12">
						<button
							className="edqiz-manage-button purple big-button"
							onClick={() => {
								handleGo(2)
							}}
						>
							<span className="edqiz-manage-button-text">GO!</span>
						</button>
					</div>
				</div>
			</div>
			<style jsx>{style}</style>
		</Fragment>
	)
}
export default Page1
