import React, { Fragment, useEffect, useState } from "react"
import { useRouter } from "next/router"
import Box from "../../../../components/graderSubmit/Box"
import Layout from "../../../../components/graderSubmit/Layout"
import style from "../../../../styles/graderSubmit/contests/contestPage/announcement/contestAnnouncementPage"
import ContestLayout from "../../../../components/graderSubmit/contests/ContestLayout"
import ContestAnnouncementList from "../../../../components/graderSubmit/contests/allList/ContestAnnouncementList"

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
                    <div className="flex-item" style={{ flexBasis: "20%" }}>
                      Admin
                    </div>
                    <div className="flex-item" style={{ flexBasis: "20%" }}>
                      Title
                    </div>
                    <div className="flex-item" style={{ flexBasis: "40%" }}>
                      Description
                    </div>
                    <div className="flex-item" style={{ flexBasis: "20%" }}>
                      Date
                    </div>
                  </div>
                  <ContestAnnouncementList />
                  <ContestAnnouncementList />
                  <ContestAnnouncementList />
                  <ContestAnnouncementList />
                  <ContestAnnouncementList />
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
