import React, { Fragment, useState, useEffect } from 'react';
import GeneralTemplate from '../../../../../components/template/general';
import style from '../../../../../styles/package/createpackage';
import EditPackage from '../../../../../components/package/editPackage';
import EditConfirm from '../../../../../components/package/editConfirm';
import api from '../../../../../api'
const EditPackagePage = (props) => {
  const [page, setPage] = useState(1);
  const [packages, setPackages] = useState(null)
  const [courseList, setCourseList] = useState([])
	const [image, setImage] = useState(null)
	const [editData, setEditData] = useState({
		packagename: '',
		discount: 0,
		detail: '',
		image: '',
		cateid: '',
	})
	const [selectCourse, setSelectCourse] = useState([])
  useEffect(() => {
    getPackage()
  }, [])
  useEffect(() => {
		if (packages) {
			setEditData({
				packagename: packages.packagename,
				discount: packages.discount,
				detail: packages.detail,
				cateid: packages.cateid,
				image: packages.image,
			})
		}
	}, [packages])
	useEffect(() => {
		setSelectCourse([...courseList])
	}, [courseList])
  const getPackage = async () => {
    const result = await api.get(`/api/package/getPackage?packageid=${props.id}`)
    setPackages(result.data.packages)
    const tempList = []
    result.data.courseList.map(el=>{
      tempList.push(el.courseid)
    })
    setCourseList(tempList)
  }
  const handleUplaodFile = (e) => {
		let newValue = e.target.files[0]
		let type = 'image'
		setImage(newValue)
	}
	const handleChangeEdit = (e) => {
		setEditData({ ...editData, [e.target.name]: e.target.value })
	}
  const handleSelectedCourses = (newSelected) => {
		setSelectCourse([...newSelected])
	}
  

  const renderPage = () => {
    if (page === 1) {
      return (
        <EditPackage
          handleChangeEdit={handleChangeEdit}
          handleSelectedCourses={handleSelectedCourses}
          handleUplaodFile={handleUplaodFile}
          selectCourse={selectCourse}
          editData={editData}
          image={image}
          index={1}
          handleChangePage={(page)=> setPage(page)}
        />
      );
    } else if (page === 2) {
      return (
        <EditConfirm
          selectCourse={selectCourse}
          editData={editData}
          index={2}
          image={image}
          handleChangePage={(page) => setPage(page)}
        />
      );
    }
  };
  return (
    <Fragment>
      <GeneralTemplate>
        <div className="package-bg">
          {renderPage()}
        </div>
        <style jsx>{style}</style>
      </GeneralTemplate>
    </Fragment>
  );
};

export async function getServerSideProps(ctx) {
  try {
    const id = ctx.query.id
    return { props: { id } }
  } catch (err) {
    return { props: { id: '' } }
  }
}
export default EditPackagePage;


