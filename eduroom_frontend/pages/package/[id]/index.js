import { Fragment, useEffect, useState } from 'react'
import General from '../../../components/template/general'
import PackageHead from '../../../components/package/packageHead'
import PackageDetail from '../../../components/package/packageDetail'
import style from '../../../styles/package/detail'
import api from '../../../api'

const Package = (props) => {
	const [packages, setPackages] = useState(null)
	const [courseCount, setCourseCount] = useState(0)
	const [courseList, serCourseList] = useState([])
	const [instructorList, setInstructorList] = useState([])
	useEffect(() => {
		getPackage()
	}, [])
	const getPackage = async () => {
		try {
			const result = await api.get(`/api/package/getPackage?packageid=${props.id}`)
			setPackages(result.data.packages)
			setCourseCount(result.data.courseCount)
			serCourseList(result.data.courseList)
			setInstructorList(result.data.instructorList)
		} catch (err) {}
	}
	const renderPage = () => {
		if (!packages) return null
		return (
			<Fragment>
				<div style={{ marginBottom: 30 }}>
					<PackageHead packages={packages} courseCount={courseCount} />
				</div>
				<div>
					<PackageDetail packages={packages} courseList={courseList} instructorList={instructorList} />
				</div>
				<style jsx>{style}</style>
			</Fragment>
		)
	}
	return (
		<Fragment>
			<General>{renderPage()}</General>
			<style jsx>{style}</style>
		</Fragment>
	)
}

export async function getServerSideProps(ctx) {
	try {
		const id = ctx.query.id
		return { props: { id } }
	} catch (err) {
		return { props: { id: '' } }
	}
}
export default Package
