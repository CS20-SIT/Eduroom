import { Fragment, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import api from '../../../../api'
import GeneralNoNav from '../../../../components/template/generalnonav'
import Page1 from '../../../../components/user/instructor/createCourse/Page1'
import Page2 from '../../../../components/user/instructor/createCourse/Page2'
import Page3 from '../../../../components/user/instructor/createCourse/Page3'
import Pagination from '../../../../components/user/instructor/createCourse/Pagination'
import styles from '../../../../styles/user/instructor/createCourse/create';

const create = () => {
	const [page, setPage] = useState(1)
	const [data, setData] = useState({
		name: '',
		picture: '',
		picturePath: '',
		video: '',
		videoPath: '',
		subject: '',
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
	useEffect(() => {
		// console.log('data is')
		// console.log(data)
	}, [data])
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
	const handleNext = async () => {
		if (page === 3) {
			//upload file to server
			const pictureFormData = new FormData();
			pictureFormData.append('course-picture',data.picture);
			const pictureLink = await api.post('/api/instructor/upload/picture', pictureFormData)
			data.picturePath = pictureLink.data.linkUrl;

			const sampleVideoFormData = new FormData();
			sampleVideoFormData.append('course-picture',data.video);
			let videoLink = await api.post('/api/instructor/upload/sampleVideo', sampleVideoFormData)
			data.videoPath = videoLink.data.linkUrl;

			console.log('data is')
			console.log(data)
			setData({ ...data });
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
