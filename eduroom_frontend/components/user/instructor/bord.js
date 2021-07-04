const { default: Link } = require('next/link')
import { Fragment } from 'react'

function Bord() {
	return (
		<Fragment>
			<div>
				<style jsx>
					{`
						#box {
							border-radius: 25px;
							border: 2px solid black;
							padding: 20px;
							width: 449px;
							height: 703px;
							position: absolute;
							right: 100px;
							top: 100px;
						}
						#title {
							font-size: 25px;
						}
						#info {
							font-size: 18px;
						}
						#q {
							color: pink;
						}
					`}
				</style>
				<a id="box">
					<a id="title">
						Instructor
						<Link href="../../../user/instructor/EditProfile">
							<a>
								<img src="https://img.icons8.com/android/24/000000/pencil.png" />
							</a>
						</Link>
						<br></br>
						<a>Profile</a>
					</a>
					<br></br>
					<br></br>
					<br></br>
					<br></br>
					<br></br>
					<br></br>
					<br></br>

					<a id="info">
						<a>Profile</a>
						<br></br>

						<a>
							<img src="https://img.icons8.com/bubbles/50/000000/anonymous-mask.png" />
						</a>
						<br></br>
						<br></br>
						<a id="q">Firstname</a>
						<a style={{ marginright: 15 }}>Ramon</a>
						<br></br>
						<br></br>
						<a id="q">Lastname</a>
						<a style={{ marginright: 15 }}>Ridwan</a>
						<br></br>
						<br></br>
						<a id="q">Expert</a>
						<a style={{ marginright: 15 }}>Mathametic</a>
						<br></br>
						<br></br>
					</a>
				</a>
			</div>
		</Fragment>
	)
}
export default Bord
