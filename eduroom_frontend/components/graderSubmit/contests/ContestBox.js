import React, { Fragment } from 'react'
import Contests from './ContestList'
import style from '../../../styles/graderSubmit/contests/contestBox'

const ContestBox = (props) => {
	const String =
		"'Description: Lorem Ipsum used since the 1500s is reproduced below for those interested. " +
		'Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their ' +
		'exact original form, accompanied. Lorem Ipsum used since the 1500s is reproduced below for those interested. ' +
		'Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact ' +
		'original form, accompanied. Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and' +
		'1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form,Lorem' +
		'Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de' +
		'Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied.Lorem Ipsum' +
		'used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus' +
		'Bonorum et Malorum" by Cicero are also reproduced in their exact original form,Lorem Ipsum used since the 1500s' +
		'is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by' +
		'Cicero are also reproduced in their exact original form,Lorem Ipsum used since the 1500s is reproduced below for' +
		'those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also'
	;("reproduced in their exact original form'")
	return (
		<div>
			<h2 style={{ color: '#5B5B5B', paddingTop: '20px' }}>CONTESTS</h2>
			<div className="box">
				<Contests id={props.id} description={String} />
			</div>
			<style jsx>{style}</style>
		</div>
	)
}
export default ContestBox
