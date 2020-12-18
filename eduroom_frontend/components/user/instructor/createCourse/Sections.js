import { Fragment, useEffect, useState } from 'react'
import Section from './Section'

const Sections = (props) => {
	const handleChangeSection = (section, idx) => {
		props.sections[idx] = section
		props.changeSections(props.sections)
	}
	const renderSections = () => {
		const arr = props.sections.map((section, idx) => {
			return <Section section={section} idx={idx} handleChangeSection={handleChangeSection} key={idx}></Section>
		})
		return arr
	}
	return (
		<Fragment>
			<div>{renderSections()}</div>
		</Fragment>
	)
}

export default Sections
