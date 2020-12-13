import { Fragment } from 'react'
import AddSection from './AddSection'
import Sections from './Sections'

const Page2 = (props) => {
	const addSection = () => {
		const temp = props.sections.slice()
		temp.push({
			name:`Section ${temp.length+1}`,
			videos: [{ name: 'Video Name', data: '',path:'' }],
			material: {data:'',path:''},
			questions: [{ q: '', choices: ['', '', '', ''], correct: '' }],
		})
		props.changeSections(temp)
	}
	return (
		<Fragment>
			<div>
				<h2 className="header">Create Your Course</h2>
				<Sections sections={props.sections} changeSections={props.changeSections}></Sections>
				<AddSection addSection={addSection}></AddSection>
			</div>
			<style jsx>{`
				.header {
					color: #3d467f;
				}
			`}</style>
		</Fragment>
	)
}

export default Page2
