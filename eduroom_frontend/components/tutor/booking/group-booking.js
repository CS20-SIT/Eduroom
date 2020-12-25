import React, { Fragment, useState } from 'react'
import utils from '../../../styles/tutor/utils'

import api from '../../../api'

const GroupBooking = ({ setBookingGroup, students, setStudents, focus, setFocus, iid }) => {
	const [hoverSelection, setHoverSelection] = useState(false)
	const [members, setMembers] = useState([])

	const typingMember = async (e) => {
		try {
			const key = e.target.value
			if (key.length == 0) {
				setMembers([])
				return
			}

			const res = await api.get('/api/tutor/utils/id', {
				params: {
					name: key,
					iid,
				},
			})
			const mockup = res.data.students
			const filtered = mockup.filter((x) => {
				return x.name.toLowerCase().includes(key.toLowerCase())
			})
			setMembers(filtered)
		} catch (err) {}
	}

	return (
		<Fragment>
			<div id="booking-group" className={`w-full px-8 my-2 py-8 mx-4 shadow rounded-md bg-white-faded relative`}>
				<div
					className="text-lg font-bold font-lato absolute top-0 right-0 mx-4 my-2 px-2 py-2 pointer text-secondary"
					onClick={() => {
						setBookingGroup(false)
					}}
				>
					x
				</div>
				<div className="flex relative">
					<div className="text-lg font-bold font-lato spacing-md">Members</div>
					<div style={{ flexGrow: 1 }} className="my-auto">
						<div className="tooltip">
							<div>?</div>
							<div className="tips">The members are not including yourself</div>
						</div>
					</div>
				</div>
				<div className="relative">
					<div className="relative">
						<input
							className="input--members"
							type="text"
							id="searchbar"
							placeholder="Firstname or Lastname"
							autoComplete="off"
							onChange={typingMember}
							onFocus={(e) => {
								typingMember(e)
								setFocus(true)
							}}
						/>

						<i
							className="fa fa-search absolute my-3 "
							style={{
								marginLeft: -2 + 'rem',
								color: 'rgba(83, 83, 83, 0.4)',
							}}
						></i>
					</div>
					{focus && members.length > 0 ? (
						<div className="dropdown--list">
							{members.map((m, i) => (
								<div
									key={i}
									className={`members-add dropdown--item pointer ${hoverSelection == i ? 'bg-secondary-faded ' : ''}`}
									onClick={() => {
										setMembers([])
										setFocus(false)
										document.getElementById('searchbar').value = ''
										const tmp = [...students]
										const check = tmp.findIndex((s) => {
											return s.name == m.name
										})
										if (check != -1) return
										tmp.push(m)
										setStudents(tmp)
									}}
									onMouseEnter={() => {
										setHoverSelection(i)
									}}
									onMouseLeave={() => {
										setHoverSelection(-1)
									}}
								>
									{m.name}
								</div>
							))}
						</div>
					) : (
						''
					)}
				</div>
				<div className="flex flex-wrap">
					{students.map((s, i) => (
						<span key={i} className="members-removal shadow rounded-md px-2 py-1 mx-1 my-1">
							<span className="text-md font-bold text-secondary opacity-80">
								{s.name}{' '}
								<span
									className="font-light px-1 pointer"
									onClick={() => {
										let tmp = [...students]
										tmp.splice(i, 1)
										setStudents(tmp)
									}}
								>
									x
								</span>
							</span>
						</span>
					))}
				</div>
			</div>
			<style jsx>{utils}</style>
			<style jsx>{``}</style>
		</Fragment>
	)
}

export default GroupBooking
