import React, { Fragment } from 'react'
import style from '../../styles/package/content'
import Link from 'next/link'
const Addpackage = () => {
  return (
    <Fragment>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Link href="/user/instructor/course/createpackage">
          <button className="addpackbutton">
            <i className="fas fa-plus-circle"></i>
            <br></br>
            Add new package
          </button>
        </Link>
      </div>
      <style jsx>{style}</style>
    </Fragment>
  )
}
export default Addpackage
