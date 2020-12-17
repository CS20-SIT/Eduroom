import React, {Fragment} from 'react'
import Header from '../layouts/header'
const Certificate = ({data}) => {
    console.log(data)
    return (
        <Fragment>
            <Header/>
            <div className="certificate">
                <div className="head">
                    <div className="date">{data.finishDate}</div></div>
                <div className="info">
                    <div className="title">CERTIFICATE</div>
                    <div className="subTitle">this certificate is present to</div>
                    <div className="name">{data.firstName} {data.lastName}</div>
                    <div className="text">has successfully complete from <b>"{data.courseName}"</b> course</div>
                </div>
            </div>
        <style jsx>
            {
                `
                .certificate{
                    background-image: url('/images/certificate_background.png');
                    width: 100%;
                    height:100%;
                    background-size: auto;
                    background-repeat: no-repeat;
                    font-family: Quicksand;
                    background-position-y: bottom;
                    display:flex;
                    flex-flow:column;
                    cursor:default;
                }
                .head{
                    padding: 24px 24px;
                    width:100%;
                    height: fit-content;
                    text-align:right;
                }
                .info {
                    width: 100%;
                    text-align:center;
                    flex: 1;
                    display:flex;
                    flex-flow:column;
                    justify-content:center;
                    padding-bottom: 96px;
                }
                .date {
                    font-size: 0.9em;
                    font-weight: 500;
                    color: #3D467F;
                }
                .title {
                    color: #3D467F;
                    font-size: 2em;
                    font-weight: bold;
                    letter-spacing: 7px;
                    padding: 20px 0;
                }
                .subTitle {
                    font-size: 1.2em;
                    color: #3D467F;
                    padding: 12px 0;
                }
                .text {
                    font-size: 1em;
                    color: #3D467F;
                    padding-top: 24px;
                    font-weight:400;
                }
                .name {
                    padding: 12px 0;
                    background: white;
                    font-size: 1.8em;
                    color: #FB9CCB;
                    text-transform: uppercase;
                    font-weight: bold;
                }

                `
            }
        </style>
        </Fragment>
    )
}
export default Certificate