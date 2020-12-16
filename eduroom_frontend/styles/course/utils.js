import css from 'styled-jsx/css';
export default css`
  .container {
    max-width: 1024px;
    min-height: 100vh;
    margin: 0 auto;
    padding: 4rem;
  }
  .container-2 {
    max-width: 1024px;
    min-height: 100vh;
    margin: 0 auto;
    padding: 4rem, 0rem, 4rem, 4rem;
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
  .text-xxxl {
    font-size: 3rem;
  }
  .text-xxl {
    font-size: 2rem;
  }
  .text-xl {
    font-size: 1.25rem;
  }
  .text-lg {
    font-size: 1rem;
  }
  .text-ll{
    font-size: 0.85rem;
  }
  .text-md {
    font-size: 0.75rem;
  }
  .text-sm {
    font-size: 0.65rem;
  }

  /* Font Weight */
  .font-fucking-bold {
    font-weight: 900;
  }
  .font-bold {
    font-weight: 700;
  }
  .font-little-bold {
    font-weight: 600;
  }
  .font-normal-bold {
    font-weight: 500;
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
  .text-pinkk {
    color: #fffaf4
  }
  .text-white {
    color: #ffffff;
  }
  .text-grey {
    color: #636363;
  }
  .text-green {
    color: #27C473;
  }
  .text-red {
    color: #FA6060;
  }


  /* BG Color */
  .bg-primary {
    background-color: black;
  }
  .bg-secondary {
    background-color: #535353;
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
  .bg-green {
    background-color: #27C473;
  }
  .bg-red {
    background-color: #FA6060;
  }
  .bg-white-faded {
    background-color: rgba(255, 255, 255, 0.6);
  }
  .bg-tutor {
    width: 100vw;
    min-height: 100vh;
    background-image: url('/images/tutor/tutorBG.svg');
    background-repeat: no-repeat;
    background-size: cover;
  }
  .bg-little-grey {
    background-color: #f7f7f7
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

  /* Opacity */
  .opacity-50 {
    opacity: 0.5;
  }

  /* Border Radius */
  .rounded-sss {
    border-radius: 5px
  }
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
  .text-center {
    text-align: center;
  }
  .inline-block {
    display: inline-block;
  }
  .position-ab {
    position: absolute;
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
  .h-20 {
    height: 20%;
  }
  .h-40 {
    height: 40%;
  }
  .h-60 {
    height: 60%;
  }
  .h-screen {
    height: 100vh;
  }
  

  /* Width */
  .w-1 {
    width: 4rem;
  }
  .w-2 {
    width: 6rem;
  }
  .w-25{
    width: 7rem;
  }
  .w-3 {
    width: 8rem;
  }
  .w-4 {
    width: 10rem;
  }

  /* Height */
  .h-25 {
    height: 2.5rem;
  }
  .h-4 {
    height: 4rem;
  }





/* Box of Description */
.box-des {
  width:270px;
  margin-left: 70px;
  position: absolute;
}

/* Go to study butt */
.go-study-butt {
  margin-left: 12rem;
  height: 1.75rem;
  width: 6rem;
}
/* Share Icon */
.share-icon {
  margin-left: 1rem;
}

/* Add to cart Butt */
.add-cart {
  width: 5.5rem;
  height: 1.75rem;
  margin-left: 12rem;
}
/* Buy Butt */
.buy {
  width: 3.5rem;
  height: 1.75rem;
  margin-left: 1rem;
}


  /* Input Tab*/
  .input-tab {
    width: 600px;
    height: 30px;
  }
  /* Categories-Tab */
  .cate-tab {
    width: 120px;
    height: 30px;
  }


  /* Position of instructor name */
  .instruc-name {
    margin-top: 30px;
    margin-left: 20px;
  }
  /* Position of instructor university */
  .instruc-uni {
    margin-top: 50px;
    margin-left: 20px;
  }
  /* Position of description head */
  .des-head {
    margin-top: 40px
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
  .my-10 {
    margin-top: 4rem;
    margin-bottom: 4rem;
  }
  .mb-2 {
    margin-bottom: 0.5rem;
  }
  .mb-10 {
    margin-bottom: 4rem;
  }
  .mt-10 {
    margin-top: 4rem;
  }
  .ml-8 {
    margin-left: 2rem;
  }
  ml-14 {
    margin-left: 4rem;
  }
  .ml-20 {
    margin-left: 8rem;
  }
  .ml-24 {
    margin-left: 10rem;
  }
  .ml-30 {
    margin-left: 14rem;
  }
  .ml-auto{
    margin-left: auto;
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
  .px-12 {
    padding-left: 9rem;
    padding-right: 9rem;
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
  .pb-4 {
    padding-bottom: 1rem;
  }

  /* Pointer */
  .pointer {
    cursor: pointer;
  }
  .disabled {
    cursor: not-allowed;
  }

  // /* Hover Color */
  // .hover-navy {
  //   hover: background-color: "#3d467f";
  // }




  /* Course Box */
  .box-1 {
    width: 250px;
    height: 270px;
  }
  .box-left {
    text-align: left;
  }
  /* Course Picture */
  .pic-1 {
    border-radius: 30px 30px 0px 0px;
  }
  .pic-2 {
    width: 550px;
    height: 400px;
  }



 
  .course-content {
    width: 200px;
    padding-bottom: 1.5rem;
  }
  .course-box {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: 350px;
  }
  .section-box {
    margin-top: 1.6rem;
  }
  .section-part {
    margin-right: 300px;
  }


  /*  Part Box  */
  .part-box {

  }
  .justify-icon {
    margin-left: 1.6rem;
  }
  .part-word {
    margin-top: 0.4rem;
    margin-left: 3.2rem;
  }
  
  





  
  /* border */
  .border {
    border: 1px solid #535353;
  }
  .border-red {
    border 1px solid #FA6060;
  }
  .border-red-2 {
    border 2px solid #FA6060;
  }
  .border-navy {
    border 1px solid #3d467f;
  }
  .border-navy-2 {
    border 2px solid #3d467f;
  }
  .border-pink {
    border 1px solid #fffaf4;
  }
  .border-grey {
    border: 1px solid #5b5b5b;
  }
  .border-white {
    border: 1px solid #ffffff;
  }
  .border-white-2 {
    border: 2px solid #ffffff;
  }
  .border-grey-2 {
    border: 2px solid #5b5b5b;
  }
  .border-green {
    border: 1px solid #27C473;
  }
  .border-green-2 {
    border: 2px solid #27C473;
  }
  .border-bottom-grey {
    border-bottom: 1px solid #5b5b5b;
    // EFF0F6
  }


  /* animation */
  .animation {
    transition: all 200ms;
  }
  .bigger {
    transform: scale(1.05);
  }

  .hidden {
    display: none;
  }

  .selectPart {
    background-color: #EFF0F6;
  }

  .hover-navy {
    border: 2px solid #ffffff;
  }
  .hover-navy:hover {
    border: 2px solid #3d467f;
  }
  .hover-anti-navy {
    border: 2px solid #3d467f;
  }

  .submit-hover{
  }
  .submit-hover:hover {
    background-color: #3d467f;
    color: #ffffff;
  }
  .submit-anti-hover {
    background-color: #3d467f;
    color: #ffffff;
  }

  .choice-size {
    width: 540px;
    // height: 400px;
  }
  
`;
