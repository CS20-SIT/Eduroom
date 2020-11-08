import React, { Fragment, useEffect, useState } from "react"
import { useRouter } from "next/router"
import Box from "../../../../components/graderSubmit/Box"
import Layout from "../../../../components/graderSubmit/Layout"
import style from "../../../../styles/graderSubmit/contests/contestPage/contestAnnouncementPage"
import ContestLayout from "../../../../components/graderSubmit/contests/ContestLayout"

const contestAnnouncement = () => {
  const [id, setId] = useState(null)
  const router = useRouter()
  useEffect(() => {
    const ID = router.query.id
    setId(ID)
  }, [])

  return (
    <Fragment>
      <Layout page="contest">
        <div className="main">
          <div className="size">
            <Box>
              <ContestLayout page="announcement" id={id}>
                <center>
                  <h2>CONTEST ANNOUNCEMENTS</h2>
                </center>
                <div className="announcement-list">
                  <div className="flex-container">
                    <div className="flex-item" style={{ flexGrow: "1.5" }}>
                      Admin
                    </div>
                    <div className="flex-item" style={{ flexGrow: "1.5" }}>
                      Title
                    </div>
                    <div className="flex-item" style={{ flexGrow: "2.5" }}>
                      Description
                    </div>
                    <div className="flex-item" style={{ flexGrow: "2" }}>
                      Date
                    </div>
                  </div>
                </div>
              </ContestLayout>
            </Box>
          </div>
        </div>
      </Layout>
      <style jsx>{style}</style>
    </Fragment>
  )
}
export default contestAnnouncement
