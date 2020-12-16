import React, { Fragment, useEffect, useState} from "react";
// import { useRouter } from 'next/router';
import style from "../../styles/calendar/calendar";
const Content = (props) => {
  //   const router = useRouter();
  // console.log(props.Content);
  const content = props.Content;
  const todayDate = props.todayDate;
  const todayMonth = props.todayMonth;
  const todayYear = props.todayYear;

  const currentMonthNo = props.currentMonthNo;
  const currentYear = props.currentYear;
  const setOpen = props.setOpen;
  const setShowDate = props.setShowDate;

  const [isToday, setIsToday] = useState(false);


  useEffect(() => {
    isTodayInThisMonthAndYear();
  });

  const isTodayInThisMonthAndYear = () => {
    if (todayMonth === currentMonthNo && todayYear === currentYear) {
      setIsToday(true);
    } else {
      setIsToday(false);
    }
  };

  return (
    <Fragment>
      <div onClick={() => { setOpen(true);setShowDate(content); }} className={`${isToday&&content == todayDate ? 'currentDate' : ''} gridItem`} style={{cursor:"pointer"}}>{content}</div>
      <style jsx>{style}</style>
    </Fragment>
  );
};
export default Content;
