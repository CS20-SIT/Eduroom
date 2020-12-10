import React, {Fragment} from 'react'
const UserBar = ({user}) => {
    return (
        <Fragment>
            <div className="user-bar">
                <div className="row">
                    <div>LV : {user.level}</div>
                    <div>&#127942; : {user.trophy}/10</div>
                </div>
                <div className="row">
                    <div style={{background:'#A27CEF',color:'white',padding:'.1rem 1rem',borderRadius:'1rem'}}>
                    {user.exp}/9999</div>
                </div>
            </div>
            <style jsx>
                {`
                .user-bar {
                    display: flex;
                    flex-flow: column;
                    background: white;
                    border-radius: 15px;
                    padding: 1rem 2rem;
                    margin: 1rem 2rem;
                }
                .row {
                    display: flex;
                    flex: 1;
                    width:100%;
                }
                `}
            </style>
        </Fragment>
    )
}
export default UserBar;