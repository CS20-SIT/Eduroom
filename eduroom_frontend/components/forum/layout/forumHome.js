import React, {Fragment} from 'react'
import ForumNav from './forumNav'
import HomeContent from './homeContext'
const ForumHome = () => {
    return (
        <Fragment>
            <div className="forumHome">
            <ForumNav/>
            <HomeContent/>
            </div>
            <style jsx>
                {
                    `
                    .forumHome {
                        background: #F4F5F7;
                        min-height: 100vh;
                    }
                    `
                }
            </style>
        </Fragment>
    )
}
export default ForumHome;