import { Fragment } from 'react'
import Styles from '../../styles/package/paginations'
const Pagination = ({ page, currentPage, setPage }) => {
	const getBtnClass = () => {
		return page == currentPage ? 'active btn' : 'btn'
	}
	return (
		<Fragment>
			<div>
				<div className={getBtnClass()} onClick={() => setPage(page)}>
					{page}
				</div>
				<style jsx>{Styles}</style>
			</div>
		</Fragment>
	)
}

export default Pagination
