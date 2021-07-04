import { Fragment, useContext } from 'react'
import style from '../../../styles/calendar/calendar'
import Image from 'next/image'
import ProtectedAdminRoute from '../../../components/admin/protectedAdminRoute'
import AdminTemplate from '../../../components/admin/template/default'
import AdminContext from '../../../contexts/admin/adminContext'
import CalendarCom from '../../../components/admin/calendar/calendar'

const Calendar = (props) => {
	/*  const openEvent = props.openEvent
    const setOpenEvent = props.setOpenEvent */
	const adminContext = useContext(AdminContext)
	const { admin } = adminContext

	return (
		<Fragment>
			<ProtectedAdminRoute>
				<AdminTemplate>
					<CalendarCom />
				</AdminTemplate>
				<style jsx>{style}</style>
			</ProtectedAdminRoute>
		</Fragment>
	)
}
export default Calendar
