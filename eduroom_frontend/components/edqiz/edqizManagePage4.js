import { Fragment, useState, useEffect } from 'react'
import EdquizPagination from './edqizPagination'
import style from '../../styles/edqiz/managePage'
import InputText from '../utils/InputText'
import api from '../../api'
const Page4 = ({ goto, description, image, changeDescription, changeImage, questionList, name }) => {
	const [data, setData] = useState({
		name: '',
		picture: '',
		picturePath: '',
		video: '',
		videoPath: '',
		subject: '',
		sections: [],
	})
	console.log('questionList', questionList)
	console.log('name', name)
	console.log('description', description)

	const handleDonePicture = async () => {
		const pictureFormData = new FormData()
		for (let i = 0; i < questionList.length; i++) {
			pictureFormData.append('edqiz-question', questionList[i].image)
			console.log('complete append')
		}

		try {
			const pictureLink = await api.post('/api/kahoot/upload/picture', pictureFormData)
			return pictureLink.data
		} catch (err) {}
		return ''
	}
	const handleSubmit = async () => {
		try {
			const picturepath = await handleDonePicture()
			let body = { name: name, description: description, questionList: questionList, picturepath: picturepath }
			const res = await api.post('/api/kahoot/createQuiz', body)
		} catch (err) {}
	}
	useEffect(() => {
		if (image) {
			var reader = new FileReader()
			reader.onload = function (e) {
				document.getElementById('cover-image').src = e.target.result
			}
			reader.readAsDataURL(image)
		}
	}, [])
	const handleChange = (e) => {
		changeDescription(e.target.value)
	}

	return (
		<Fragment>
			<div className="col-12">
				<div className="row">
					<EdquizPagination current={3} goto={goto} />
				</div>
			</div>
			<div className="col-12">
				<div className="row row-content">
					<Fragment>
						<div className="col-12">
							<p className="edqiz-manage-header">Description</p>
							<p className="">Give your quiz a description</p>
						</div>

						<div className="col-12 cflex">
							<div className="w-600">
								<InputText
									placeholder="Description"
									value={description}
									style={{ padding: '3%', margin: '0% 0% 2% 0%' }}
									handleChange={handleChange}
								/>
							</div>
						</div>
						<div className="col-12">
							<button
								className="edqiz-manage-button purple big-button"
								onClick={async () => {
									goto(5), handleSubmit()
								}}
							>
								<span className="edqiz-manage-button-text">Done</span>
							</button>
						</div>
					</Fragment>
				</div>
			</div>
			<style jsx>{style}</style>
		</Fragment>
	)
}
export default Page4
