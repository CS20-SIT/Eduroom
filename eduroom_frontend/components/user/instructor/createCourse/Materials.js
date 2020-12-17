import { Fragment } from 'react'
import Material from './Material'
import AddMaterial from './AddMaterial'
import style from '../../../../styles/user/instructor/createCourse/create'

const Materials = ({ materials, changeMaterials, sectionIndex }) => {
  const handleMaterials = (material, idx) => {
    materials[idx] = material
    changeMaterials(materials)
  }
  const removeMaterial = (idx) => {
    materials.splice(idx, 1);
    changeMaterials(materials)
  }
	const renderMaterials = () => {
		const arr = materials.map((material, idx) => {
			return (
				<Material
          material={material}
          key={idx}
          sectionIndex={sectionIndex}
          idx={idx}
          handleMaterials={handleMaterials}
          removeMaterial={removeMaterial}
				></Material>
			)
		})
		return (
			<Fragment>
				{arr}
				<style jsx>{style}</style>
			</Fragment>
		)
	}
	const addMaterial = () => {
		materials.push({ data: '', path: '' })
		changeMaterials(materials)
	}
	return (
		<Fragment>
			<div>
				{renderMaterials()}
				<AddMaterial addMaterial={addMaterial}></AddMaterial>
			</div>
		</Fragment>
	)
}

export default Materials
