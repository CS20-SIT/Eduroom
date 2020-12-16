import React, { Fragment, useEffect, useState } from 'react'
import UserBar from './Userbar'
import AllPath from './AllPath'
import CurrentPath from './CurrentPath'
import LeaderBoard from '../leaderboard/leaderboard'
import api from '../../api'
const LearningPath = () => {
    const [path,setPath] = useState([])
    const [current, setCurrent] = useState(null)
    useEffect(()=>{
        api.get('/api/learningpath').then(res=>{
            setPath(res.data.data)
        }).catch(err=>{
            console.log(err)
        })
    },[])
	const selectPath = (val) => {
		let current = path.find((el) => el.pathid == val)
		setCurrent(current)
	}
	const back = () => {
		setCurrent(null)
	}
	return (
		<Fragment>
			<UserBar user={{ level: 50, trophy: 3, exp: 5000 }} />
			<div className="learning-path">
				<div className="learning">
					{current ? <CurrentPath path={current} back={back} /> : <AllPath path={path} selectPath={selectPath} />}
				</div>
				<div className="leader">
                    <div style={{position:'sticky',top:'85px'}}>
					<div className="leaderboard">
						<LeaderBoard mini={true} />
					</div>
					<div className="xpshop">
						<span style={{marginRight:'.5rem'}}>
							<svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M31.5078 0H5.49219C4.29482 0 3.32422 0.9706 3.32422 2.16797H33.6758C33.6758 0.9706 32.7052 0 31.5078 0Z"
									fill="white"
								/>
								<path
									d="M33.6758 32.6641H3.32422C2.12685 32.6641 1.15625 33.6347 1.15625 34.832V35.916C1.15625 36.5147 1.64159 37 2.24023 37H34.7598C35.3584 37 35.8438 36.5147 35.8438 35.916V34.832C35.8438 33.6347 34.8731 32.6641 33.6758 32.6641Z"
									fill="white"
								/>
								<path
									d="M32.3208 17.3438C30.9843 17.3438 29.7702 16.8612 28.7979 16.0868C27.8255 16.8612 26.6114 17.3438 25.2749 17.3438C24.3956 17.3438 23.5759 17.1224 22.8359 16.7597V30.4961H33.6758V17.1627C33.2392 17.2703 32.79 17.3438 32.3208 17.3438ZM26.0879 23.8477C25.4892 23.8477 25.0039 23.3623 25.0039 22.7637C25.0039 22.1649 25.4892 21.6797 26.0879 21.6797C26.6865 21.6797 27.1719 22.1649 27.1719 22.7637C27.1719 23.3623 26.6865 23.8477 26.0879 23.8477Z"
									fill="white"
								/>
								<path d="M16.332 21.6797H9.82812V26.0879H16.332V21.6797Z" fill="white" />
								<path
									d="M18.5 17.3438C17.2342 17.3438 16.0835 16.8895 15.16 16.1595C14.2024 16.8914 13.0207 17.3438 11.7251 17.3438C10.3886 17.3438 9.17448 16.8612 8.20215 16.0868C7.22981 16.8612 6.01568 17.3438 4.6792 17.3438C4.20998 17.3438 3.76078 17.2703 3.32422 17.1627V30.4961H20.668V16.8548C20.0033 17.1562 19.2777 17.3438 18.5 17.3438ZM18.5 27.1719C18.5 27.771 18.0152 28.2559 17.416 28.2559H8.74414C8.14499 28.2559 7.66016 27.771 7.66016 27.1719V20.5957C7.66016 19.9966 8.14499 19.5117 8.74414 19.5117H17.416C18.0152 19.5117 18.5 19.9966 18.5 20.5957V27.1719Z"
									fill="white"
								/>
								<path
									d="M1.15625 8.67188V11.6528C1.15625 13.5985 2.73352 15.1758 4.6792 15.1758C6.62488 15.1758 8.20215 13.5985 8.20215 11.6528C8.20215 13.5985 9.77942 15.1758 11.7251 15.1758C13.6708 15.1758 15.248 13.5985 15.248 11.6528V11.9238C15.248 13.7198 16.704 15.1758 18.5 15.1758C20.296 15.1758 21.752 13.7198 21.752 11.9238V11.6528C21.752 13.5985 23.3292 15.1758 25.2749 15.1758C27.2206 15.1758 28.7979 13.5985 28.7979 11.6528C28.7979 13.5985 30.3751 15.1758 32.3208 15.1758C34.2665 15.1758 35.8438 13.5985 35.8438 11.6528V8.67188C15.1735 8.67188 13.7884 8.67188 1.15625 8.67188Z"
									fill="white"
								/>
								<path d="M34.346 4.33594H2.6543L1.57031 6.50391H35.4299L34.346 4.33594Z" fill="white" />
							</svg>
						</span>
						<span style={{marginLeft:'.5rem'}}>XP Point Shop</span>
					</div></div>
				</div>
			</div>
			<style jsx>
				{`
					.learning-path {
						width: 100%;
						padding: 0rem 4rem;
						display: flex;
					}
					.learning {
						width: 75%;
					}
					.leader {
						margin-left: 2rem;
						width: 25%;
                    }
                    .xpshop {
                        padding: 1rem 2rem;
                        background: #EB7DB1;
                        border-radius: 10px;
                        display:flex;
                        align-items:center;
                        justify-content: center;
                        font-size: 1.3rem;
                        font-weight: bold;
                        color: #FFFFFF;
                        margin: 1rem 0rem;
                        cursor:pointer;
                    }
					.leaderboard {
						width: 100%;
						padding: 0.8rem 0.4rem;
						background: white;
						box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.25);
                        border-radius: 10px;
					}
				`}
			</style>
		</Fragment>
	)
}
export default LearningPath
