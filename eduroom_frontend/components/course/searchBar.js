import { Fragment, useEffect, useState } from 'react'
import utils from '../../styles/course/utils'
import { useRouter } from 'next/router'
const SearchBar = () => {
	const router = useRouter()
	const [search, setSearch] = useState('')
	const searchVal = router.query.q
	useEffect(() => {
		if (searchVal) {
			setSearch(searchVal)
		}
	}, [searchVal])
	const handleChangeSearch = (e) => {
		setSearch(e.target.value)
	}
	const handleEnter = (e) => {
		if (e.key == 'Enter') {
			router.push(`/course/search?q=${search}`)
		}
	}
	return (
		<Fragment>
			<div className="shadow searchCourse">
				<i className="fas fa-search"></i>
				<input
					className="font-quicksand input-tab rounded-sss font-normal-bold searchBox"
					type="text"
					placeholder="What do you want to learn?"
					value={search}
					onChange={handleChangeSearch}
					onKeyUp={handleEnter}
				></input>
			</div>
			<style jsx>{utils}</style>
			<style jsx>
				{`
					.searchCourse {
						background: white;
						padding-left: 1rem;
						border-radius: 5px;
						display: flex;
						align-items: center;
						flex: 1;
						width: 600px;
						margin-right: 1.5rem;
					}
					.fa-search {
						color: rgba(17, 17, 17, 0.48);
						font-size: 0.8rem;
					}
					.searchBox {
						background: none;
						margin-left: 0.7rem;
						border: none;
						outlined: none;
						flex: 1;
						padding: 1.1rem 0;
					}
				`}
			</style>
		</Fragment>
	)
}
export default SearchBar
