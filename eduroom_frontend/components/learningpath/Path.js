import React,{Fragment} from 'react';
import style from '../../styles/learningPathStyles/pathStyles';

const Pathline = () => {
    return(
        <Fragment>
            <header>
    <p>Under Maintenance</p>
    <h1>Learning Path</h1>
</header>

<ul className="timeline">
  {/* <!-- Item 1 --> */}
  <li>
    <div className="direction-r">
      <div className="flag-wrapper">
		  <span className="tooltip">
        <span className="circle1"></span>
        {/* <span className="flag">Lorem ipsum.</span>
        <span className="time-wrapper"><span className="time">Feb 2015</span></span> */}
      <span className="tooltiptextright">
      <div >Lorem ipsum Nisi labore aute do aute culpa magna nulla voluptate exercitation deserunt proident.</div>
    </span></span></div></div>
  </li>

  {/* <!-- Item 2 --> */}
  <li>
    <div className="direction-l">
      <div className="flag-wrapper">
		  <span className="tooltip">
        <span className="circle1" ></span>
		{/* <span className="tooltiptext">
        <span className="flag">Lorem ipsum Anim.</span>
        <span className="time-wrapper"><span className="time">Dec 2014</span></span></span> */}
      
	  <span className="tooltiptextleft">
      <div>Lorem ipsum In ut sit in dolor nisi ex magna eu anim anim tempor dolore aliquip enim cupidatat laborum dolore.</div>
    </span></span></div></div>
  </li>

  {/* <!-- Item 3 --> */}
  <li>
    <div className="direction-r">
      <div className="flag-wrapper">
		  <span className="tooltip">
        <span className="circle1"></span>
        {/* <span className="flag">Lorem Occaecat.</span>
        <span className="time-wrapper"><span className="time">July 2014</span></span> */}
      <span className="tooltiptextright">
      <div >Lorem ipsum Minim labore Ut cupidatat quis qui deserunt proident fugiat pariatur cillum cupidatat reprehenderit sit id dolor consectetur ut.</div>
   </span></span> </div></div>
  </li>
</ul>
<style jsx>{style}</style>
        </Fragment>
    )
}
export default Pathline;