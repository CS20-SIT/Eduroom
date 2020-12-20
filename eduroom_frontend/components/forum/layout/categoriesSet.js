import React, { Fragment, useEffect, useState } from 'react'
import CategoriesBox from './categoriesBox'
import { useRouter } from 'next/router'
import api from '../../../api'

const CategoriesSet = () => {
	const router = useRouter()
	const [categories, setCategories] = useState([])
	useEffect(() => {
		getCategory()
	}, [])
	const getCategory = () => {
		api
			.get('/api/forum/category')
			.then((res) => {
				setCategories(res.data.category)
			})
			.catch((err) => [console.log(err)])
	}
	return (
		<Fragment>
			<div className="categoriesSet">
				{categories.map((el, index) => {
					return (
						<div
							className="categoriesItems"
							key={index}
							onClick={() => {
								router.push('/forum/room/' + el.typename)
							}}
						>
							<CategoriesBox content={el.typename} />
						</div>
					)
				})}
			</div>
			<style jsx>
				{`
					.categoriesSet {
						display: flex;
						justify-content: center;
						padding: 2rem;
					}
					.categoriesItems {
						display: flex;
						justify-content: center;
						padding: 0 0.5rem;
					}
				`}
			</style>
		</Fragment>
	)
}
export default CategoriesSet
