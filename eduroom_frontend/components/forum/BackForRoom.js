import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Fragment } from 'react'
const BackForRoom = () => {
  const router = useRouter()
  const [location,setLocation] = useState('')
  useEffect(()=>{
    if(router.query.room){
      setLocation(router.query.room);
    }
  },[])
	const useStyles = makeStyles((theme) => ({
		link: {
			display: 'flex',
		},
		icon: {
			marginRight: theme.spacing(0.5),
			width: 20,
			height: 20,
		},
	}))

	function handleClick(event) {
		event.preventDefault()
		console.info('You clicked a breadcrumb.')
  }
	const classes = useStyles()
	return (
		<Fragment>
			<div style={{marginTop:'20px',marginButtom:'5px'}}>
				<Breadcrumbs>
					<Link color="inherit" href="/forum" onClick={handleClick} className={classes.link}>
						{/* <HomeIcon className={classes.icon} /> */}
						<span style={{cursor:"pointer"}}><i className="fas fa-home"/>{' '}<span>forum</span></span>
					</Link>
					<Typography color="textPrimary" className={classes.link}>
						{location}
					</Typography>
				</Breadcrumbs>
			</div>
		</Fragment>
	)
}
export default BackForRoom
