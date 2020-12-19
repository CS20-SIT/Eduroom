import React, { Fragment, useState } from 'react'
import ActionCard from './actionCard'
const ActionList = () => {
	const data = [
		{
			img: '/images/admin/instructor-approve.png',
			title: 'Instructor Approve 1',
			subtitle: 'To approve an instructor',
			buttonText: 'Go Approve',
            buttonColor: '#FB9CCB',
            url: '/admin/instructor'
		},
		{
			img: '/images/admin/instructor-approve.png',
			title: 'Instructor Approve 2',
			subtitle: 'To approve an instructor',
			buttonText: 'Go Approve',
			buttonColor: '#FB9CCB',
            url: '/admin/instructor'
		},
		{
			img: '/images/admin/instructor-approve.png',
			title: 'Instructor Approve 3',
			subtitle: 'To approve an instructor',
			buttonText: 'Go Approve',
			buttonColor: '#FB9CCB',
            url: '/admin/instructor'
		},
		{
			img: '/images/admin/instructor-approve.png',
			title: 'Instructor Approve 4',
			subtitle: 'To approve an instructor',
			buttonText: 'Go Approve',
			buttonColor: '#FB9CCB',
            url: '/admin/instructor'
		},
	]
	const [current, setCurrent] = useState(0)

	return (
		<Fragment>
			<div className="action-list">
				{current > 0 ? (
					<div className="arrow left" onClick={()=>setCurrent(current-1)}>
						<i className="fas fa-angle-left" />
					</div>
				) : null}
				{data.slice(current, current + 3).map((el) => {
					return (
						<ActionCard
							img={el.img}
							title={el.title}
							subtitle={el.subtitle}
							buttonText={el.buttonText}
                            buttonColor={el.buttonColor}
                            url={el.url}
						/>
					)
				})}
				{current + 3 < data.length ? (
					<div className="arrow right" onClick={()=>setCurrent(current+1)}>
						<i className="fas fa-angle-right" />
					</div>
				) : null}
			</div>
			<style jsx>
				{`
					.action-list {
						width: 100%;
						padding: 1rem 5rem;
                        grid-gap: 2.5rem;
                        position: relative;
						display: grid;
						grid-template-columns: repeat(3, 1fr);
                    }
                    .arrow {
                        position: absolute;
                        top: 40%;
                        color: #FB9CCB7C;
                        display:flex;
                        justify-content:center;
                        align-items:center;
                        font-size: 3em;
                        font-size: bold;
                        cursor: pointer;
                        width: 60px;
                        height: 60px;
                    }
                    .arrow.left {
                        left: 0%;
                    }
                    .arrow.right {
                        right: 0%
                    }
				`}
			</style>
		</Fragment>
	)
}
export default ActionList
