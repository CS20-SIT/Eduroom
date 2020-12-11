import React, { Fragment, useContext } from 'react'
import Icon from './Icon'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import api from '../../api'
import AuthDialog from '../landing/authDialog'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import moment from 'moment'
import UserContext from '../../contexts/user/userContext'
import InputText from '../utils/InputText'
const IdBlock = () => {
	const [dialog,setDialog] = useState(false)
	const [data, setData] = useState([])
	const [edit, setEdit] = useState(false)
	const userContext = useContext(UserContext)
	const { user } = userContext
	const router = useRouter()
	const param = router.query.id || ''
	const [editData, setEditData] = useState({
		titlethread: '',
		content: '',
	})
	const GetData = async () => {
		if (param != '') {
			const result = await api.get(`/api/forum/${param}`)
			setData(result.data.data.forum)
		}
	}
	useEffect(() => {
		GetData()
		console.log(data)
	}, [param])
	const useStyles = makeStyles((theme) => ({
		root: {
			flexGrow: 1,
		},
		paper: {
			padding: theme.spacing(3),
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'flexStart',
			// textAlign: 'center',
			color: theme.palette.text.secondary,
		},
	}))
	const openEdit = () => {
		setEdit(true)
		setEditData({ ...data })
	}
	const cancelEdit = () => {
		setEdit(false)
		setEditData({ titlethread: '', content: '' })
	}
	const saveEdit = () => {
		api.put(`/api/forum/${data.forumid}`,{old:{content:data.content},new:{...editData}}).then(res=>{
			setData({...editData})
			setEdit(false)
			setEditData({ titlethread: '', content: '' })
		}).catch(err=>{
			console.log(err)
		})
	}
	const handleChangeEdit = (e) => {
		setEditData({...editData,[e.target.name]: e.target.value})
	}
	const handleLike = (id, callback) => {
		if (user) {
			api
				.post(`/api/forum/like/${id}`)
				.then((res) => {
					GetData()
					callback()
				})
				.catch((err) => {
					console.log(err)
				})
		} else {
			setDialog(!dialog)
		}
	}
	const handleDelete = ()=> {
		api.delete(`/api/forum/${data.forumid}`).then(res=>{
			router.push('/forum')
		}).catch(err=>{
			console.log("Lop mai dai")
		})
	}
	const classes = useStyles()

	return (
		<Fragment>
			{
				dialog ? (
					<AuthDialog handleClick={()=>{setDialog(false)}}/>
				) :null
			}
			<div className={classes.root}>
				<Grid container spacing={3} variant="outlined">
					<Grid item xs={12} borderColor="#a27cef">
						<div>
							<Paper className={classes.paper} style={{ border: '2px solid #d5c1fc' }}>
								<div
									style={{
										fontSize: '25px',
										marginBottom: '20px',
										color: '#5B5B5B',
										display: 'flex',
										justifyContent: 'space-between',
									}}
								>
									{edit ? (
										<div className="edit-title">
											<input type="text" value={editData.titlethread} onChange={handleChangeEdit} name="titlethread"/>
										</div>
									) : (
										<div>
											<b>{data.titlethread}</b>
										</div>
									)}

									<div>
										{user && data.userid == user.userid && !edit ? (
											<i className="fas fa-pen" onClick={openEdit} style={{ size: '2px', marginRight: '20px' }}></i>
										) : null}
										{user && data.userid == user.userid && !edit ? (
											<i className="fas fa-trash-alt" onClick={handleDelete} style={{ size: '2px' }}></i>
										) : null}

										{user && data.userid == user.userid && edit ? (
											<i className="fas fa-times" onClick={cancelEdit} style={{ size: '2px', marginRight: '20px' }}></i>
										) : null}
										{user && data.userid == user.userid && edit ? (
											<i className="fas fa-check" onClick={saveEdit} style={{ size: '2px' }}></i>
										) : null}
									</div>
								</div>
								{edit ? (
									<div className="edit-content">
										<textarea type="text" onChange={handleChangeEdit} name="content">
											{editData.content}
										</textarea>
									</div>
								) : (
									<div>{data.content}</div>
								)}

								<div style={{ marginTop: '25px', fontSize: '13px', color: '#5b5b5b' }}>
									<p>
										{data.author} post in {moment(data.posttime).fromNow()}
									</p>
								</div>
								<div className="icon" style={{ bottom: 0, right: 0, marginTop: '15px' }}>
									<div style={{ paddingRight: '30px', display: 'flex', alignItems: 'center' }}>
										<Icon
											type="like"
											isHover={data.is_like != null}
											clicked={(callback) => {
												handleLike(data.forumid, callback)
											}}
											isPointer={true}
										/>
										<div style={{cursor:'default !important'}}>{data.likes}</div>
									</div>
									<div style={{ paddingRight: '30px', display: 'flex', alignItems: 'center',cursor:'default !important' }}>
										<Icon type="comment" changeHover={false} 
											isPointer={false}/>
										<div>{data.comments}</div>
									</div>
								</div>
							</Paper>
						</div>
					</Grid>
				</Grid>
			</div>
			<style jsx>
				{`
					.button {
						cursor: pointer;
						opacity: 0.8;
						transition: 0.25s;
						display: flex;
						justify-content: end;
						flex-direction: row;
						align-items: flex-end;
					}
					.icon {
						display: flex;
						justify-content: end;
						flex-direction: row;
						align-items: flex-end;
					}
					div.edit-title {
						width: 80%;
					}
					div.edit-content {
						width: 80%;
					}
					.edit-content textarea {
						width: 100%;
						line-height: 32px;
						font-size: 1em;
						min-height: 160px;
						border: 0.13rem solid rgb(213, 193, 252);
						border-radius: 5px;
						padding: 0.25rem 0.5rem;
					}
					.edit-title input {
						width: 100%;
						line-height: 32px;
						font-size: 1.1em;
						font-weight: 500;
						border: 0.13rem solid rgb(213, 193, 252);
						border-radius: 5px;
						padding: 0.25rem 0.5rem;
					}
				`}
			</style>
		</Fragment>
	)
}
export default IdBlock
