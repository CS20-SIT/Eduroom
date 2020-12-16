import { Fragment } from 'react'
import { useRouter } from 'next/router'
import style from '../../styles/graderSubmit/pageSelectionButton'

const PageSelectionButton = (props) => {
	const router = useRouter()
	return (
		<Fragment>
			<div className="button-container">
				<div
					className={props.page == props.current ? 'all-button active' : 'all-button'}
					onClick={(e) => router.push(`/graderSystem/problem/${props.page}`)}
				>
					{props.last != null ? props.last : props.page}
				</div>
			</div>
			<style jsx>{style}</style>
		</Fragment>
	)
}
export default PageSelectionButton
