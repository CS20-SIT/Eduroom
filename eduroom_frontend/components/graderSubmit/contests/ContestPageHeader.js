import { Fragment, useState } from 'react'
import style from '../../../styles/graderSubmit/contests/contestPageHeader'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
// import SearchAppBar from "../../../components/graderSubmit/SearchBar"

const ContestHeader = (props) => {
	const [anchorEl, setAnchorEl] = useState(null)

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget)
	}

	const handleClose = () => {
		setAnchorEl(null)
	}

	return (
		<Fragment>
			<div className="properties">
				<div className="header">
					<h2 className="title">ALL CONTESTS</h2>
					<div className="tools">
						<div className="left">
							<Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
								Rule
							</Button>
							<Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
								<MenuItem onClick={handleClose}>OI</MenuItem>
								<MenuItem onClick={handleClose}>ACM</MenuItem>
							</Menu>

							<Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
								Status
							</Button>
							<Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
								<MenuItem onClick={handleClose}>All</MenuItem>
								<MenuItem onClick={handleClose}>Underway</MenuItem>
								<MenuItem onClick={handleClose}>Not started</MenuItem>
								<MenuItem onClick={handleClose}>Ended</MenuItem>
							</Menu>
						</div>
						<div className="right">{/* <SearchAppBar /> */}</div>
					</div>
				</div>
			</div>
			<div className="list">{props.children}</div>
			<style jsx>{style}</style>
		</Fragment>
	)
}

export default ContestHeader
