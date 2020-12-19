import React, {Fragment} from 'react'
import { useRouter } from 'next/router'
const ActionCard = ({img,title,subtitle,buttonText,buttonColor,url}) => {
    const router = useRouter();
    return (
        <Fragment>
            <div className="action-card">
                <div className="action-card-image"></div>
                <div className="action-card-content">
                    <div className="action-card-title">
                        {title}
                    </div>
                    <div className="action-card-subtitle">
                        {subtitle}
                    </div>
                    <div className="action-card-button">
                        <button onClick={()=>router.push(url)} style={{background:buttonColor}}>{buttonText}</button>
                    </div>
                </div>
            </div>
            <style jsx>
                {
                    `
                    .action-card {
                        min-height: 400px;
                        width: 100%;
                        border-radius: 25px;
                        background:white;
                        display:flex;
                        flex-flow:column;
                        overflow:auto;
                        filter: drop-shadow(0px 3px 10px #EBEBEB);
                    }
                    .action-card-image {
                        height: 60%;
                        width:100%;
                        background-repeat: no-repeat;
                        background-size: cover;
                        background-position: center;
                        background-image: url(${img});
                    }
                    .action-card-content{
                        padding: 1rem 1.5rem;
                    }
                    .action-card-title{
                        font-size: 1.3rem;
                        font-weight:bold;
                        padding-bottom: .25rem;
                        color: #212121;
                    }
                    .action-card-subtitle{
                        font-size: 1.1rem;
                        font-weight: 500;
                        padding-bottom: .25rem;
                        color: #A7ABC5;
                    }
                    .action-card-button {
                        padding: 1rem 0;
                    }
                    .action-card-button > button {
                        background: ${buttonColor};
                        width: 120px;
                        border-radius: 20px;
                        color: #ffffff;
                        font-weight: 500;
                        padding: .5rem;
                        outline: none;
                        border: none;
                        cursor:pointer;

                    }
                    `
                }
            </style>
        </Fragment>
    )
}

export default ActionCard;