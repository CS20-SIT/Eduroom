import React, {Fragment} from 'react'
import GeneralTemplate from '../../components/template/general';
import VerifyAccount from '../../components/verify/verifyAccount'
const Verify = () => {
    return (
        <Fragment>
            <GeneralTemplate>
                <VerifyAccount/>
            </GeneralTemplate>
        </Fragment>
    )
}
export default Verify;