import css from 'styled-jsx/css';
export default css`
  .container {
    max-width: 1096px;
    min-height: 100vh;
    margin: 0 auto;
    padding: 4rem;
  }
  /* Font Family */
  *,
  .font-lato {
    font-family: 'Lato', sans-serif;
  }
  .font-quicksand {
    font-family: 'Quicksand', sans-serif;
  }

  /* Text Size */
  .text-xl {
    font-size: 1.35rem;
  }
  .text-lg {
    font-size: 1.1rem;
  }
  .text-md {
    font-size: 0.9rem;
  }
  .text-sm {
    font-size: 0.75rem;
  }

  /* Font Weight */
  .font-bold {
    font-weight: 700;
  }
  .font-normal {
    font-weight: 400;
  }
  .font-light {
    font-weight: 300;
  }

  /* Text Color */
  .text-primary {
    color: black;
  }
  .text-secondary {
    color: #535353;
  }
  .text-error {
    color: #ee5959;
  }
  .text-navy {
    color: #3d467f;
  }
  .text-yellow {
    color: #fca92c;
  }
  .text-orange {
    color: #efa44d;
  }
  .text-pink {
    color: #fdecf4;
  }
  .text-white {
    color: #ffffff;
  }

  /* BG Color */
  .bg-primary {
    background-color: black;
  }
  .bg-secondary {
    background-color: #535353;
  }
  .bg-secondary-faded {
    background-color: rgba(87, 87, 87, 0.1);
  }
  .bg-error {
    background-color: #ee5959;
  }
  .bg-navy {
    background-color: #3d467f;
  }
  .bg-yellow {
    background-color: #fca92c;
  }
  .bg-orange {
    background-color: #efa44d;
  }
  .bg-pink {
    background-color: #fdecf4;
  }
  .bg-white {
    background-color: #ffffff;
  }
  .bg-white-faded {
    background-color: rgba(255, 255, 255, 0.6);
  }
  .bg-tutor {
    max-width: 100vw;
    min-height: 100vh;
    background-image: url('/images/tutor/tutorBG.svg');
    background-repeat: no-repeat;
    background-size: cover;
  }

  /* Text Style */
  .text-underline {
    text-decoration: underline;
  }
  .spacing-sm {
    letter-spacing: 1.1px;
  }
  .spacing-md {
    letter-spacing: 1.125px;
  }
  .text-center {
    text-align: center;
  }

  /* Opacity */
  .opacity-80 {
    opacity: 0.8;
  }
  .opacity-50 {
    opacity: 0.5;
  }
  .opacity-30 {
    opacity: 0.3;
  }

  /* Border Radius */
  .rounded-sm {
    border-radius: 10px;
  }
  .rounded-md {
    border-radius: 20px;
  }
  .rounded-lg {
    border-radius: 30px;
  }
  .rounded-full {
    border-radius: 50%;
  }

  /* Shadow */
  .shadow {
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  }

  /* Display */
  .flex {
    display: flex;
  }
  .flex-col {
    flex-direction: column;
  }
  .flex-wrap {
    flex-wrap: wrap;
  }
  .justify-center {
    justify-content: center;
  }
  .justify-between {
    justify-content: space-between;
  }
  .items-center {
    align-items: center;
  }
  .items-between {
    align-items: space-between;
  }

  /* Dimension */
  .w-full {
    width: 100%;
  }
  .w-screen {
    width: 100vw;
  }
  .h-full {
    height: 100%;
  }
  .h-screen {
    height: 100vh;
  }

  /* Margin */
  .mx-auto {
    margin-left: auto;
    margin-right: auto;
  }
  .mx-1 {
    margin-left: 0.25rem;
    margin-right: 0.25rem;
  }
  .mx-2 {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
  .mx-3 {
    margin-left: 0.75rem;
    margin-right: 0.75rem;
  }
  .mx-4 {
    margin-left: 1rem;
    margin-right: 1rem;
  }
  .mx-6 {
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }
  .mx-8 {
    margin-left: 2rem;
    margin-right: 2rem;
  }
  .my-auto {
    margin-top: auto;
    margin-bottom: auto;
  }
  .my-1 {
    margin-top: 0.25rem;
    margin-bottom: 0.25rem;
  }
  .my-2 {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
  .my-3 {
    margin-top: 0.75rem;
    margin-bottom: 0.75rem;
  }
  .my-4 {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  .my-6 {
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }
  .my-8 {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
  /* Padding */
  .px-auto {
    padding-left: auto;
    padding-right: auto;
  }
  .px-1 {
    padding-left: 0.25rem;
    padding-right: 0.25rem;
  }
  .px-2 {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
  .px-3 {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }
  .px-4 {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  .px-6 {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
  .px-8 {
    padding-left: 2rem;
    padding-right: 2rem;
  }
  .py-auto {
    padding-top: auto;
    padding-bottom: auto;
  }
  .py-1 {
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
  }
  .py-2 {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }
  .py-3 {
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
  }
  .py-4 {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
  .py-6 {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }
  .py-8 {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }

  /* Pointer */
  .pointer {
    cursor: pointer;
  }
  .disabled {
    cursor: not-allowed;
  }

  // Position
  .relative {
    position: relative;
  }
  .absolute {
    position: absolute;
  }
  .fixed {
    position: fixed;
  }
  .top-0 {
    top: 0;
  }
  .left-0 {
    left: 0;
  }
  .bottom-0 {
    bottom: 0;
  }
  .right-0 {
    right: 0;
  }
  .z-1 {
    z-index: 100;
  }
  .z-2 {
    z-index: 200;
  }
  .z-3 {
    z-index: 300;
  }
  .z-4 {
    z-index: 300;
  }
  .z-5 {
    z-index: 300;
  }

  /* My Calendar */
  .calendar {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 15px 20px;
  }
  .calendar > * {
    color: #535353;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  .selected {
    background-color: #fb9ccb;
    opacity: 0.6;
    border-radius: 50%;
    width: 1.2rem;
    height: 1.2rem;
    position: absolute;
    left: 50%;
    top: 50%;
    z-index: -1;
    transform: translate(-50%, -50%);
  }
  .today {
    background-color: #fca92c;
    opacity: 0.6;
    border-radius: 50%;
    width: 1.2rem;
    height: 1.2rem;
    position: absolute;
    left: 50%;
    top: 50%;
    z-index: -1;
    transform: translate(-50%, -50%);
  }

  /* border */
  .border {
    border: 1px solid #535353;
  }
  .border-navy {
    border: 1px solid #3d467f;
  }
  .border-none {
    border-width: 0px;
  }
  .outline-none {
    outline: none;
  }

  /* animation */
  .animation {
    transition: all 200ms;
  }
  .bigger {
    transform: scale(1.05);
  }

  /* Inputs */
  .input--members {
    border: none;
    border-bottom: 1px solid rgba(83, 83, 83, 0.4);
    width: 70%;
    margin: 0.5rem 0;
    padding: 0.2rem 0.25rem;
    outline: none;
    font-size: 0.9rem;
  }
  .input--members:focus {
    border-bottom: 1px solid #f39ac4;
  }
  .input--members::placeholder {
    color: rgba(83, 83, 83, 0.4);
  }

  /* Dropdown */
  .dropdown--list {
    position: absolute;
    z-index: 9999;
    background-color: white;
    width: 70%;
    border-radius: 5px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  }
  .dropdown--item {
    padding: 0.3rem 0.5rem;
    font-size: 0.9rem;
    color: #535353;
  }

  // ToolTip
  .tooltip {
    background-color: rgba(83, 83, 83, 0.6);
    border-radius: 50%;
    color: white;
    width: 0.75rem;
    height: 0.75rem;
    margin: auto 0.5rem;
    font-size: 0.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    position: relative;
  }
  .tips {
    position: absolute;
    color: white;
    font-size: 0.7rem;
    background-color: #eb5757;
    top: 0;
    right: 0;
    transform: translate(100%, -100%);
    width: 15rem;
    margin: auto 0;
    padding: 0.1rem 0;
    text-align: center;
    border-radius: 3px 3px 3px 0;
    opacity: 0;
    transition: 200ms ease-in-out;
  }
  .tooltip:hover > .tips {
    opacity: 1;
  }

  // modal
  .modal-bg {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.2);
    z-index: 9000;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal-container {
    position: relative;
    width: 40rem;
    height: 25rem;
    background-color: #ffffff;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
    border-radius: 20px;
    padding: 3rem 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .modal-close {
    position: absolute;
    top: 2rem;
    right: 4rem;
    font-weight: 700;
    cursor: pointer;
  }
`;
