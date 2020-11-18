import { Fragment, useState, useEffect } from 'react'
import GeneralNoNav from '../../../../components/template/generalnonav'
import Page1 from '../../../../components/user/instructor/createCourse/Page1'
const create = () => {
	const [page, setPage] = useState(1)
	const renderPage = () => {
		switch (page) {
			case 1:
				return <Page1></Page1>
			case 2:
				return <Page2></Page2>
			case 3:
				return <Page3></Page3>
		}
	}
	return (
		<Fragment>
			<GeneralNoNav>
        <div className="header">
          <h1 style={{color: 'white', padding: '10px 30px'}}>Create your course</h1>
        </div>
        <div className="container">
					{renderPage()}
				</div>
			</GeneralNoNav>
			<style jsx>{`
				.header {
          position:absolute;
          top:0;
					width: 100vw;
					height: 130px;
					background: linear-gradient(323.28deg, rgba(213, 138, 187, 0.8) 0.2%, rgba(129, 127, 188, 0.8) 99.77%);
				}
        .container{
          margin-top: 150px;
          display: flex;
        }
			`}</style>
		</Fragment>
	)
}

export default create
