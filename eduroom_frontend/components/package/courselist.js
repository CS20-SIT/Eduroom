import React, { Fragment } from 'react'
import style from '../../styles/package/createpackage'

const Courselist = (props) => {
    console.log(props);
    return (
        <Fragment>
            <div className="coursebox list">
                Picture<span style={{ padding: '0 20%' }}>Name: {props.name}</span></div>
                

            <style jsx>{style}</style>
        </Fragment>
    )
}
export default Courselist
