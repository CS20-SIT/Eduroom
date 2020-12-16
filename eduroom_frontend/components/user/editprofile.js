// import React, { Fragment } from 'react'
// import Link from 'next/link'
// const UserEdit = () => {
//   return (
//     <Fragment>
//       <button>
//         <Link href="/user">Apply</Link>
//       </button>
//     </Fragment>
//   )
// }
// export default UserEdit


import React, { Fragment, useState, useEffect, useContext } from 'react'
// import Link from 'next/link'
// import UserContext from '../../contexts/user/userContext'
// import styles from '../../styles/user/profile'
import api from '../../api';

const UserEditProfile = () => {
	// const userContext = useContext(UserContext)
	// const user = userContext.user
	const [birth, setBirth] = useState(null)
    const [joined, setJoined] = useState(null)
    const [user,setUser] = useState([])
	useEffect(() => {
        const fetchData=async()=>{
            const res=await api.get('api/user/getProfile');
            setUser(res.data);
            console.log(res.data);
        }
        fetchData();
        
		// if (user) {
		// 	const d = new Date(user.birthdate)
		// 	setBirth({ year: d.getFullYear(), month: d.getMonth() + 1, date: d.getDate() })
		// 	const j = new Date(user.createat)
        //     setJoined({ year: j.getFullYear(), month: j.getMonth() + 1, date: j.getDate() })
        // }
	}, [])
	// const getRole = (role) => {
	// 	return role.charAt(0).toUpperCase() + role.slice(1)
	// }
	// const getVerified = () => {
	// 	if (user.role === 'instructor') {
	// 		if (user.isverified) {
	// 			return <span style={{ color: 'green' }}>(Verified)</span>
	// 		} else {
	// 			return <span style={{ color: 'red' }}>(Not Verified)</span>
	// 		}
	// 	} else {
	// 		return null
	// 	}
    // }
    // const getBirthdate=()=>{
    //     // {birth.year}-${birth.month}-${birth.date}
    //     let month=birth.month;
    //     let date=birth.date;
    //     if((''+month).length<2) month='0'+month;
    //     if((''+date).length<2) date='0'+date;
    //     // console.log(birth.year+'-'+month+'-'+date)

    //     // document.getElementById("birthday").value = new Date(2000,12,20);
    //     return birth.year+'-'+month+'-'+date
    // }
	// const renderProfile = () => {
	// 	if (!user || !birth || !joined) return null
	// 	return (
	// 		<div className="profile-container">
	// 			<div style={{ marginRight: '40px' }}>
	// 				<img src={user.avatar} className="avatar" width="200px" height="200px"></img>
	// 			</div>
	// 			<div style={{ width: '100%' }}>
	// 				<div className="head">
	// 					<h1 style={{ marginBottom: '0px' }}>
	// 						{user.firstname} {user.lastname}
	// 					</h1>
	// 					<div style={{ marginTop: '20px' }}>
	// 						<div className="edit">
	// 							<h2 className="editText" style={{ margin: '0' }}>
	// 								Edit
	// 							</h2>
	// 							<i className="fas fa-edit edit-icon" style={{ marginTop: '7px' }}></i>
	// 						</div>
	// 					</div>
	// 				</div>

	// 				{/* <span style={{ color: '#A880F7', fontWeight: '700', marginTop: '4px' }}>{getRole(user.role)}</span> */}
	// 				{/* <span style={{ marginLeft: '5px' }}>{getVerified()}</span> */}
	// 				<div className="topic">
	// 					<p className="header">Email</p>
	// 					<span>{user.email}</span>
	// 				</div>

	// 				<div className="topic">
	// 					<p className="header">Birthday</p>
    //                     <input type="date" id="birthday" value='2000-12-20'></input>
	// 					{/* <span>{`${birth.year}-${birth.month}-${birth.date}`}</span> */}
	// 				</div>

	// 				<div className="topic">
	// 					<p className="header">Joined</p>
	// 					<span>{`${joined.date}-${joined.month}-${joined.year}`}</span>
	// 				</div>
	// 				<div className="topic">
	// 					<p className="header">Bio</p>
	// 					{/* <textarea name="Text1" cols="40" rows="5" value='sdjsdjsn'></textarea> */}
    //                     <input type="text" id="1" value='-'></input>
	// 				</div>
	// 				{renderRegister()}
	// 			</div>
	// 			<style jsx>{styles}</style>
	// 		</div>
	// 	)
	// }

	// const renderRegister = () => {
	// 	return (
	// 		<Fragment>
	// 			<div style={{ display: 'flex', justifyContent: 'flex-end' }}>
	// 				<Link href="/user">
	// 					<button className="btn">Apply</button>
	// 				</Link>
	// 			</div>
	// 			<style jsx>{styles}</style>
	// 		</Fragment>
	// 	)
	// }

	return (
		<Fragment>
			{/* <div className="container">{renderProfile()}</div>
			<style jsx>{styles}</style> */}
            <input type="text" id="1" value='-'></input>
		</Fragment>
    )
}
export default UserEditProfile
