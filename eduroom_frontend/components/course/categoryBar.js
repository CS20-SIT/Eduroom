import { Fragment, useEffect, useState } from 'react'
import CategoryItem from './categoryItem'
import { useRouter } from 'next/router'
import api from '../../api'

const CategoryBar = ({ current }) => {
	const router = useRouter()
	const [data, setData] = useState([])
	useEffect(() => {
		getCategory()
	}, [])
	const getCategory = () => {
		api
			.get('/api/course/category')
			.then((res) => {
				setData(res.data.category)
			})
			.catch((err) => [console.log(err)])
	}

	return (
		<Fragment>
			<div className="categoryTab">
				<div style={{ borderBottom: current == 'General' ? '2px solid rgb(251,156,203)' : '2px solid #A7ABC5' }}>
					<div
						className="categoryText general"
						style={{
							color: current == 'General' ? 'rgb(251,156,203)' : '#A7ABC5',
							fontWeight: current == 'General' ? 'bold' : '500',
						}}
						onClick={() => {
							router.push('/course/')
						}}
					>
						General
					</div>
				</div>

				{data.map((el, index) => {
					return (
						<div
							className="categoryText"
							style={{
								color: current == el.cataname ? 'rgb(251,156,203)' : '#A7ABC5',
								fontWeight: current == el.cataname ? 'bold' : '500',
							}}
							key={index}
							onClick={() => {
								router.push('/course/category/' + el.cataname)
							}}
						>
							<CategoryItem content={el.cataname} current={current} />
						</div>
					)
				})}
			</div>
			<style jsx>
				{`
					.categoryText {
						display: flex;
					}
					.categoryText:hover {
						color: pink;
					}

					.categoryTab {
						display: flex;
						justify-content: center;
						padding: 2rem 0;
					}
					.general {
						cursor: pointer;
						margin: 0 1rem;
					}
					.general:hover {
						color: pink;
					}
					.bottomLine {
						border-bottom: 2px solid #535353;
					}
				`}
			</style>
		</Fragment>
	)
}
export default CategoryBar
