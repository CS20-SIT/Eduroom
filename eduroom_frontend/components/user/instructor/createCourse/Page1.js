import { Fragment } from 'react'
import Pagination from './Pagination'

const Page1 = () => {
	return (
		<Fragment>
			<div className="box">
				<Pagination currentPage={1}> </Pagination>
			</div>
			<style jsx>{`
				.box {
					background: rgba(255, 255, 255, 0.9);
					box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 2px 15px rgba(0, 0, 0, 0.2);
					border-radius: 10px;
					padding: 50px;
					width: 65%;
				}
			`}</style>
		</Fragment>
	)
}

export default Page1
