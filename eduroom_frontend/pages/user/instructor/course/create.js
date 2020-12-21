import { Fragment, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import api from '../../../../api'
import GeneralNoNav from '../../../../components/template/generalnonav'
import Page1 from '../../../../components/user/instructor/createCourse/Page1'
import Page2 from '../../../../components/user/instructor/createCourse/Page2'
import Page3 from '../../../../components/user/instructor/createCourse/Page3'
import Pagination from '../../../../components/user/instructor/createCourse/Pagination'
import styles from '../../../../styles/user/instructor/createCourse/create'

const create = () => {
	const [page, setPage] = useState(1)
	const [data, setData] = useState({
		name: '',
		picture: '',
		picturePath: '',
		video: '',
		videoPath: '',
		subject: '',
		price: '',
		sections: [],
	})
	const [subjects, setSubjects] = useState([])
	const router = useRouter()
	const handleChange = (e) => {
		data[e.el] = e.data
		setData({ ...data })
	}
	const changeSections = (sections) => {
		data.sections = sections
		setData({ ...data })
	}
	useEffect(() => {
		const fetchData = async () => {
			const res = await api.get('/api/instructor/categories')
			setSubjects(res.data)
		}
		fetchData()
	}, [])
	const renderPage = () => {
		switch (page) {
			case 1:
				return <Page1 data={data} handleData={handleChange} subjects={subjects} setPage={setPage}></Page1>
			case 2:
				return <Page2 sections={data.sections} changeSections={changeSections}></Page2>
			case 3:
				return <Page3></Page3>
		}
	}
	const getInfosPath = async (el, data) => {
		let sections = data.sections
		for (let i = 0; i < sections.length; i++) {
			let section = sections[i]
			for (let j = 0; j < section[el].length; j++) {
				let element = section[el][j].data
				let formData = new FormData()
				formData.append(el, element)
				let res = await api.post(`/api/instructor/upload/${el}`, formData)
				const link = res.data[0].linkUrl
				section[el][j].path = link
			}
			sections[i] = section
		}
		data.sections = sections
		return data
	}
	
	const handleNext = async () => {
		if (page === 3) {
			//upload file to server
			let newData = { ...data }
			const pictureFormData = new FormData()
			pictureFormData.append('course-picture', newData.picture)
			const pictureLink = await api.post('/api/instructor/upload/picture', pictureFormData)
			newData.picturePath = pictureLink.data[0].linkUrl

			const sampleVideoFormData = new FormData()
			sampleVideoFormData.append('course-picture', newData.video)
			let videoLink = await api.post('/api/instructor/upload/sampleVideo', sampleVideoFormData)
			newData.videoPath = videoLink.data[0].linkUrl

			newData = await getInfosPath('videos', newData)
			newData = await getInfosPath('materials', newData)
			console.log('after get path new data is')
			console.log(newData)

			const res = await api.post('/api/instructor/course', newData)
			console.log('res is ', res.data)
			setData({ ...newData })
		} else {
			setPage(page + 1)
		}
	}
	return (
		<Fragment>
			<GeneralNoNav>
				<div className="header">
					<h1 style={{ color: 'white', padding: '10px 30px' }}>Create your course</h1>
				</div>
				<div className="container">
					<div className="box">
						<Pagination currentPage={page}></Pagination>
						{renderPage()}
						<div className="action">
							{page === 1 ? (
								<button className="btn" onClick={() => router.push('/user/instructor')}>
									Back
								</button>
							) : (
								<button className="btn" onClick={() => setPage(page - 1)}>
									Back
								</button>
							)}
							<button className="btn" onClick={handleNext}>
								{page === 3 ? 'Create Course' : 'Next'}
							</button>
						</div>
					</div>
				</div>
			</GeneralNoNav>
			<style jsx>{styles}</style>
		</Fragment>
	)
}

export default create
