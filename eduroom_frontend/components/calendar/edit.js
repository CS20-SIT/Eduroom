import React, { Fragment, useState, useEffect } from "react";
import axios from 'axios';
import style from "../../styles/calendar/calendar";
import Image from "next/image";


const edit = (props) => {
    return (









        <Fragment>
            <Image src="/images/graderCreate/edit.svg" width="20" height="20" />













            <style jsx>{style}</style>
            <style jsx>
                {
                    `
                        .fade-in {
                          animation: fade-in 0.3s forwards;
                        }
                        .fade-out {
                          animation: fade-out 0.3s forwards;
                        }
                        @keyframes fade-in {
                          0% {
                            opacity: 0;
                          }
                          100% {
                            opacity: 1;
                          }
                        }
                        @keyframes fade-out {
                          0% {
                            opacity: 1;
                          }
                          100% {
                            opacity: 0;
                          }
                        }

                        
                        
                        `
                }
            </style>
        </Fragment>
    )
};
export default edit;