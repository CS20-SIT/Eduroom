import { Fragment } from 'react'
import CreateButton from './createButton'
import SearchBar from './searchBar'

const CustomNav = () => {
	return (
		<Fragment>
			<div className="customNav">
				<SearchBar />
				<CreateButton />
			</div>
			<style jsx>
				{`
					.customNav {
						display: flex;
						width: 100%;
					}
				`}
			</style>
		</Fragment>
	)
}
export default CustomNav
