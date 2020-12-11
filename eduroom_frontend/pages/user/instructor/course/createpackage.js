import React, { Fragment, useState, useEffect } from 'react';
import GeneralTemplate from '../../../../components/template/generalnonav';
import style from '../../../../styles/package/createpackage';
import CreatePackage from '../../../../components/package/createPackage';
import ConfirmPackage from '../../../../components/package/confirmPackage';
const CreatePackagePage = () => {
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
      // res is mockup data
      const res = [
        { pic: '', name: 'Java 101', price: 0 },
        { pic: '', name: 'Python 101', price: 0 },
        { pic: '', name: 'Advacen Algorithm', price: 0 },
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
        <CreatePackage
          myPackage={myPackage}
          setMyPackage={setMyPackage}
          changePage={(page) => setPage(page)}
        />
      );
    } else if (page === 2) {
      return (
        <ConfirmPackage
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
export default CreatePackagePage;
