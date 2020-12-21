import React, { Fragment, useState } from 'react'
import RowCard from './rowCard'
const RowList = () => {
	const data = [
		{
			img: '/images/admin/support.png',
			title: 'Support',
			subtitle: 'To support the user',
			buttonText: 'Go Support',
            url: '/admin/support'
		},
		{
			img: '/images/admin/analyze.png',
			title: 'Analysis',
			subtitle: 'To analyze our service',
			buttonText: 'See All',
            url: '/admin/analyze'
		},
	]

	return (
		<Fragment>
			<div className="row-list">
				{data.map((el) => {
					return (
						<RowCard
							img={el.img}
							title={el.title}
							subtitle={el.subtitle}
							buttonText={el.buttonText}
                            url={el.url}
						/>
					)
				})}
			</div>
			<style jsx>
				{`
					.row-list {
						padding: 1rem 3rem;
                    }
				`}
			</style>
		</Fragment>
	)
}
export default RowList
