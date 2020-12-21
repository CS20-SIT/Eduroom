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

  useEffect(() => {
    getPackage()
  }, [])
  const getPackage = async () => {
    const result = await api.get(`/api/package/getPackage?packageid=${props.id}`)
    setPackages(result.data.packages)
    console.log(result)
    const tempList = []
    result.data.courseList.map(el=>{
      tempList.push(el.courseid)
    })
    setCourseList(tempList)
  }

  const renderPage = () => {
    if (page === 1) {
      return (
        <EditPackage
          packages={packages}
          setPackages={setPackages}
          courseList={courseList}
          setCourseList={setCourseList}
          changePage={(page) => setPage(page)}
        />
      );
    } else if (page === 2) {
      return (
        <EditConfirm
          packages={packages}
          courseList={courseList}
          changePage={(page) => setPage(page)}
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
