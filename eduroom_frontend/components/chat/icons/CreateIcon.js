import React from "react";

export default function App(props) {
  return (
    <>
      <svg
        width="20"
        height="20"
        viewBox="0 0 13 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={props.style}
        onClick={props.onClick}
      >
        <path
          d="M0.625 8.34376V10.375H2.65625L8.64708 4.38418L6.61583 2.35293L0.625 8.34376ZM10.2179 2.81334C10.4292 2.60209 10.4292 2.26084 10.2179 2.04959L8.95042 0.782095C8.73917 0.570845 8.39792 0.570845 8.18667 0.782095L7.19542 1.77334L9.22667 3.80459L10.2179 2.81334Z"
          fill="#7279A3"
        />
      </svg>
    </>
  );
}
