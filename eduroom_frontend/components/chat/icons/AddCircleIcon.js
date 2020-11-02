import React from "react";

export default function App(props) {
  return (
    <>
      <svg
        width="30"
        height="30"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={props.style}
        onClick={props.onClick}
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0 10C0 4.48001 4.48001 0 10 0C15.52 0 20 4.48001 20 10C20 15.52 15.52 20 10 20C4.48001 20 0 15.52 0 10ZM11 11H14C14.55 11 15 10.55 15 10C15 9.45001 14.55 9 14 9H11V6C11 5.45001 10.55 5 10 5C9.45001 5 9 5.45001 9 6V9H6C5.45001 9 5 9.45001 5 10C5 10.55 5.45001 11 6 11H9V14C9 14.55 9.45001 15 10 15C10.55 15 11 14.55 11 14V11Z"
          fill={props.style.color}
        />
      </svg>
    </>
  );
}
