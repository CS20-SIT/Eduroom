import { Fragment, useEffect } from 'react'
import Pagination from './pagination'
import Styles from '../../styles/package/paginations'

const Paginations = ({ numCourses, page, setPage }) => {
	console.log(numCourses)

	const renderCenter = () => {
		const mx = 3
		const numPage = Math.ceil(numCourses / mx)
		const arr = []
		for (let i = page; i <= page + 2; i++) {
      arr.push(<Pagination page={i} key={i}></Pagination>)
		}
		return (
			<Fragment>
				{arr}
				<style jsx>{Styles}</style>
			</Fragment>
		)
	}
	return (
		<Fragment>
			<div className="container">
				<div className="box">
					<div className="btn">{'<'}</div>
					{renderCenter()}
					<div className="btn">{'>'}</div>
				</div>
			</div>
			<style jsx>{Styles}</style>
		</Fragment>
	)
}

export default Paginations
