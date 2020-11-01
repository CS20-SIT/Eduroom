import React from "react";

export default function App(props) {
  return (
    <>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={props.style}
        onClick={props.onClick}
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M9.98999 0C4.46997 0 0 4.48001 0 10C0 15.52 4.46997 20 9.98999 20C15.52 20 20 15.52 20 10C20 4.48001 15.52 0 9.98999 0ZM10 18C5.58002 18 2 14.42 2 10C2 5.57999 5.58002 2 10 2C14.42 2 18 5.57999 18 10C18 14.42 14.42 18 10 18ZM15 7.5C15 8.32999 14.33 9 13.5 9C12.67 9 12 8.32999 12 7.5C12 6.67001 12.67 6 13.5 6C14.33 6 15 6.67001 15 7.5ZM6.5 9C7.33002 9 8 8.32999 8 7.5C8 6.67001 7.33002 6 6.5 6C5.66998 6 5 6.67001 5 7.5C5 8.32999 5.66998 9 6.5 9ZM14.75 12.75C13.8 14.39 12.03 15.5 10 15.5C7.97003 15.5 6.20001 14.39 5.25 12.75C5.06 12.42 5.31 12 5.69 12H14.31C14.7 12 14.94 12.42 14.75 12.75Z"
          fill="black"
          fill-opacity="0.54"
        />
      </svg>
    </>
  );
}