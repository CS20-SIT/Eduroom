import { Fragment, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import api from '../../../../api'
import GeneralNoNav from '../../../../components/template/generalnonav'
import Page1 from '../../../../components/user/instructor/createCourse/Page1'
import Page2 from '../../../../components/user/instructor/createCourse/Page2'
import Page3 from '../../../../components/user/instructor/createCourse/Page3'
import Pagination from '../../../../components/user/instructor/createCourse/Pagination'
const create = () => {
	const [page, setPage] = useState(1)
	const [data, setData] = useState({ name: '', picture: '', video: '', subject: '', sections: [] })
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
			const res = await api.post('/api/instructor/course', data)
			console.log(res.data)
			console.log('data is');
			console.log(data);
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
			<style jsx>{`
				.header {
					position: absolute;
					top: 0;
					width: 100%;
					height: 130px;
					background: linear-gradient(323.28deg, rgba(213, 138, 187, 0.8) 0.2%, rgba(129, 127, 188, 0.8) 99.77%);
				}
				.container {
					margin-top: 150px;
					display: flex;
					justify-content: center;
					align-items: center;
				}
				.box {
					background: rgba(255, 255, 255, 0.9);
					box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 2px 15px rgba(0, 0, 0, 0.2);
					border-radius: 10px;
					padding: 50px;
					width: 75%;
					margin-bottom: 100px;
				}
				.action {
					margin-top: 50px;
					display: flex;
					justify-content: flex-end;
				}
				.btn {
					margin-left: 20px;
					border: 2px solid #f39ac4;
					color: #f39ac4;
					font-size: 16px;
					box-sizing: border-box;
					border-radius: 30px;
					background-color: white;
					padding: 6px 25px;
					opacity: 1;
					transition: 0.25s;
				}
				.btn:hover {
					cursor: pointer;
					opacity: 0.75;
					transition: 0.25s;
				}
			`}</style>
		</Fragment>
	)
}

export default create
