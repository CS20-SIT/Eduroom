import React, { Fragment, useState, useEffect } from 'react';
import GeneralTemplate from '../../../../../../components/template/generalnonav';
import style from '../../../../../../styles/package/createpackage';
import EditPackage from '../../../../../../components/package/editPackage';
import EditConfirm from '../../../../../../components/package/editConfirm';
const EditPackagePage = ({id}) => {
  const [page, setPage] = useState(1);
  const [myPackage, setMyPackage] = useState({
    pic: '',
    name: '',
    discount: 0,
    category: 'default',
    detail: '',
    courses: [],
  });
  useEffect(() => {
    const fetchdata = async () => {
      const res = [
        { pic: '', name: 'Java 101' },
        { pic: '', name: 'Python 101' },
        { pic: '', name: 'Advacen Algorithm' },
      ];
      setMyPackage({ ...myPackage, courses: res });
    };
    fetchdata();
    console.log(id);
  }, []);

  useEffect(() => {
    console.log(myPackage);
  }, [myPackage]);
  const renderPage = () => {
    if (page === 1) {
      return (
        <EditPackage
          myPackage={myPackage}
          setMyPackage={setMyPackage}
          changePage={(page) => setPage(page)}
        />
      );
    } else if (page === 2) {
      return (
        <EditConfirm
          myPackage={myPackage}
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