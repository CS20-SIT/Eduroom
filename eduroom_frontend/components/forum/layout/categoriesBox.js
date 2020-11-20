import React, { Fragment } from 'react'
import CategoriesIcon from './categoriesIcon'
import Link from 'next/link'
const CategoriesBox = ({ icon, content }) => {
	return (
		<Fragment>
			<Link href={'/forum/' + content}>
				<div className="categoriesBox">
					<div className="categoriesIcon">
						<CategoriesIcon type={icon} />
					</div>
					<div className="categoriesContent">{content}</div>
				</div>
			</Link>
			<style jsx>
				{`
					.categoriesBox {
						border: 1px solid #a880f7;
						border-radius: 10px;
						background: none;
						width: 120px;
						padding: 1rem;
						display: flex;
						flex-flow: column;
						justify-content: center;
                        align-items: center;
                        cursor: pointer;
					}
					.categoriesBox:hover {
						background: rgba(255, 255, 255, 0.1);
					}
					.categoriesIcon {
						width: 60px;
						height: 60px;
						object-fit: cover;
						display: flex;
						justify-content: center;
						align-content: center;
					}
				`}
			</style>
		</Fragment>
	)
}
export default CategoriesBox
