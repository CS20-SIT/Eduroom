import React, { Fragment } from 'react'
import LearningPath from '../../components/learningpath/LearningPath'
import GeneralTemplate from '../../components/template/general'
const Temp = () => {
	return (
		<Fragment>
			<GeneralTemplate>
				<LearningPath/>
			</GeneralTemplate>
			<style jsx>
				{`
          #content {
            width: 95%;
            left: 5%;
            top: 0;
            z-index: 20;
            height:100vh;
            overflow-y: auto;
            position: fixed;
        `}
			</style>
		</Fragment>
	)
}
export default Temp
