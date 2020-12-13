import { Fragment } from 'react'
import Styles from '../../styles/package/paginations'
const Pagination = ({ page}) => {
  return <Fragment>
    <div>
      <div className="btn">{page}</div>
      <style jsx>{Styles}</style>
    </div>
  </Fragment>
}

export default Pagination
