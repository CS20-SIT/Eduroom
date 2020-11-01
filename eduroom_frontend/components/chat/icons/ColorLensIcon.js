import React from "react";

export default function App(props) {
  return (
    <>
      <svg
        width="20"
        height="20"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={props.style}
        onClick={props.onClick}
      >
        <path
          d="M8 2C4.68667 2 2 4.68667 2 8C2 11.3133 4.68667 14 8 14C8.55333 14 9 13.5533 9 13C9 12.74 8.9 12.5067 8.74 12.3267C8.58667 12.1533 8.48667 11.92 8.48667 11.6667C8.48667 11.1133 8.93333 10.6667 9.48667 10.6667H10.6667C12.5067 10.6667 14 9.17333 14 7.33333C14 4.38667 11.3133 2 8 2ZM4.33333 8C3.78 8 3.33333 7.55333 3.33333 7C3.33333 6.44667 3.78 6 4.33333 6C4.88667 6 5.33333 6.44667 5.33333 7C5.33333 7.55333 4.88667 8 4.33333 8ZM6.33333 5.33333C5.78 5.33333 5.33333 4.88667 5.33333 4.33333C5.33333 3.78 5.78 3.33333 6.33333 3.33333C6.88667 3.33333 7.33333 3.78 7.33333 4.33333C7.33333 4.88667 6.88667 5.33333 6.33333 5.33333ZM9.66667 5.33333C9.11333 5.33333 8.66667 4.88667 8.66667 4.33333C8.66667 3.78 9.11333 3.33333 9.66667 3.33333C10.22 3.33333 10.6667 3.78 10.6667 4.33333C10.6667 4.88667 10.22 5.33333 9.66667 5.33333ZM11.6667 8C11.1133 8 10.6667 7.55333 10.6667 7C10.6667 6.44667 11.1133 6 11.6667 6C12.22 6 12.6667 6.44667 12.6667 7C12.6667 7.55333 12.22 8 11.6667 8Z"
          fill="#8D8D8D"
        />
      </svg>
    </>
  );
}