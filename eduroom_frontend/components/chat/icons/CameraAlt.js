import React from "react";

export default function App(props) {
  return (
    <>
      <svg
        width="25"
        height="19"
        viewBox="0 0 30 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={props.style}
        onClick={props.onClick}
      >
        <path
          d="M14.697 9.39752C12.3037 9.39752 10.364 11.3381 10.364 13.7306C10.364 16.1238 12.3037 18.0636 14.697 18.0636C17.0897 18.0636 19.03 16.1238 19.03 13.7306C19.03 11.3381 17.0897 9.39752 14.697 9.39752ZM26.2518 5.06448H22.7853C22.3087 5.06448 21.7951 4.69473 21.6446 4.24236L20.7485 1.55328C20.5974 1.1012 20.0844 0.731445 19.6078 0.731445H9.78622C9.30959 0.731445 8.79598 1.1012 8.64548 1.55357L7.74941 4.24265C7.59833 4.69473 7.0853 5.06448 6.60866 5.06448H3.14223C1.55345 5.06448 0.25354 6.3644 0.25354 7.95318V20.9523C0.25354 22.5411 1.55345 23.841 3.14223 23.841H26.2518C27.8406 23.841 29.1405 22.5411 29.1405 20.9523V7.95318C29.1405 6.3644 27.8406 5.06448 26.2518 5.06448ZM14.697 20.9523C10.7086 20.9523 7.47527 17.719 7.47527 13.7306C7.47527 9.74243 10.7086 6.50883 14.697 6.50883C18.6848 6.50883 21.9187 9.74243 21.9187 13.7306C21.9187 17.719 18.6848 20.9523 14.697 20.9523ZM25.2407 9.97324C24.6826 9.97324 24.2297 9.52087 24.2297 8.9622C24.2297 8.4041 24.6826 7.95115 25.2407 7.95115C25.7994 7.95115 26.2518 8.4041 26.2518 8.9622C26.2518 9.52087 25.7991 9.97324 25.2407 9.97324Z"
          fill="white"
        />
      </svg>
    </>
  );
}