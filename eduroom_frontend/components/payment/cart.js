import React, { Fragment } from "react";
import style from "../../styles/course/cartStyle";
const cart = () => {
  return (
    <Fragment>
      <div className="background">
        <h1 className="centerBar">EDUROOM CART</h1>
        <span className="courseInCart">1 course in cart</span>
        <div
          style={{
            display: "flex",
            justifyContent: "start",
            paddingTop: 30,
            paddingLeft: 65,
          }}
        >
          <div className="bigDiv">
            <div style={{ fontSize: 10 }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "start",
                }}
              >
                <div className="col" style={{ width: "16vw" }}>
                  <img
                    src="/images/package/packagePic.svg"
                    className="google-logo"
                    style={{ width: 150, height: 120, marginRight: 40 }}
                  />
                </div>
                <div
                  className="col"
                  style={{
                    fontSize: 18,
                    fontWeight: 700,
                    width: "25vw",
                    color: "#3D467F",
                  }}
                >
                  Learn to code with Python
                  <div
                    style={{ fontSize: 7, fontWeight: 700, color: "#5B5B5B" }}
                  >
                    By Jeon Jungkook
                  </div>
                </div>
                <a
                  className="col"
                  href="default.asp"
                  style={{
                    width: 100,
                    height: 100,
                    width: "20vw",
                    fontSize: 15,
                    color: "#3D467F",
                    textDecoration: "underline",
                  }}
                >
                  Remove
                </a>
                <div
                  className="col"
                  style={{
                    width: 100,
                    height: 100,
                    fontSize: 15,
                    color: "#3D467F",
                  }}
                >
                  ฿50
                  <div
                    style={{ color: "#5B5B5B", textDecoration: "line-through" }}
                  >
                    ฿850
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="checkoutBox">

          <div style={{ width:"50px", height:"200px",position:"absolute"}}>
          <div
            style={{
              display: "flex",
              justifyContent: "start",
              paddingTop: 30,
              paddingLeft: 20,
            }}
          >
            <div className="underDiv">
              <div style={{ fontSize: 10 }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "start",
                  }}
                >
                  <b>
                    <div
                      className="col"
                      style={{
                        color: "#3D467F",
                        fontSize: 18,
                        width: 80,
                        paddingTop: 10,
                      }}
                    >
                      Total :
                    </div>
                  </b>
                  <div
                    className="col"
                    style={{
                      width: 100,
                      height: 100,
                      fontSize: 30,
                      color: "#3D467F",
                    }}
                  >
                    ฿50
                    <div
                      style={{
                        fontSize: 18,
                        color: "#5B5B5B",
                        textDecoration: "line-through",
                      }}
                    >
                      ฿850
                    </div>
                    <div style={{ fontSize: 18, color: "#5B5B5B" }}>
                      10% off
                    </div>
                    <div className="col" class="search-container">
                      <form className="applyCoupon" style={{ width: 500 }}>
                        <input
                          className="inputCoupon"
                          type="text"
                          placeholder="Enter coupon code"
                        ></input>
                        <button
                          className="apply"
                          type="submit"
                          style={{ marginRight: "60px" }}
                        >
                          Apply
                        </button>
                        <button className="checkOut" type="submit" style={{}}>
                          Check out
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
          
        </div>
      </div>
      <style jsx>{style}</style>
    </Fragment>
  );
};
export default cart;
