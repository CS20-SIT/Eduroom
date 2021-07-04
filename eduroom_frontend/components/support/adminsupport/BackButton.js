import { Fragment, useState } from 'react'
import Link from 'next/link'
const BackButton = () => {
	return (
		<Fragment>
			<div>
				<b>
					<Link href="/admin/support"> &lt; back </Link>
				</b>
			</div>
		</Fragment>
	)
}
export default BackButton
