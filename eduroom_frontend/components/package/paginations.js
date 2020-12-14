import { Fragment, useEffect } from 'react'
import Pagination from './pagination'
import Styles from '../../styles/package/paginations'

const Paginations = ({ startPage, numData, page, setPage, mxDataPerPage, numPagination, setStartPage }) => {
	const renderCenter = () => {
		const numPage = Math.ceil(numData / mxDataPerPage)
		const lastPage = Math.min(numPage, startPage + numPagination - 1)
		const arr = []
		for (let i = startPage; i <= lastPage; i++) {
			arr.push(<Pagination currentPage={page} page={i} key={i} setPage={setPage}></Pagination>)
		}
		return (
			<Fragment>
				{arr}
				<style jsx>{Styles}</style>
			</Fragment>
		)
	}
	const handleLeft = () => {
		if (startPage !== 1) {
			setPage(startPage - 3)
			setStartPage(startPage - 3)
		}
	}
	const handleRight = () => {
		const numPage = Math.ceil(numData / mxDataPerPage)
		if (startPage + 3 <= numPage) {
			setPage(startPage + 3)
			setStartPage(startPage + 3)
		}
	}
	
	const renderLeft = () => {
		if (startPage !== 1) {
			return (
				<Fragment>
					<div className="btn" onClick={handleLeft}>
						{'<'}
					</div>
					<style jsx>{Styles}</style>
				</Fragment>
			)
		}
	}

	const renderRight = () => {
		const numPage = Math.ceil(numData / mxDataPerPage)
		if (startPage + 3 <= numPage) {
			return (
				<Fragment>
					<div className="btn" onClick={handleRight}>
						{'>'}
					</div>
					<style jsx>{Styles}</style>
				</Fragment>
			)
		}
	}
	
	return (
		<Fragment>
			<div className="container">
				<div className="box">
					{renderLeft()}
					{renderCenter()}
					{renderRight()}
				</div>
			</div>
			<style jsx>{Styles}</style>
		</Fragment>
	)
}

export default Paginations
