import React, { Fragment } from 'react';
import style from '../../styles/event/event'
import { Button } from '@material-ui/core'
const content = () => {

    return (
        <Fragment>

            <div className="text-center test">
                <h1>TEST</h1>
            </div>
            <div>
                <form>
                    <input
                        className="text-field"
                        type="text"
                        placeholder="text"
                    />
                    <input
                        className="text-field"
                        type="text"
                        placeholder="text"
                    />
                    <div className="text-center">
                        <Button variant="contained" color="primary">Create</Button>
                    </div>
                </form>

            </div>








            <style jsx>
                {style}
            </style>
        </Fragment>
    );
}
export default content;
