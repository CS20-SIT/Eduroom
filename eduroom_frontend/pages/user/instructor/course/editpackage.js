import React, { Fragment, useState, useEffect } from 'react';
import General from '../../../../components/template/general';
import style from '../../../../styles/package/createpackage';
import EditPackage from '../../../../components/package/editPackage';
import EditConfirm from '../../../../components/package/editConfirm';
const EditPackagePage = () => {
  const [page, setPage] = useState(1);
  const [myPackage, setMyPackage] = useState({
    name: '',
    discount: 0,
    category: 'default',
    detail: '',
    courses: [],
  });
  useEffect(() => {
    const fetchdata = async () => {
      // res is mockup data
      const res = [
        { pic: '', name: 'Java 101' },
        { pic: '', name: 'Python 101' },
        { pic: '', name: 'Advacen Algorithm' },
      ];
      setMyPackage({ ...myPackage, courses: res });
    };
    fetchdata();
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
      <General>
        {renderPage()}
        <style jsx>{style}</style>
      </General>
    </Fragment>
  );
};
export default EditPackagePage;
