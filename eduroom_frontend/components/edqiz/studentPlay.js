import React, { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/router";

import style from "../../styles/edqiz/managePage";
import Page1 from "./join";
import Page2 from "./join2";
import Page3 from "./edqizManagePage3";

const Content = ({ mode }) => {
  const router = useRouter();
  // console.log(router.query.room);
  const [name,setName]=useState('');
  const mockData = [
    { id: "1", pin: "3456" },
    { id: "2", pin: "1234" },
    { id: "3", pin: "2345" },
    { id: "4", pin: "6789" },
  ];

  const [current, setCurrent] = useState(1);
  const goto = (val) => {
    if (val != current) {
      if (val <= 2 || isValidForm()) {
        setCurrent(val);
      }
    }
  };
  const handleChangeQuizName = (val) => {
    console.log(val);
    setName(val)
  }

  const renderPage = () => {
    switch (current) {
      case 1:
        return <Page1 goto={goto} mockData={mockData} change={handleChangeQuizName}/>;
      case 2:
        return <Page2 goto={goto} mockData={mockData} name={name}/>;
      case 3:
        return <Page3 goto={goto} />;
    }
  };
  useEffect(() => {
    // checkPinIsValid();
  }, []);
  return (
    <Fragment>
      <div>
        <div>{renderPage()}</div>
      </div>
      <style jsx>{style}</style>
    </Fragment>
  );
};
export default Content;
