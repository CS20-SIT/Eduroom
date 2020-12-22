import React, { Fragment, useContext } from 'react'
import ProtectedAdminRoute from '../../../../components/admin/protectedAdminRoute'
import AdminTemplate from '../../../../components/admin/template/default'
import AdminContext from '../../../../contexts/admin/adminContext'
import DetailAds from '../../../../components/advertisement/adDetailsWait'
const DetailAdPage = ({adid}) => {
  const adminContext = useContext(AdminContext)
  const { logoutAdmin } = adminContext
  return (
    <Fragment>
      <ProtectedAdminRoute>
        <AdminTemplate>
          Hello Admin <button onClick={logoutAdmin}>logout</button>
          <DetailAds id={adid} />
        </AdminTemplate>
      </ProtectedAdminRoute>
    </Fragment>
  )
}
export async function getServerSideProps(ctx) {
  try {
    const adid = ctx.query.adid
    return {props : {adid}}
  } catch (err) {
    return {props : {adid : ''}}
  }
}
export default DetailAdPage