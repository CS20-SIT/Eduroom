import React, { Fragment } from 'react'
import { useRouter } from 'next/router'
const RowCard = ({ title, subtitle, buttonText, img, url }) => {
	const router = useRouter()

	return (
		<Fragment>
			<div className="row-card">
				<div className="row-card-image"></div>
				<div className="row-card-content">
					<div className="row-card-title">{title}</div>
					<div className="row-card-subtitle">{subtitle}</div>
				</div>
				<div className="row-card-button">
                    {url.includes('http') ? <button onClick={() => location.href=url}>{buttonText}</button>:
                    <button onClick={() => router.push(url)}>{buttonText
                    }
                    </button>}</div>
			</div>
			<style jsx>
				{`
					.row-card {
						display: flex;
						padding: 1rem 3rem;
						background: #fff;
						border-radius: 25px;
						min-height: 100px;
						margin-bottom: 2rem;
					}
					.row-card-image {
						width: 75px;
						height: 75px;
						background-image: url(${img});
						background-position: center;
						background-size: cover;
						background-repeat: no-repeat;
					}
					.row-card-content {
						flex: 1;
						padding-left: 2rem;
					}
					.row-card-title {
						font-size: 1.5em;
						font-weight: bold;
						color: #212121;
					}
					.row-card-subtitle {
						padding-top: 0.5rem;
						font-size: 1.1em;
						color: #a7abc5;
					}
					.row-card-button {
						width: 25%;
						padding-top: 0.5rem;
						display: flex;
						align-items: flex-start;
						justify-content: center;
					}
					.row-card-button button {
						background: #3d467f;
						color: #ffffff;
						cursor: pointer;
						width: 80%;
						outline: none;
						border: none;
						font-size: 1.2em;
						font-weight: bold;
						padding: 0.3rem 1rem;
						border-radius: 20px;
					}
				`}
			</style>
		</Fragment>
	)
}
export default RowCard
