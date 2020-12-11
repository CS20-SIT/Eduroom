import React, { Fragment } from "react";
import Payment from "../../../components/payment/paymentDetail";
import General from "../../../components/template/general";
import style from "../../../styles/course/paymentPage";

const checkout = () => {
  return (
    <Fragment>
      <General img='/images/package/payment.svg'>
<Payment/>
      </General>
      <style jsx>{style}</style>
    </Fragment>
  );
};
export default checkout;
