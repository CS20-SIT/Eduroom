import React, { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/router";

import style from "../../styles/edqiz/managePage";
import Page1 from "./join";
import Page2 from "./edqizManagePage2";
import Page3 from "./edqizManagePage3";
import LandingPage from "./edqizLanding"
const Content = ({ mode }) => {
  const router = useRouter();
  // console.log(router.query.room)

  const mockData = [
    { id: "1", pin: "3456" },
    { id: "2", pin: "1234" },
    { id: "3", pin: "2345" },
    { id: "4", pin: "6789" },
  ];
  const [current, setCurrent] = useState(1);
  const goto = (val) => {
    const data = { name, description, image, questionList };
    console.log(data);
    if (val != current) {
      if (val <= 2 || isValidForm()) {
        setCurrent(val);
      }
    }
  };
  const checkPinIsValid = () => {
    let temp = 0;

    for (let i = 0; i < mockData.length; i++) {
      temp++;
      if (mockData[i].pin == router.query.room) {
        console.log("page is valid");
        break;
      } else if (
        temp == mockData.length &&
        mockData[i].pin != router.query.room
      ) {
          alert('ROOM IS NOT VALID')
          router.push('/edqiz')
      }
    }
  };

  const renderPage = () => {
    switch (current) {
      case 1:
        return <Page1 goto={goto} />;
      case 2:
        return <Page2 goto={goto} />;
      case 3:
        return <Page3 goto={goto} />;
    }
  };
  return (
    <Fragment>
      <div>
        {checkPinIsValid()}
        <div>{renderPage()}</div>
      </div>
      <style jsx>{style}</style>
    </Fragment>
  );
};
export default Content;
