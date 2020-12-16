import { Fragment } from 'react'
import Videos from './Videos'
import Materials from './Materials'

const Section = ({ section, idx, handleChangeSection }) => {
	const changeVideos = (videos) => {
		section.videos = videos
		handleChangeSection(section, idx)
	}
	const changeName = (e) => {
		section.name = e.target.value
		handleChangeSection(section, idx)
	}
	const changeMaterials = (materials) => {
		section.materials = materials
		handleChangeSection(section, idx)
	}
	console.log('section is ', section)
	return (
		<Fragment>
			<div className="box">
				<div className="title">Section Name</div>
				<input
					name="name"
					className="textfield"
					type="text"
					placeholder="Section name"
					value={section.name}
					onChange={changeName}
				></input>
				<Videos videos={section.videos} sectionIndex={idx} changeVideos={changeVideos}></Videos>
				<Materials materials={section.materials} sectionIndex={idx} changeMaterials={changeMaterials}></Materials>
			</div>
			<style jsx>{`
				.box {
					background: #f4f5f7;
					box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.1);
					padding: 20px 20px;
					margin-bottom: 50px;
				}
				.header {
					color: #3d467f;
				}
				.textfield {
					background: white;
					border-radius: 10px;
					width: 400px;
					border: none;
					font-size: 1.1em;
					color: #3d467f;
					padding: 14px;
				}
				.title {
					font-style: normal;
					font-weight: bold;
					font-size: 15px;
					line-height: 19px;
					letter-spacing: 0.5px;
					text-transform: uppercase;
					color: #353e6c;
					margin-bottom: 5px;
				}
			`}</style>
		</Fragment>
	)
}

export default Section
